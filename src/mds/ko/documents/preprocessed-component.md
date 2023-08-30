# @component

## 전처리된 컴포넌트

### ./src/components/sometest.tot:

```
// @component 전처리된 컴포넌트여야 함을 나타냅니다.
// ./src/components/test.tot는 컴포넌트 파일이 있는 파일 경로입니다.
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

### 결과물:

```
some html...
<div>
test
</div>
some html...
```

\
컴포넌트는 이해하기 쉽습니다. 전처리된 컴포넌트를 레이아웃이나 페이지 간에 공유되는 컴포넌트로 사용할 수 있습니다. 이 기능을 사용하고 나면 리노를 사용하여 재사용 가능한 구성 요소를 만드는 것이 매우 쉽다는 것을 알게 될 것입니다.
