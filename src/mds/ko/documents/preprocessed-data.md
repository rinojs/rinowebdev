# @data

## 전처리용 데이터

데이터는 파일을 읽고 페이지에 데이터를 전달할 수 있기 때문에 유용한 기능입니다.

index.js 또는 pages.js:

```
data: { title: "Some title" }
```

.tot 파일:

```
{{ @data.title }}
```

## 예시:

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

## 마크다운을 데이터에 넣기

마크다운 데이터를 데이터 객체에 넣을 수 있습니다.

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

`{{ data.md.content }}`에서 `.content`는 pages.js의 이름입니다.

## Tot을 데이터에 넣기

.tot 데이터를 데이터 개체에 넣을 수 있습니다.

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

`{{ data.tot.content.example }}`에서 `.content`는 Pages.js의 이름입니다. `.example`은 데이터의 태그 이름입니다.
