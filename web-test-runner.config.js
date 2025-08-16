import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: 'tests/**/*.test.js',
  nodeResolve: true,
  testRunnerHtml: testFramework => `
    <html>
      <head>
        <link rel="stylesheet" href="/themes/light.css">
      </head>
      <body>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
  ],
  plugins: [
    esbuildPlugin({ 
      ts: true,
      target: 'es2023',
      tsconfig: './tsconfig.json'
    }),
  ],
  testFramework: {
    config: {
      timeout: 3000,
    },
  },
};