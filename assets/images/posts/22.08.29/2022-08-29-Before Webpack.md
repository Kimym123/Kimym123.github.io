---
title: "웹팩이 등장하기 전"
excerpt: "아비규환"
layout: single


toc: true
toc_sticky: true

categories:
  - 개발
tags:
  - 개발
  - 웹팩
last_modified_at: 2022-08-29
---
![Webpack](/assets/images/posts/22.08.29/웹팩.png)

# 웹팩이 없던 시절

- 변수가 겹친다면?

1. HTML 파일을 만들어주자.

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
실행결과  
![Webpack](/assets/images/posts/22.08.29/index실행결과.png)

<br/>

2. 변수가 겹쳐지도록 JS 파일을 2개 만들고 세팅하자.

```javascript
// hello.js
let word = 'Hello'

// world.js
let word = 'world'
```

![Webpack](/assets/images/posts/22.08.29/5-2js만든%20후%20폴더구조.png)

<br/>

3. HTML 파일에 JS 파일을 장착하자.

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

실행결과  
![Webpack](/assets/images/posts/22.08.29/js를%20장착한%20index실행결과.png)
