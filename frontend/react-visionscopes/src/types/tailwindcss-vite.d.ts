declare module '@tailwindcss/vite' {
  import { Plugin } from 'vite';
  const tailwind: () => Plugin;
  export default tailwind;
}