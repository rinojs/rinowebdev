# @props

## 하위 컴포넌트의 속성

`@props`는 부모로부터 전달할 수 있는 데이터 목록입니다.
이 기능을 사용하면 동일한 컴포넌트 템플릿을 사용하더라도, 개성적인 컴포넌트를 만들 수 있습니다. 이 기능을 사용하여 UI 키트를 구축할 수 있습니다.

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

결과:

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

## 인라인으로 넘겨주는 방법

버전 v1.5.10 부터 인라인 기능을 사용할 수 있습니다.

부모 컴포넌트:

```
<d:html>
{{ @component, filename, (#222), (<button></button>) }}
</d:html>
```

자식 컴포넌트:

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

결과:

```
html:
<button></button>
css:
button {
    color: #222;
}
```
