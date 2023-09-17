# 내부 데이터

## 내부 데이터는 구문 안에 데이터를 넣기 위한 구문입니다

내부 데이터를 사용하여 사람들이 사용할 수 있는 소품을 선택하도록 할 수 있습니다. 중괄호 안에 `<>` 태그를 사용해야 합니다.

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

`@props`, `@data` 그리고 `@tot`을 사용할 수 있습니다.
