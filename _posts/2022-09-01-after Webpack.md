---
title: "웹팩을 사용해보자."
excerpt: ""
layout: single


toc: true
toc_sticky: true

categories:
  - Webpack
tags:
  - 개발
  - 웹팩
last_modified_at: 2022-09-01
---

![Webpack](/assets/images/posts/22/08/22.08.29/웹팩.png)

# 웹팩을 사용해보자.

- 웹팩을 사용하기 전 관련 패키지를 설치해야합니다.  
  - npm i -D webpack webpack-cli

<br/>

- 앞으로 entry(입구) 파일이 될 index.js 파일을 만들어야합니다.
  - index.html 파일에 있는 js 부분을 index.js 부분으로 옮겨줍니다.

```javascript
// index.js
import helloWord from "./hello.js"
import worldWord from "./world.js"
document.querySelector('#root').innerHTML = `${helloWord} 모듈과 ${worldWord} 모듈`;
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Index</title>
  </head>
  <body>
    <h1>Hello, Index</h1>
    <div id="root"></div>
  </body>
</html>
```

<br/>

- 웹팩의 output(출구)에 해당하는 dist 폴더를 만들어줍니다.  

**실행결과**

![Webpack](/assets/images/posts/22/09/22.09.01/dist폴더를%20만든%20후%20폴더구조.png)

<br/>

- 터미널 명령어를 이용해서 실행.
  - npx webpack --mode development --entry ./src/index.js --output-filename index_bundle.js -o ./dist

index.js 파일이 hello.js 파일과 world.js 파일과 함께 dist 폴더 안에 index_bundle.js 파일로 번들링 된 것을 볼 수 있습니다.

**실행결과**

![Webpack](/assets/images/posts/22/09/22.09.01/npx실행%20후%20폴더구조.png)

<br/>

- 번들링 된 index_bundle.ts 파일을 index.html 파일에서 사용해보겠습니다.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Index</title>
  </head>
  <body>
    <h1>Hello, Index</h1>
    <div id="root"></div>
    <script src="../dist/index_bundle.js"></script>
  </body>
</html>
```

**실행결과**

![Webpack](/assets/images/posts/22/09/22.09.01/번들링%20후%20결과.png)

전에 포스팅에서 hello.js 파일과 world.js 파일을 요청하고 발생한 결과값과, index_bundle.js 파일만 요청하고 발생한 결과값이 같습니다.

예제가 아주 간단하기 때문에, 요청하는 파일 2개가 1개가 된 것이 대단한 것인가 의문이 들겠지만, 웹 애플리케이션이 훨씬 복잡하고 거대해졌을 때 진가를 발휘할 것입니다.
