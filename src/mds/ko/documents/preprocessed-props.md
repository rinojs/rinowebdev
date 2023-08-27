# @props

## 부모가 자식에게 보내는 데이터

`@props`는 부모에서 자식으로 데이터를 보내는 데 사용됩니다. 페이지의 내용을 조작할 수 있는 더 많은 방법을 제공하기 위해 존재합니다. 지금은 1 깊이 하위 자식에게만 전달되므로 나중에 변경될 수 있습니다.

### /src/page/index.tot:

```
<d:html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <script type="text/javascript" src="main.js"></script>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ @data.title }}</title>
    </head>
    <body>
        <div class="test">
            {{ @component, ./test/pcomponents/test.tot, test }}
        </div>
    </body>
    </html>
</d:html>
<d:css>
    some css...
</d:css>
<d:js>
    some Javascript...
</d:js>
<d:test>
    {
        "a":"a",
        "b":"b",
        "c":"c"
    }
</d:test>
```

### /src/pcomponents/test.tot:

```
<d:html>
<div>
    TEST {{ @props.b }} !!
</div>
</d:html>
<d:js>
console.log("{{ @props.a }}");
</d:js>
<d:css>
</d:css>
```

### result:

```
some html content...
<div>
TEST b !!
</div>
some html content...
```
