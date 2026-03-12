const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'assest', 'project_screenshot');
const destDir = path.join(__dirname, '..', 'public', 'project_screenshot');

if (!fs.existsSync(srcDir)) {
  console.warn('copy-screenshots: source folder not found, skipping');
  process.exit(0);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
let copied = 0;
for (const file of files) {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  if (fs.statSync(src).isFile()) {
    fs.copyFileSync(src, dest);
    copied++;
  }
}
console.log(`copy-screenshots: copied ${copied} files to public/project_screenshot/`);
