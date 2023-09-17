const chokidar = require('chokidar');

async function createWatcher(publicdir, src, port, wss, callback)
{
    const watcher = chokidar.watch([src, publicdir]).on('change', async (filepath) =>
    {
        if (typeof callback == 'function')
        {
            await callback();
        }

        console.log(`File ${ filepath } has been changed`);
        console.log("Rebuilding...");

        setTimeout(() =>
        {
            wss.clients.forEach((client) =>
            {
                client.send('reload');
            });
        }, 333);

        console.log(`Server listening on port ${ port }`);
        console.log(`Check http://localhost:${ port }`);
    })

    return watcher;
}

module.exports = { createWatcher }