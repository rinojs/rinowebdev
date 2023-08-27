# @props

## The data that is sent from parent to their child

`@props` are used to send data from parent to child. It exists for putting more way to manipulate things in a page. This may change in the future because right now it is only passed to the 1 depth child.

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
