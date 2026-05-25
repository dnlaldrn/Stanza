const fs = require('fs');
const path = require('path');

// Target path to the file Vercel needs to find
const targetPath = path.join(__dirname, './src/environments/environment.prod.ts');

// Layout structure for the production file
const envConfigFile = `export const environment = {
  production: true,
  supabaseUrl: '${process.env.SUPABASE_URL || ""}',
  supabaseAnonKey: '${process.env.SUPABASE_ANON_KEY || ""}'
};
`;

// Dynamically generate the missing file on Vercel's server
fs.writeFileSync(targetPath, envConfigFile);
console.log(`✅ Production environment file generated successfully at ${targetPath}`);
