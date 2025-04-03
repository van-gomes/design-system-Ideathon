/* eslint-disable @typescript-eslint/no-unused-vars */
import { dirname, join } from "path";

function getAbsolutePath(value: string): unknown {
  return dirname(require.resolve(join(value, "package.json")));
}

export default {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.@(ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@chromatic-com/storybook"
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  features: {
    interactionsDebugger: true,
    storyStoreV7: false
  },

  viteFinal: async (config, options) => {
    config.base = options.configType === 'PRODUCTION' ? '/design-system-Roche/' : '/';
    return config;
  },  

  docs: {
    autodocs: true
  }
};