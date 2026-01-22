import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-starter',
  globalStyle: 'src/global.css',
  buildDist: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, 
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
