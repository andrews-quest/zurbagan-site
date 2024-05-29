const esbuild = require("esbuild");

esbuild
    .build({
        entryPoints: ["components/App.tsx"],
        outdir: "public",
        bundle: true,
        minify: true,
        plugins: [],
        loader: {
            ".png" : "file",
            ".jpg" : "file"
        }
    })
    .then(() => console.log("Esbuild complete!"))
    .catch(() => process.exit(1))
