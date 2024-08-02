import { build, type BuildOptions } from 'esbuild';

const sharedConfig: BuildOptions = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  packages: 'external',
};

build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  format: 'cjs',
  bundle: true,
  sourcemap: true,
  minify: false,
  platform: 'node',
  tsconfig: './tsconfig.build.json',
  packages: 'external',
}).catch(() => process.exit(1));

await build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: 'dist/index.js',
});

await build({
  ...sharedConfig,
  outfile: 'dist/index.esm.js',
  platform: 'neutral', // for ESM
  format: 'esm',
});
