#!/usr/bin/env node
import fs from 'fs-extra'; // run: npm install fs-extra
import path from 'path';
import { execSync } from 'child_process';

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify the project directory:');
  console.log('  npx my-generator <project-directory>\n');
  process.exit(1);
}

const targetDir = path.join(process.cwd(), projectName);
// Update this path to where your custom blueprint folder lives
const templateDir = path.join(process.env.HOME || process.env.USERPROFILE, 'templates/vite-ts-custom');

async function build() {
  try {
    console.log(`🚀 Creating a new custom Vite TS app in ${targetDir}...`);
    
    // 1. Copy template files over to the new folder
    await fs.copy(templateDir, targetDir);
    
    // 2. Dynamically update package.json name to match your new project folder
    const pkgJsonPath = path.join(targetDir, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
      const pkg = await fs.readJson(pkgJsonPath);
      pkg.name = projectName;
      await fs.writeJson(pkgJsonPath, pkg, { spaces: 2 });
    }

    // 3. Automatically run npm install inside the new project
    console.log('📦 Installing dependencies...');
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

    console.log(`\n✅ Success! Created ${projectName}. Run:`);
    console.log(`  cd ${projectName}`);
    console.log(`  npm run dev\n`);

  } catch (err) {
    console.error('❌ Error generating project:', err);
  }
}

build();
