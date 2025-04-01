// import type { roche-ui } from '@storybook/react'

// const roche-ui: roche-ui = {
//   parameters: {
//     controls: {
//       matchers: {
//        color: /(background|color)$/i,
//        date: /Date$/i,
//       },
//     },
//   },

//   tags: ['autodocs']
// };

// export default roche-ui;

// @ts-expect-error Vite injects this at runtime
if (import.meta.env.PROD) {
  // @ts-expect-error Vite injects this too
  window.__vite_base__ = '/design-system-Roche-Ideathon/';
}

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;