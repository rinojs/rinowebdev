# Component

## Component in runtime

You write the component code just like preprocessed component but you can not place `@preload` or `@component`. You can still pass `@data` and `@props` to the runtime component as they are part of preprocessing. Rino will put the HTML part as a variable in the Javascript code. And you can use it for manipulating your GUI in runtime.

Remember, we are planning to rework this feature as it is not that powerful. So this may change a lot.

## Example:

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

In the example, from `{{ component, ./test/components/comptest.tot, componentHTML }}` componentHTML becomes name of variable in Javascript. If you want to pass props, then you can do it like `{{ component, ./test/components/comptest.tot, componentHTML, someprops }}`.
