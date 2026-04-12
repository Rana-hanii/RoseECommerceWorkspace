import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run RoseE-Commerce:serve',
        production: 'npx nx run RoseE-Commerce:serve-static',
      },
      ciWebServerCommand: 'npx nx run RoseE-Commerce:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
