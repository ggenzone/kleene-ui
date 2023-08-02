import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { peerDependencies, dependencies } from './package.json'
import dts from 'vite-plugin-dts';

export default defineConfig({
    /*define: {
        'process.env': process.env
      },*/
    plugins: [
        react(),
        dts({
            include: ['src/component/'],
            insertTypesEntry: true
        }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
        lib: {
            entry: resolve('src', 'components/index.ts'),
            name: 'KleeneUiCore',
            formats: ['es', 'umd'],
            fileName: (format) => `kleene-ui-core.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
        sourcemap: true
    },
});

