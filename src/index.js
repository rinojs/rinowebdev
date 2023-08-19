const Rino = require('rinojs');
const path = require('path');
const pages = require('./pages');

async function build()
{
    let rino = new Rino();

    let args = {
        pages: pages,
        root: path.resolve(__dirname, "../public/"),
        projectDirname: path.resolve(__dirname, "./")
    }

    await rino.dev(args);
}

build();