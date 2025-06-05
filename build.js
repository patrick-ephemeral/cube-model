const esBuild = require('esbuild');

(async () => {
    await esBuild.build({
        entryPoints: ['src/main.ts'],
        outfile: 'dist/index.mjs',
        bundle: true,
        minify: true,
        format: "esm",
    });
})();
