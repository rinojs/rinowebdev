# 데이터

## 런타임의 데이터

이 기능은 컴포넌트를 다루는 방법을 향상시키기 위한 것입니다.
특히 일부 데이터를 업데이트한 후 컴포넌트를 다시 렌더링하려는 경우입니다.

/src/preloads/preload.tot:

```
<d:js>
    import Rino from 'rinokit';

    const rino = new Rino();
<d:js>
<d:css>
</d:css>
```

컴포넌트에서:

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

페이지 어딘가:

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

리노킷의 Rino 클래스에는 데이터 저장소가 있습니다. 따라서 `rino.dataStore`를 수정하여 구성 요소 내의 데이터를 사용할 수 있습니다.
나중에 개발자가 직접 만든 데이터 오브젝트도 인수하여 사용할 수 있도록 함수를 업그레이드 할 수도 있습니다.
하지만 지금 당장은 해당 기능이 없습니다.
