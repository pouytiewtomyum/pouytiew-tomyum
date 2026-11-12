const { compile } = require('@tailwindcss/node');
const { Scanner } = require('@tailwindcss/oxide');
const fs = require('fs');
const path = require('path');

async function buildCss() {
  const root = path.resolve(__dirname, '..');
  const inputPath = path.join(root, 'app', 'input.css');
  const outputPath = path.join(root, 'app', 'globals.css');

  const css = fs.readFileSync(inputPath, 'utf-8');
  const compiler = await compile(css, {
    base: root,
    onDependency: () => {},
  });

  const scanner = new Scanner({
    sources: [
      { base: root, pattern: 'app/**/*.{js,ts,jsx,tsx}', negated: false },
      { base: root, pattern: 'components/**/*.{js,ts,jsx,tsx}', negated: false },
      { base: root, pattern: 'data/**/*.{js,ts,jsx,tsx}', negated: false },
    ],
  });

  const candidates = scanner.scan();
  const compiled = compiler.build(candidates);

  fs.writeFileSync(outputPath, compiled, 'utf-8');
  console.log(`[Tailwind v4] Compiled ${candidates.length} candidates -> ${outputPath} (${compiled.length} bytes)`);
}

buildCss().catch((err) => {
  console.error('[Tailwind v4] Error compiling CSS:', err);
  process.exit(1);
});
