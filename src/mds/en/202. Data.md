# Data

## Data in runtime

This feature is for enhancing how you handle your component.
Especially when you want to render a component again after updating some data.

/src/preloads/preload.tot:

```
<d:js>
    import Rino from 'rinokit';

    const rino = new Rino();
<d:js>
<d:css>
</d:css>
```

In a component:

```
<d:html>
    <template id="componentName">
        {{ component, componentName2 }}
        {{ data.name.name }}
    <template>
    <template id="componentName2">
        some html content...
    <template>
</d:html>
<d:css>
    some css...
</d:css>
<d:js>
    some javascript...
</d:js>
```

In some place:

```
<d:html>
    some html...
</d:html>
<d:css>
    some css...
</d:css>
<d:js>
    rino.dataStore.name = { name: "some name"}
</d:js>
```

Rinokit's Rino class has a data store. So you can modify `rino.dataStore` to use data within a component.
We may upgrade the function to use your data as an argument. But we don't have it yet.
