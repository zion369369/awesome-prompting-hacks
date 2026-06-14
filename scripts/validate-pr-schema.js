import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');

function validate() {
  console.log('[START] Validating prompt database schema...');
  
  if (!fs.existsSync(DATABASE_PATH)) {
    console.error(`[FAIL] Database file not found at: ${DATABASE_PATH}`);
    process.exit(1);
  }

  try {
    const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
    const prompts = JSON.parse(content);

    if (!Array.isArray(prompts)) {
      console.error('[FAIL] Prompt database is not a JSON Array.');
      process.exit(1);
    }

    const slugs = new Set();
    let errors = 0;

    prompts.forEach((p, index) => {
      const location = `Index ${index} (${p.title || 'Untitled'})`;

      if (!p.title || typeof p.title !== 'string' || p.title.trim().length === 0) {
        console.error(`[ERROR] ${location}: Missing or invalid "title".`);
        errors++;
      }

      if (!p.category || typeof p.category !== 'string' || p.category.trim().length === 0) {
        console.error(`[ERROR] ${location}: Missing or invalid "category".`);
        errors++;
      }

      if (!p.prompt || typeof p.prompt !== 'string' || p.prompt.trim().length === 0) {
        console.error(`[ERROR] ${location}: Missing or invalid "prompt" body.`);
        errors++;
      }

      if (!p.slug || typeof p.slug !== 'string' || p.slug.trim().length === 0) {
        console.error(`[ERROR] ${location}: Missing or invalid "slug".`);
        errors++;
      } else {
        if (slugs.has(p.slug)) {
          console.error(`[ERROR] ${location}: Duplicate slug found: "${p.slug}".`);
          errors++;
        }
        slugs.add(p.slug);
      }

      if (!Array.isArray(p.tags)) {
        console.error(`[ERROR] ${location}: "tags" field must be an array of strings.`);
        errors++;
      } else {
        p.tags.forEach((t, i) => {
          if (typeof t !== 'string' || t.trim().length === 0) {
            console.error(`[ERROR] ${location}: Tag at index ${i} is not a valid string.`);
            errors++;
          }
        });
      }
    });

    if (errors > 0) {
      console.error(`[FAIL] Schema validation failed with ${errors} error(s).`);
      process.exit(1);
    }

    console.log(`[SUCCESS] Database schema is valid. Checked ${prompts.length} prompts successfully.`);
  } catch (error) {
    console.error('[FAIL] Failed to parse prompt database:', error.message);
    process.exit(1);
  }
}

validate();
