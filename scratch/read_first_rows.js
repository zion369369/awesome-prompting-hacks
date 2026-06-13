const fs = require('fs');

const csvPath = 'C:/Users/SURFACE LAPTOP/.gemini/antigravity/brain/de1e8602-6656-4fce-a355-6c2147e8ca68/scratch/the-prompt-library/data/master_100_ai_prompts.csv';

function parseCSV(content) {
  const rows = [];
  let currentField = '';
  let currentRow = [];
  let inQuotes = false;
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }
  
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }
  
  return rows;
}

try {
  const content = fs.readFileSync(csvPath, 'utf8');
  const rows = parseCSV(content);
  
  let printedCount = 0;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i][0] === 'Fabric') {
      console.log(`\nFabric Row ${i}:`);
      console.log('Prompt Text Snippet:', (rows[i][1] || '').substring(0, 300));
      printedCount++;
      if (printedCount >= 3) break;
    }
  }
} catch (err) {
  console.error('Error:', err);
}
