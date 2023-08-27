# @events

## With Rino you can write event attributes shorter in HTML

```
@click -> onclick
```

Rino will preprocess all the events with `@`. And you can still use `on` as well.

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
