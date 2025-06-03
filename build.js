const esBuild = require('esbuild');

(async () => {
    await esBuild.build({
        entryPoints: ['src/main.ts'],
        outfile: 'dist/index.js',
        bundle: true,
        minify: true,
    });
})();
