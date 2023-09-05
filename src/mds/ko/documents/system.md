# 리노의 시스템

## 전체 구조

```
프로젝트 파일 전처리
-> 정적 파일 또는 데이터
-> 런타임에서의 리노킷 컴포넌트와 데이터
```

웹페이지에서 모든 것을 처리하는 대신, 전처리가 필요한 것과 아닌 것으로 나누어 처리하는 것이 더 효율적입니다.

## 전처리 구조

```
페이지를 하나씩 처리하면서
-> 페이지 내부의 구문을 순서대로
-> 페이지의 구문(파일 또는 오브젝트)의 구문을 처리
-> @component 같은 경우에는 구문(파일 또는 오브젝트)의 구문을 처리
```

Rino는 `<d:html></d:html>`의 구문을 기반으로 파일을 전처리합니다. 그리고 전처리 시스템은 구문이 배치된 순서를 따릅니다.

@preload는 Javascript와 CSS 파일의 상단에 배치됩니다. 그 다음 클라이언트(런타임) 컴포넌트가 배치됩니다. 마지막 부분은 전처리된 구성 요소와 페이지의 Javascript와 CSS입니다.

일부 구문은 `@data, @tot` 순서로 적용됩니다. 그것으로 뭔가를 시도할 수 있습니다. 하지만 `@data`를 먼저 적용해야한다거나 다른 것들을 먼적 적용해야한다는 순서 규칙이 없기 때문에 안전하지 않을 수 있습니다.

## Dev() 디렉토리 구조 및 시스템

```
Project/src/index.js
Project/src/pages.js
Project/src/pages/
Project/src/components/
Project/src/preloads/
Project/src/tots/
Project/src/mds/
Project/public/
Project/dist/
```

프로젝트 설정 방법은 전적으로 여러분에게 달려 있습니다. 하지만 위의 구조처럼 잘 정리해서 넣는 것이 좋습니다.

`Project/src/index.js`는 `Project/src/pages.js`를 로드하고 코드를 실행하는 곳입니다.

`Project/src/pages.js`는 페이지를 설정하고 필요한 일부 코드를 실행하는 곳입니다.

`Project/src/pages/`는 페이지용 .tot 파일을 저장하는 곳입니다.

`Project/src/components/`는 전처리할 컴포넌트용 .tot 파일을 저장하는 곳입니다.

`Project/src/preloads/`는 사전 로드용 .tot 파일을 저장하는 곳입니다.

`Project/src/tots/`는 콘텐츠 및 데이터 저장용 .tot 파일을 저장하는 곳입니다. 이를 사용하여 다국어 지원을 설정할 수 있습니다.

`Project/src/mds/`는 콘텐츠용 마크다운 .md 파일을 저장하는 곳입니다. 이를 사용하여 다국어 지원을 설정할 수 있습니다.

`Project/public/`은 어셋 파일들을 보관하는 곳입니다. 파일들은 `Project/dist/`에 복사됩니다. Rino는 파일이 수정된 시기를 확인하는 알고리즘을 사용합니다. 따라서 매우 효율적이고 빠릅니다.

`Project/dist/`는 Rino가 결과물을 생성하는 곳입니다.

## 추가적인 것들

`@props`, `@data` 및 `@tot`에 Rino 구문이 있는 경우. 그것들은 렌더링될 것입니다. 따라서 원하는 것이 아니라면 HTML 엔티티를 사용하는 것이 좋습니다.

전처리되는 모든 구문은 `@`으로 시작됩니다. 런타임 구성 요소도 실제로는 전처리되지만, 이는 페이지를 구축하는 데 더 많이 사용되는 위치에 따른 규칙 입니다. 이 규칙은 미래에 런타임 도구를 지원할 예정이기 때문에 만들어졌습니다.

[Tot](https://github.com/opdev1004/totjs)을 이해하시면 좋습니다. Tot은 훌륭한 IO 핸들러로 많은 것들을 할 수 있습니다.
