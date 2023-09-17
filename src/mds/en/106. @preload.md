# @preload

## The place for some Javascript and CSS that need to be at the top of files

You must use `require` or `import` at the very first preload.tot. So Rino can combine and pack them. Also @preload is used for putting the javascript and css that is shared between pages without HTML.

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
