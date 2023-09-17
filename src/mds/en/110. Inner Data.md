# Inner Data

## Inner Data is for placing data within syntax

You can use inner data to let people to choose props that can be used. You have to use tag `<>` within curly brackets.

./src/components/parent-component.tot

```
<d:html>
{{ @component, ./src/components/child-component.tot, filename, childpropsname }}
</d:html>
<d:filename>
./src/components/some-component.tot
</d:filename>
<d:childpropsname>
someprop1
</d:childpropsname>
```

./src/components/child-component.tot

```
<d:html>
{{ @component, <@props[0]>,  <@props[1]> }}
</d:html>
<d:someprop1>
somethig1
</d:someprop1>
<d:someprop2>
somethig2
</d:someprop2>
```

`@props`, `@data` and `@tot` can be placed.
