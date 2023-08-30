# @component

## Preprocessed component

### ./src/components/sometest.tot:

```
// @component indicates that it should be preprocessed component
// ./src/components/test.tot is file path of where component file is
<d:html>
some html...
{{ @component, ./src/components/test.tot }}
some html...
</d:html>
```

### ./src/components/test.tot:

```
<d:html>
<div>
test
</div>
</d:html>
```

### Result:

```
some html...
<div>
test
</div>
some html...
```

\
It is easy to understand. You can use a preprocessed component for layout or component that is being shared between pages. After you using this, you will find it is so easy to build reusable components with Rino.
