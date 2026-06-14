import fs from 'fs';
import path from 'path';

const issueBody = process.env.ISSUE_BODY;
if (!issueBody) {
  console.error('[ERROR] No ISSUE_BODY environment variable set.');
  process.exit(1);
}

function extractField(body, fieldName) {
  const lines = body.split('\n');
  let value = [];
  let found = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('### ')) {
      if (found) break;
      const currentHeader = trimmed.substring(4).trim().toLowerCase();
      if (currentHeader === fieldName.toLowerCase()) {
        found = true;
      }
    } else if (found) {
      value.push(line);
    }
  }
  
  return value.join('\n').trim();
}

const title = extractField(issueBody, 'Prompt Title');
const prompt = extractField(issueBody, 'Prompt Template Body');
const category = extractField(issueBody, 'Category');
const tagsRaw = extractField(issueBody, 'Tags');

if (!title || !prompt || !category) {
  console.error('[ERROR] Failed to parse required fields (title, prompt, category) from issue.');
  console.log('--- ISSUE BODY ---');
  console.log(issueBody);
  process.exit(1);
}

const tags = tagsRaw 
  ? tagsRaw.split(',').map(t => t.trim().toLowerCase()).filter(t => t.length > 0) 
  : ['ai'];

const slug = title.toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

const newPrompt = {
  title,
  category,
  tags,
  prompt,
  slug
};

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
if (!fs.existsSync(DATABASE_PATH)) {
  console.error('[ERROR] Database file not found at: ' + DATABASE_PATH);
  process.exit(1);
}

const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));

if (prompts.some(p => p.slug === slug)) {
  console.error(`[ERROR] Prompt with slug "${slug}" already exists in the database.`);
  process.exit(1);
}

prompts.push(newPrompt);
fs.writeFileSync(DATABASE_PATH, JSON.stringify(prompts, null, 2), 'utf-8');

console.log(`[SUCCESS] Appended new prompt "${title}" with slug "${slug}" to database.`);
