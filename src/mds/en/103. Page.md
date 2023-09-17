# Page

## Where preprocessing begins...

### /src/pages/index.tot:

```
<d:html>
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="main.js"></script>
        <link rel="stylesheet" href="style.css">

        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ @data.title }}</title>
    </head>
    <body>
        Some content..
    </body>
</html>
</d:html>
<d:js>
</d:js>
<d:css>
</d:css>
```

This is a single page template with .tot file format. As you can see, the structure is easy to understand like: `<d:html></d:html><d:js></d:js><d:css></d:css>`. You just need to place html, js and css in the tags. If you create more pages and load them from the `pages.js` file. You can build your website bigger.

### /src/pages.js:

```
const path = require('path');

async function pages()
{
    return [
        {
            data: {
                title: "Rino.js",
                desc: "Fast learning, preprocessing, intuitive web framework. Rino.js",
                url: ""
            },
            pageFilename: path.resolve(__dirname, "./pages/index.tot"),
            distDirname: path.resolve(__dirname, "../dist/"),
            filenames: {
                css: "style.css",
                js: "main.js"
            }
        }
    ]
}

module.exports = { pages }
```

pages.js is actually not only way to load pages. Because you just need to pass pages list into `dev()` function. So using `pages.js` is just a way that we recommend. Because you can apply some javascript code.

### /src/index.js:

```
const Rino = require('rinojs');
const path = require('path');
const { pages } = require("./pages.js");

async function dev()
{
    let rino = new Rino();

    let args = {
        pages: await pages(),
        distRoot: path.resolve(__dirname, "../dist/"),
        src: path.resolve(__dirname, "./"),
        publicDirname: path.resolve(__dirname, "../public/")
    }

    await rino.dev(args);
}

dev();
```
