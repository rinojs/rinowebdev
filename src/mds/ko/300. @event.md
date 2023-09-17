# @events

## 리노를 사용하면 HTML로 이벤트 속성을 짧게 작성할 수 있습니다.

```
@click -> onclick
```

리노는 `@`의 모든 이벤트를 전처리합니다. 그리고 여전히 `on` 또한 사용할 수 있습니다.

### /src/pages/index.tot:

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
        <button @click="someCode(event)"></button>
        Some content..
    </body>
</html>
</d:html>
<d:js>
</d:js>
<d:css>
</d:css>
```
