import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

if (!token) {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/^GITHUB_TOKEN=(.+)$/m);
    if (match) {
      token = match[1].trim();
    }
  }
}

const owner = 'zion369369';
const repo = 'awesome-prompting-hacks';
const README_PATH = path.join(__dirname, '../README.md');

async function getStargazers() {
  const url = `https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=100`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'Node-Fetch'
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to fetch stargazers (${response.status}): ${text}`);
  }

  return await response.json();
}

async function main() {
  console.log('[START] Updating Stargazers Wall of Fame...');
  try {
    if (!fs.existsSync(README_PATH)) {
      throw new Error(`README.md not found at: ${README_PATH}`);
    }

    const stargazers = await getStargazers();
    console.log(`Fetched ${stargazers.length} stargazers.`);

    let wallMarkdown = `\n### ⭐ Stargazers Wall of Fame\n\n`;
    wallMarkdown += `Thank you to our amazing stargazers! Star this repository to be featured here:\n\n`;
    
    if (stargazers.length === 0) {
      wallMarkdown += `*Be the first to star this repository! 🌟*\n`;
    } else {
      wallMarkdown += `<p align="left">\n`;
      stargazers.forEach(user => {
        wallMarkdown += `  <a href="${user.html_url}"><img src="${user.avatar_url}" width="50" height="50" style="border-radius: 50%; margin: 5px;" title="${user.login}" alt="${user.login}" /></a>\n`;
      });
      wallMarkdown += `</p>\n`;
    }
    
    wallMarkdown += `\n*Last updated: ${new Date().toUTCString()}*\n`;

    let readme = fs.readFileSync(README_PATH, 'utf-8');

    // Add markers to README if they don't exist
    if (!readme.includes('<!-- STARGAZERS_START -->')) {
      const splitTarget = '## 📜 License';
      if (readme.includes(splitTarget)) {
        readme = readme.replace(splitTarget, `<!-- STARGAZERS_START -->\n<!-- STARGAZERS_END -->\n\n${splitTarget}`);
      } else {
        readme = readme + `\n\n<!-- STARGAZERS_START -->\n<!-- STARGAZERS_END -->\n`;
      }
    }

    const startIdx = readme.indexOf('<!-- STARGAZERS_START -->');
    const endIdx = readme.indexOf('<!-- STARGAZERS_END -->');

    if (startIdx !== -1 && endIdx !== -1 && startIdx < endIdx) {
      const before = readme.substring(0, startIdx + '<!-- STARGAZERS_START -->'.length);
      const after = readme.substring(endIdx);
      readme = before + '\n' + wallMarkdown + '\n' + after;
      fs.writeFileSync(README_PATH, readme, 'utf-8');
      console.log('[SUCCESS] Stargazers Wall of Fame updated in README.md!');
    } else {
      console.error('[ERROR] Could not locate stargazers markers in README.md.');
    }
  } catch (error) {
    console.error('[ERROR] Failed to update stargazers:', error.message);
  }
}

main();
