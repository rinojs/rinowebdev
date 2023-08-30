# 컴포넌트

## 런타임의 컴포넌트

리노킷은 컴포넌트를 구축하기 위해 HTML 및 웹 컴포넌트의 표준을 따릅니다.
따라서 웹 컴포넌트를 사용하는 방법을 알고 있다면. 리노킷으로 웹페이지를 구축했을 때 더 많은 이점을 누릴 수 있습니다.

## 예시:

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

컴포넌트는 템플릿 태그 `<template></template>` 및 ID `컴포넌트-이름`을 사용해야 합니다.
여러 번 배치할 필요가 없습니다. 페이지의 하나의 템플릿이 하나의 컴포넌트 템플릿를 대표합니다.
템플릿은 기본적으로 숨겨집니다.

```
<d:html>
    <template id="componentName">
        {{ component, componentName2 }}

        또는

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

위 예시에서 `{{ component, componentName2, someId2 }}`,
`component` 는 컴포넌트임을 나타내고, `componentName2` 는 컴포넌트의 이름을 나타냅니다.
그리고 `someId2`는 컴포넌트의 ID 입니다.
컴포넌트 ID는 건너 뛸 수 있습니다: `{{ component, componentName2 }}`.

하위 컴포넌트의 ID는 다음과 같이 추가됩니다: `부모Id-자식Id`.
이 기능은 모든 컴포넌트에 대한 고유 ID를 생성하는 데 도움이 되며 컴포넌트를 더 잘 조작할 수 있습니다.
예시의 경우에는 `{{ component, componentName2, someId2 }}`의 자식 컴포넌트 ID는 `someId-someId2` 입니다.

컴포넌트를 다시 렌더링하려면 구성 요소를 다시 빌드하고 이전 컴포넌트를 새 컴포넌트로 교체하면 됩니다.
이는 널리 사용되는 웹 프레임워크와 비슷한 방식으로, 작은 크기로 페이지를 제어하므로 효율적입니다.
