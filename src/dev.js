const path = require('path');
const { buildThis } = require('./build-this');
const { findPort } = require('./find-port');
const { createServer } = require('./server');
const { openBrowser } = require('./browser');
const { createWSS } = require('./wss');
const { createWatcher } = require('./watcher');
const { copyAssets } = require('./assets');
const { emptyDirectory } = require('./empty-directory');


let directoryPath = path.resolve(__dirname, "./mds/")
let distdir = path.resolve(`./dist/`);
let publicdir = path.resolve(`./public/`);
let domain = "https://rinojs.org/";
let name = "Rino";
let src = path.resolve(`./src/`);

if (domain[domain.length - 1] != "/") domain += '/';

async function dev()
{
    let enmd = path.join(directoryPath, '/en/');
    let komd = path.join(directoryPath, '/ko/');

    console.log(`Removing old build...`);
    emptyDirectory(distdir, publicdir);
    console.log(`Copying assets now...`);
    await copyAssets(publicdir, distdir);
    console.log(`Copying assets is done...`);

    await buildThis(enmd, distdir, domain, name, "");
    await buildThis(komd, path.join(distdir, `/ko`), domain, name, "ko");

    let port = await findPort(3000);
    const server = await createServer(distdir, port);
    const wss = await createWSS(server);
    const url = `http://localhost:${ port }`

    setTimeout(async () =>
    {
        await openBrowser(url);
    }, 333);

    await createWatcher(publicdir, src, port, wss, async () =>
    {
        console.log(`Removing old build...`);
        emptyDirectory(distdir, publicdir);
        console.log(`Copying assets now...`);
        await copyAssets(publicdir, distdir);
        console.log(`Copying assets is done...`);

        await buildThis(enmd, distdir, publicdir, domain, name);
        await buildThis(komd, path.join(distdir, `/ko`), publicdir, domain, name, "ko");
    });
}

dev();