---
title: "웹팩이 없을 때 발생할 수 있는 상황 예시"
excerpt: "굉장히 불편해보이는 상황이 대거 등장!"
layout: single


toc: true
toc_sticky: true

categories:
  - Webpack
tags:
  - 개발
  - 웹팩
last_modified_at: 2022-08-29
---

![Webpack](/assets/images/posts/22/08/22.08.29/웹팩.png)

# 웹팩이 없던 시절
> 변수가 겹치는 상황

- HTML 파일을 만들어주자.

Hello, Index를 출력하는 간단한 HTML 파일입니다.

```html
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
**실행결과**  
![Webpack](/assets/images/posts/22/08/22.08.29/index실행결과.png)

<br/>

- JS 파일을 2개 만들고 변수가 겹쳐지도록 세팅.

hello.js 파일과 world.js 파일을 만들었으며, 각각 word 라는 변수에 다른 문자열을 저장했습니다.

```javascript
// hello.js
let word = 'Hello'

// world.js
let word = 'World'
```
**폴더구조**  
![Webpack](/assets/images/posts/22/08/22.08.29/5-2js만든%20후%20폴더구조.png)

<br/>

- HTML 파일에 JS 파일을 장착하자.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Index</title>
  <script src="hello.js"></script>
  <script src="world.js"></script>
</head>
<body>
  <h1>Hello, Index</h1>
  <div id="root"></div>
<script>
  document.querySelector('#root').innerHTML = word;
</script>
</body>
</html>
```

**실행결과**  
![Webpack](/assets/images/posts/22/08/22.08.29/js를%20장착한%20index실행결과.png)
> 실행결과의 Network를 보면, hello.js 파일과, world.js 파일 둘 다 응답 받았지만, 변수 word가 겹쳐서 Hello와  World 중 Hello가 출력된 상황입니다.

<br/>

# 모듈 사용
위와 같이 불편한 문제를 해결하기 위해 모듈이 사용되었습니다.  

각각 2개의 js 파일을 ES6 모듈 시스템으로 모듈화 해주겠습니다.(각각의 코드는 서로 다른 파일입니다!)
```javascript
// hello.js
let word = 'Hello'
export default word


// world.js
let word = 'world'
export default word
```

모둘화 시켜준 js 파일들을 index.html 파일에 import 시켜서 사용하겠습니다.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Index</title>
<!--  <script src="hello.js"></script>-->
<!--  <script src="world.js"></script>-->
</head>
<body>
<h1>Hello, Index</h1>
<div id="root"></div>
<script type="module">
  import helloWord from "./hello.js"
  import worldWord from "./world.js"
  document.querySelector('#root').innerHTML = 
    `${helloWord} 모듈과 ${worldWord} 모듈`;
</script>
</body>
</html>
```

**실행결과**
![Webpack](/assets/images/posts/22/08/22.08.29/6-1모듈화에%20대한%20network.png)

> 응답 받은 2개의 js 파일을 전부 출력할 수 있게 되었습니다.

