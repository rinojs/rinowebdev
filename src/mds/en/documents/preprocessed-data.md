# @data

## Data for preprocessing

Data is useful feature because you can read a file and pass data into your page.

index.js or pages.js:

```
data: { title: "Some title" }
```

Some .tot file:

```
{{ @data.title }}
```

## Example:

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

## Markdown to data

You can put markdown data into data object.

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
            mds:[
                {
                    name: "content",
                    filename: path.resolve(__dirname, "./mds/somedata.md")"
                }
            ]
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

### /src/mds/somedata.md:

```
# Some markdown
```

### /src/pages/index.tot:

```
Some html content...
{{ data.md.content }}
Some html content...
```

In `{{ data.md.content }}`, `.content` is the name from pages.js.

## Tot to data

You can put .tot data into data object.

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
            tots:[
                {
                    name: "content",
                    filename: path.resolve(__dirname, "./tots/somedata.tot")"
                }
            ]
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

### /src/tots/somedata.tot:

```
<d:example>
Some data
</d:example>
```

### /src/pages/index.tot:

```
Some html content...
{{ data.tot.content.example }}
Some html content...
```

In `{{ data.tot.content.example }}`, `.content` is from the name in pages.js. `.example` is the tag name of data.
