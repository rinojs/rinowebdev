const Rino = require('rinojs');
const path = require('path');

async function build()
{
    let data = {
        title: "Rino.js"
    }
    let rino = new Rino();

    let args = {
        pages: [
            {
                data: data,
                pageFilename: path.resolve(__dirname, "./page/index.tot"),
                distDirname: path.resolve(__dirname, "../public/"),
                filenames: {
                    css: "style.css",
                    js: "main.js"
                }
            }
        ],
        root: path.resolve(__dirname, "../public/"),
        projectDirname: path.resolve(__dirname, "./")
    }

    await rino.dev(args);
}

build();