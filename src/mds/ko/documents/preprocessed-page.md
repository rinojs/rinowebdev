# 페이지

## 전처리가 시작되는 곳...

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

.tot 파일 형식의 단일 페이지 템플릿입니다. 보시다시피 구조는 `<d:html></d:html><d:js></d:js><d:css></d:css>`로 이해하기 쉽습니다. 태그 내부에 html, js, css만 넣으면 됩니다. `pages.js`에서 더 많은 페이지를 생성하고 파일에서 로드하면 웹사이트를 더 크게 구축할 수 있습니다.

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

Pages.js가 페이지를 로드하는 유일한 방법이 아닙니다. 왜냐하면 페이지 리스트를 `dev()` 함수에 전달하기만 하면 되기 때문입니다. 따라서 `pages.js`는 우리가 권장하는 방법일 뿐입니다. 왜냐하면 자바스크립트 코드를 적용할 수 있기 때문입니다.

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
