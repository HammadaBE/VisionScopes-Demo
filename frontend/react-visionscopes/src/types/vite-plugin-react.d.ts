// src/types/vite-plugin-react.d.ts
declare module '@vitejs/plugin-react' {
  import type { Plugin } from 'vite';
  interface ReactPluginOptions {
    // …copy from the README if you want better completion…
  }
  function react(options?: ReactPluginOptions): Plugin;
  export default react;
}