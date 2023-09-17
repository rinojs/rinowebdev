# Component

## Component in runtime

Rinokit just follows the standard of HTML and Web Component for building a component.
So if you know how to use a web component. You are having more advantages for building a web page with Rinokit.

## Example:

/src/preloads/preload.tot:

```
<d:js>
    import Rino from 'rinokit';

    const rino = new Rino();
<d:js>
<d:css>
</d:css>
```

### /src/components/component-name.tot:

You must use template tag `<template></template>` and id `component-name` for component.
You don't have to place them multiple times. You only need one template for one component in a page.
The template is going to be hidden by default.

```
<d:html>
    <template id="componentName">
        {{ component, componentName2 }}

        or

        {{ component, componentName2, someId2 }}
    <template>
    <template id="componentName2">
    <template>
</d:html>
<d:css>
    some css...
</d:css>
<d:js>
    some Javascript...
</d:js>
```

### In single page or single component:

```
<d:html>
    some html...
</d:html>
<d:js>
    some Javascript...

    async function addSomeComponent(target)
    {
        const element = rino.buildComponent("componentName", "someId");
        target.append(element);
    }

</d:js>
<d:css>
    some CSS...
</d:css>
```

In the example, from `{{ component, componentName2, someId2 }}`,
`component` indicates that it is a component, `componentName2` indicates the name of component,
and `someId2` is id for component.
You can skip id part then it will be `{{ component, componentName2 }}`.

Child component's ID is added like: `parentId-childId`.
This feature help us to create a unique ID for all the component and we can manipulate them better.
In case of example the id of `{{ component, componentName2, someId2 }}` is `someId-someId2`.

If you want to render a component again, you can just build the component again and replace the old component with a new one.
And this is just efficient as you are controlling your page by small size, just like the popular web frameworks.
