# @preload

## 파일 상단에 있어야 하는 일부 Javascript와 CSS를 위한 장소

첫 번째 preload.tot에서 `require` 또는 `import`를 사용해야 합니다. 그래야 리노가 그것들을 결합하고 패키징할 수 있습니다. 또한 @preload는 HTML 없이 페이지 간에 공유되는 javascript와 css를 넣는 데에도 사용됩니다.

/src/pages/index.tot:

```
<d:html>
<!DOCTYPE html>
<html>
    <head>
        {{ @preload, ./src/preloads/preload.tot }}
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

/src/preloads/preload.tot:

```
<d:js>
const somePackage = require('somePackage');
<d:js>
<d:css>
</d:css>
```
