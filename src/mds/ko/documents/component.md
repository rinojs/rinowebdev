# 컴포넌트

## 런타임의 컴포넌트

전처리된 컴포넌트처럼 컴포넌트 코드를 작성하지만 `@preload`나 `@component`를 배치할 수 없습니다. 대신 `@data`와 `@props`는 사용할 수 있습니다. 리노는 HTML 부분을 Javascript 코드에 변수로 넣습니다. 그리고 런타임에 GUI를 조작하는 데 이를 사용할 수 있습니다.

이 기능은 그다지 강력하지 않기 때문에 재작업할 계획이라는 점을 기억하세요. 나중에 많이 변경될 수 있습니다.

## 예시:

### /src/page/index.tot:

```
<d:html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <script src="main.js"></script>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ @data.title }}</title>
    </head>
    <body>
        some HTML content...
        {{ component, ./test/components/comptest.tot, componentHTML }}
        <button @click="addComponent();">Click me to add innerHTML</button>
        <div id="comptesting"></div>
        some HTML content...
    </body>
    </html>
</d:html>
<d:css>
    some css...
</d:css>
<d:js>
    some Javascript...
    function addComponent()
    {
        document.getElementById('comptesting').innerHTML = document.getElementById('comptesting').innerHTML + componentHTML;
    }
</d:js>
```

### /src/components/comptest.tot:

```
<d:html>
    <div>
        This is a component test!
        And if it is successful this should be attached to the one of div.
    </div>
</d:html>
<d:js>
    some Javascript...
</d:js>
<d:css>
    some CSS...
</d:css>
```

예시에서의 `{{ component, ./test/components/comptest.tot, componentHTML }}`에서 componentHTML은 변수의 이름입니다. `@props`를 사용하고 싶은 경우 `{{ component, ./test/components/comptest.tot, componentHTML, someprops }}`와 같이 하면 됩니다.
