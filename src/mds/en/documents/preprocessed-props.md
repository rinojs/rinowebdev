# @props

## Properties for child component

`@props` is the list of data that you can pass from parent.
With this feature you can create a child component that is unique, even though you are using the template of component multiple times. You can build a UI Kit with this feature.

./src/components/parent-component.tot:

```
<d:html>
{{ @component, ./src/components/child-component.tot, props1, props2 }}
</d:html>
<d:css>
</d:css>
<d:js>
</d:js>
<d:props1>
<div>
some html content...
</div>
</d:props1>
<d:props2>#222</d:props2>
```

./src/components/child-component.tot:

```
<d:html>
{{ @props[0] }}
</d:html>
<d:css>
.some-elelent
{
    background-color: {{ @props[1] }};
}
</d:css>
```

result:

```
html:
<div>
some html content...
</div>

css:
.some-elelent
{
    background-color: #222;
}
```

## How to pass props inline

From version v1.5.10, we can use a inline props feature.

Parent component:

```
<d:html>
{{ @component, filename, (#222), (<button></button>) }}
</d:html>
```

Child component:

```
<d:html>
{{ @props[1] }};
</d:html>
<d:css>
button {
    color: {{ @props[0] }};
}
</d:css>
```

Result:

```
html:
<button></button>
css:
button {
    color: #222;
}
```
