###### Top

- [SveltKit시작](#sveltkit시작)
- [라우트하기](#라우트하기)
- [모듈 불러오기](#모듈-불러오기)
- [다이나믹 라우트(Dynamic Routes)](#다이나믹-라우트dynamic-routes)
- [중첩 다이나믹 라우트(Nested Dynamic Routes)](#중첩-다이나믹-라우트nested-dynamic-routes)
- [Catch All Routes](#catch-all-routes)
- [옵션 파라미터(Optional Parameters)](#옵션-파라미터optional-parameters)
- [라우트 레이아웃](#라우트-레이아웃)
- [API서버 만들기와 GET통신](#api서버-만들기와-get통신)
- [POST요청 핸들러(쓰기작업)](#post요청-핸들러쓰기작업)
- [API 다이나믹 라우트 GET통신](#api-다이나믹-라우트-get통신)
- [API Patch핸들러](#api-patch핸들러)
- [API Delete 요청 핸들러](#api-delete-요청-핸들러)
- [Loading Data을 위한 fake rest server설치하기](#loading-data을-위한-fake-rest-server설치하기)
- [Page에 “+page.js”파일 데이터 불러오기](#page에-pagejs파일-데이터-불러오기)
- [fetch로 api호출하고 데이터 뿌려주기](#fetch로-api호출하고-데이터-뿌려주기)
- [Universal VS Server(Data Load Function)](#universal-vs-serverdata-load-function)
- [fetch로 api호출하고 데이터 뿌려주기(Params)](#fetch로-api호출하고-데이터-뿌려주기params)
- [error&redirect](#errorredirect)
- [TailWind사용하기](#tailwind사용하기)
- [export와 export default의 차이](#export와-export-default의-차이)
- [oracledb연결하기](#oracledb연결하기)
- [Query 바인딩](#query-바인딩)

<br/>
<br/>

sveltKit에서 사용하는 front문법은 대부분 svelte를 따르고 있으며, svelte의 tutorial을 하면서 기억할 부분을 남긴다

indroduction
- [Style속성은 현재 svelte파일에만 적용](#style속성은-현재-svelte파일에만-적용)
- [string안에 태그 데이터 넣기](#string안에-태그-데이터-넣기)

Reactivity
- [$문법](#$문법)

Logic
- [if문 사용하기](#if문-사용하기)
- [each문 사용하기](#each문-사용하기)
- [await, then문](#await-then문)

Events
- [on click](#on-click)
- [Mousemove](#mousemove)

Bindings
- [text input](#text-input)
- [svelte간 데이터 전달](#svelte간-데이터-전달)

LifeCyle
- [onMount](#onmount)
- [tick](#tick)

Stores
- [Writable stores](#writable-stores)
- [Derived stores](#derived-stores)

Component composition
- [Slots](#slots)

<br/>
<br/>

- <details markdown="1">
  <summary>실예시 코드</summary>
  <div markdown="1">
  
  - [실예시 코드](#실예시-코드)
    - [서버 load함수](#서버-load함수)
    - [서버 통신함수](#서버-통신함수)
    - [서버 load함수에 의해 받은 데이터 +page.svelte로 넘기기](#서버-load함수에-의해-받은-데이터-pagesvelte로-넘기기)
    - [서버 load함수가 아닌 js](#서버-load함수가-아닌-js)
    - [Svelte파일에서 js파일 함수 사용하기](#svelte파일에서-js파일-함수-사용하기)

  </div>
  </details>

<br/>
<br/>

***

# SveltKit시작
  - 1. node설치하기
  - 2. npm create svelte@latest 만들고자하는 어플리케이션 이름
    - EX) npm create svelte@latest hello-world
  - 3. 템플릿 고르기
    - a. SvelteKit demo app : 미리 데모 앱이 작성 되어 있음
    - b. Skeleton project : 비어 있는 프로젝트
    - c. Library project
  - 4. Add type checking with TypeScript?
  - 5. Select additional options (use arrow keys/space bar)
  - 6. 만들어진 프로젝트로 cd명령어로 이동하기
  - 7. npm install
    - a. 이것에 의해 node_modules라는 폴더가 만들어지고 그 안에 수많은 의존성 파일들이 있다
  - 8. npm run dev -- --open
    - a. 어플리케이션을 서버에서 실행
    - b. 로컬서버, 어떤 포트에서 돌아가고 있는지 확인 할 수 있다
    - c. 비주얼스튜디오코드에 “Live Server”깔면 더 편할듯..!

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/31b5886c-da1c-4575-96b0-548c3ba5fa60)

  - 9. 폴더 및 파일 설명
    - a. package.json파일
      - 스크립트 명령어
      - 애플리케이션 설치시 까는 의존성 버전 확인
    - b. package-lock.json파일
      - 버전을 명시해 주는 파일
      - 손댈 필요 없음!
    - c. 손댈 필요 없는 파일 3가지
      - .gitignore :  깃에 올릴때 어떤 것을 버전관리 하지 않을것인지 명시
      - .npmrc : 
      - README.md
    - d. svelte.config.js
      - SvelteKit 어플리케이션 설정파일
    - e. vite.config.js
      - 비트에 대한 설정파일
      - 본래는, 비트라는 프로그램의 관련 패키지들을 이용해서 SvelteKit 어플리케이션을 설정한것
    - f. 코드를 예쁘게 작성하기 위해서 설치한 도구
      - .eslintrc.cjs
        - 코드를 깨끗하게 작성할 수 있도록 에러와 워닝을 해주는 도구를 설정하는곳
      - .prettierrc
        - 코드를 어떻게 포맷팅 할것인지를 해주는 도구를 설정하는곳
    - g. .svelte-kit폴더
      - SvelteKit자체에 내장되어 있는 관련 코드들
    - h. node_modules폴더
      - package.json파일안에 있는 의존성 패키지들이 들어가 있는곳
    - i. static
      - 어플리케이션이 포함할 모든 정적 자원들을 관리하는곳(이미지, 동영상 등)
    - j. src
      - 여기 안에서 모든 코드들을 작성할 예정!!
      - routes폴더
      - app.html
        - 페이지 탬플릿
        - routes폴더 안에 있는 svelte내용들이 html안에 들어간다
          - “%sveltekit.head%”
          - “%sveltekit.body%”
  - 10. Routing
    - a. SvelteKit는 file_system based routing mechanism
      - 폴더와 파일 구조에 따라 Routing이 결정 된다는것
    - b. 스벨트 킷이 정한 Routing구조를 지켜야함
      - Routing은 src폴더 안에 routes폴더 안에 작성한다
      - 라우트 파일은 +page.svelte라는 이름으로 작성한다
      - routes폴더안의 폴더는 URL 주소에서 경로 segment를 결정한다
  - 11. 루트URL
    - a. routes폴더 바로 아래 있는 svelte파일이 루트URL이 된다
    - b. routes폴더 아래 about폴더 안에 있는 svelte파일을 불러오려면, “/about”만 붙이면 된다

###### [SveltKit시작](#sveltkit시작)
###### [Top](#top)

<br/>
<br/>

***

# 라우트하기

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1f449ab1-b41d-424d-93c4-e95dfc6286c8)

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/807c92df-81a9-488e-a597-7fbd7cd833b0)

###### [라우트하기](#라우트하기)
###### [Top](#top)

<br/>
<br/>

***

# 모듈 불러오기
  - app/stores안에 있는 page라는 정보를 불러온것

~~~
<script>
    import { page } from '$app/stores';
</script>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/3d4b6a33-2f6a-4548-8c3d-ea8b0cf3bd81)

###### [모듈 불러오기](#모듈-불러오기)
###### [Top](#top)

<br/>
<br/>

***

# 다이나믹 라우트(Dynamic Routes)
  - 폴더 이름을 “[폴더 이름]” 으로 정한다
  - page 스토어를 활용해서 현재 페이지에 대한 정보를 가져온다

Dir : routes/products/[productId] / +page.svelte
~~~
<script>
    import { page } from '$app/stores';
    const productId = $page.params.productId
</script>

<h1>제품{productId} 상세 페이지</h1>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/6b2fce7f-c1cb-4dff-ad9a-1e60dd133dd1)

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/2d92e10e-7a7e-4c52-b746-12f02792aeee)

###### [다이나믹 라우트(Dynamic Routes)](#다이나믹-라우트dynamic-routes)
###### [Top](#top)

<br/>
<br/>

***

# 중첩 다이나믹 라우트(Nested Dynamic Routes)

Dir : routes/products/[productId]/reviews/[reviewId] / +page.svelte
~~~
script>
    import { page } from '$app/stores';
    const {productId, reviewId} = $page.params;
</script>

<h1>제품{productId}의 리뷰 {reviewId}번</h1>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/272419a6-0a59-4b65-a726-cf0f3a2dbfb4)

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/2365030b-865c-41b5-b90a-8769014448ae)

###### [중첩 다이나믹 라우트(Nested Dynamic Routes)](#중첩-다이나믹-라우트nested-dynamic-routes)
###### [Top](#top)

<br/>
<br/>

***

# Catch All Routes
  - “...” 폴더 문법을 이용해서 라우팅 하기

Dir : routes/docs/[...slug] / +page.svelte
~~~
<script>
    import {page} from '$app/stores';
    console.log($page.params.slug);

    const slugArr = $page.params.slug.split('/');
    console.log(slugArr);

</script>

<h1>Docs 페이지</h1>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/43c57759-56e9-488f-b72f-2d8ef0f4a0a0)

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/b57ef722-b298-43b3-b170-3c58250d4657)

  - if문까지 활용 하기
Dir : routes/docs/[...slug] / +page.svelte
~~~
<script>
    import {page} from '$app/stores';
    console.log($page.params.slug);

    const slugArr = $page.params.slug.split('/');
    console.log(slugArr);

</script>

<h1>Docs 페이지</h1>

{#if slugArr.length === 1}
<h1>Docs 페이지 ; 주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
<h1>Docs 페이지 ; 주제 {slugArr[0]} ; 소주제 {slugArr[1]}</h1>
{/if}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/11a3eb7f-2992-4da0-b9ca-f6c3373186ec)

###### [Catch All Routes](#catch-all-routes)
###### [Top](#top)

<br/>
<br/>

***

# 옵션 파라미터(Optional Parameters)
  - “[[]]” 폴더 문법을 이용해서 라우팅 하기
  - 이것은 url에서 있을 수도 있고, 없을 수도 있다
  - 중간인 [[]] 여기로 들어오는 파라미터를 받아서 따로 사용 할 수 있다

Dir : routes/[[lang]]/docs/[...slug] / +page.svelte
~~~
<script>
    import {page} from '$app/stores';
    const slugArr = $page.params.slug.split('/');
    console.log($page.params);

</script>

<h1>Docs 페이지</h1>

{#if slugArr.length === 1}
<h1>Docs 페이지 ; 주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
<h1>Docs 페이지 ; 주제 {slugArr[0]} ; 소주제 {slugArr[1]}</h1>
{/if}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/2507c22e-5221-49e7-a264-bef60dbac15a)

  - 사용 예시
Dir : routes/[[lang]]/docs/[...slug] / +page.svelte
~~~
<script>
    import {page} from '$app/stores';
    const slugArr = $page.params.slug.split('/');
    console.log($page.params);

    const lang = $page.params.lang
    //const {lang = 'ko'} = $page.params; 이렇게 하면 디폴트 설정이 가능하다

</script>

{#if lang === 'ko'}
    <h1>안녕</h1>
{:else if lang === 'en'}
    <h1>Hellow</h1>
{/if}


<h1>Docs 페이지</h1>

{#if slugArr.length === 1}
<h1>Docs 페이지 ; 주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
<h1>Docs 페이지 ; 주제 {slugArr[0]} ; 소주제 {slugArr[1]}</h1>
{/if}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/4d1ba21e-6bae-4938-9a89-3f75c79b3d5b)

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/e8cb797b-ebd2-4c3d-9bec-eaa4f96ccb04)

###### [옵션 파라미터(Optional Parameters)](#옵션-파라미터optional-parameters)
###### [Top](#top)

<br/>
<br/>

***

# 라우트 레이아웃
  - 페이지의 header영역과, footer영역 생성
    - 만약 routes폴더 영역에 “+layout.svelte”파일을 만들면, 그 하위에 있는 것들은 모두 적용이 된다
  - slot 닫힘 태그를 작성한다
    - 컨텐츠가 이곳으로 들어간다는 약속이다

Dir : routes / +layout.svelte
~~~
<header class="layout-header">헤더 영역</header>

<slot />

<footer class="layout-footer">푸터 영역</footer>

<style>
    .layout-header {
        background-color: blue;
        color: white;
        font-size: 30px;
        text-align: center;
        padding: 10px;
    }

    .layout-footer {
        background-color: blue;
        color: white;
        font-size: 30px;
        text-align: center;
        padding: 10px;
    }
</style>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/a3477ac2-5956-40d1-9f88-a9e256c4b4e3)

  - 하위에 추가적으로 layout적용시키기
Dir : routes/products/[productId] / +layout.svelte
~~~
<slot />

<hr>
<h3>제품 배송 관련</h3>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit, nulla quibusdam officiis pariatur temporibus tenetur ipsa magni saepe provident odit, soluta quia possimus atque eum, corrupti debitis. Consectetur, expedita.
</p>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/cc5726d2-2250-4715-8873-568ee3e0c466)

  - layout 계층 구조 분류하기
    - “()”폴더 문법을 사용하면, url에 영향을 미치지 않은채 분리 할 수 있다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/562c2f57-e99e-420b-a840-ab5b50564eb0)

Dir : routes/(auth)/login/ +page.svelte
~~~
<h1>로그인 페이지</h1>
<label for="">아이디</label>
<input type="text">
<label for="">비밀번호</label>
<input type="text">
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/9fc9b055-3e8d-4317-b7ee-7b6a261002fe)

###### [라우트 레이아웃](#라우트-레이아웃)
###### [Top](#top)

<br/>
<br/>

***

# API서버 만들기와 GET통신
  - 파일이름을 “+server.js”로 꼭 만들어 줘야 한다. 약속!
  - GET통신을 하는 함수를 작성 할때는 반드시 “export function GET()” 이 이름으로 함수를 만들어야 한다

Dir : routes/api/ +server.js
~~~
export function GET() {
    return new Response('Hello from API 서버 ');
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8ef9b105-ec61-42a5-a59f-0c7d049577fd)

  - 비주얼 스튜디오 코드에서, Thunder Client를 설치하여 api테스트를 할 수 있다(postman을 사용해도 됨!)
  - Thunder Clien 사용시 localhost설정에 따라 api작동이 안될수도 있는데 그때는 “[::1]”로 바꿔주면 된다
    - http://localhost:5173/api/comments
    - http://[::1]:5173/api/comments

  - get요청 핸들러
    - 외부에서 데이터 베이스로 사용할 comments.js 파일 생성
    - JSON.stringify
      - 자바스크립트 객체를 json으로 만들어줌

Dir : src/lib/ comments.js
~~~
export const comments = [
    {
        id : 1,
        text : '첫번째 댓글임'
    },
    {
        id : 2,
        text : '두번째 댓글임'
    },
    {
        id : 3,
        text : '세번째 댓글임'
    }
];
~~~

Dir : routes/api/comments/ +server.js
~~~
import { comments } from "../../../lib/comments";
// import { comments } from "$lib/comments.js"; 스벨트 에서는 이렇게 사용 할 수 있다

export function GET(){
    return new Response(JSON.stringify(comments), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// 스벨트 에서는 import { json } from '@sveltejs/kit'을 사용해 더 편하게 위의 것을 작성 할 수 있다
//import { json } from '@sveltejs/kit'
// export function GET(){
//     return json(comments);
// }
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f0a77d97-4b85-4897-a40e-cab3d3ddc32c)

###### [API서버 만들기와 GET통신](#api서버-만들기와-get통신)
###### [Top](#top)

<br/>
<br/>

***

# POST요청 핸들러(쓰기작업)

Dir : routes/api/comments/ +server.js
~~~
import { json } from '@sveltejs/kit';
import { comments } from "$lib/comments.js";

// 스벨트에서 post를 보낼때 내용이 requestEvent라는 객체에 들어가게 약속 되어 있다
// async, await를 활용한 자바스크립트 비동기약속
// requestEvent대신에 바로 { request } 을 작성 할 수도 있음 ex) export async function POST({ request })
export async function POST(requestEvent) {
    const { request } = requestEvent; // requestEvent안에 있는 request라는 데이터를 빼온다
    const { text1 } = await request.json(); // 그 안에 있는 text라는 데이터를 빼온다
    const newComment = {
        id: comments.length + 1,
        text1
    }
    comments.push(newComment);

    //return new Response(JSON.stringify(newComment), {status : 201}) // POST는 201번이 디폴트 이다
    return json(newComment, {status: 201});
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/b84e91d6-93f6-47a3-9653-8b2895c03cde)

###### [POST요청 핸들러(쓰기작업)](#post요청-핸들러쓰기작업)
###### [Top](#top)

<br/>
<br/>

***

# API 다이나믹 라우트 GET통신
  - 일반 GET통신을 하면 그 IP에 해당하는 데이터전체를 가져 왔지만, 다이나믹으로 IP를 바꾸어서 필요한 데이터만을 가져온다
  - 다이나믹은 “[]” 폴더 문법을 사용한다

Dir : lib/ comments.js
~~~
export const comments = [
    {
        id : 1,
        text : '첫번째 댓글임'
    },
    {
        id : 2,
        text : '두번째 댓글임'
    },
    {
        id : 3,
        text : '세번째 댓글임'
    }
];
~~~

Dir : routes/api/comments/[commentId]/ +server.js
~~~
import {json} from '@sveltejs/kit';
import {comments} from '$lib/comments.js';

export function GET(requestEvent) {
    const { params } = requestEvent; //requestEvent 객체 안에 있는 params를 가져온다
    const {commentId} = params; // params 안에 있는 commentId를 가져온다


    const findedComment = comments.find(
        (comments) => comments.id === parseInt(commentId)
    );


    return json(findedComment);
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/12d28fdc-a5a7-45a3-b8d5-415b9dac62c2)

###### [API 다이나믹 라우트 GET통신](#api-다이나믹-라우트-get통신)
###### [Top](#top)

<br/>
<br/>

***

# API Patch핸들러
  - 데이터를 update하는것

Dir : routes/api/comments/[commentId]/ +server.js
~~~
import {json} from '@sveltejs/kit';
import {comments} from '$lib/comments.js';

export async function PATCH(requestEvent) {
    const { params } = requestEvent; //requestEvent 객체 안에 있는 params를 가져온다
    const {commentId} = params; // params 안에 있는 commentId를 가져온다

    const { request } = requestEvent; // requestEvent안에 있는 request라는 데이터를 빼온다
    const { text } = await request.json(); // 그 안에 있는 text라는 데이터를 빼온다

    const findedComment = comments.find(
        (comments) => comments.id === parseInt(commentId)
    );

    findedComment.text = text;

    //comments[parseInt(commentId)-1].text = text; 이렇게 한줄로도 처리 가능

    return json(findedComment);
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/42c31111-4bcd-43a3-96ff-de3f6828f8a4)

###### [API Patch핸들러](#api-patch핸들러)
###### [Top](#top)

<br/>
<br/>

***

# API Delete 요청 핸들러
  - Dir : routes/api/comments/[commentId]/ +server.js

~~~
import {json} from '@sveltejs/kit';
import {comments} from '$lib/comments.js';

export async function DELETE(requestEvent) {
    const { params } = requestEvent; //requestEvent 객체 안에 있는 params를 가져온다
    const {commentId} = params; // params 안에 있는 commentId를 가져온다

    const deletedComment = comments.find(
        (comments) => comments.id === parseInt(commentId)
    );

    const index = comments.findIndex(
        (comments) => comments.id === parseInt(commentId)
    )
    comments.splice(index, 1);
    //comments.splice(parseInt(commentId)-1, 1); //이렇게 한줄로 가능

    return json(deletedComment);
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/963070c4-de01-40d8-ab98-c0fdda265973)

###### [API Delete 요청 핸들러](#api-delete-요청-핸들러)
###### [Top](#top)

<br/>
<br/>

***

# Loading Data을 위한 fake rest server설치하기
  - 터미널에서 “npm i json-server” : 페이크 rest api를 만들 수 있음
  - “package.json”파일에서 scripts부분에 서버 실행 추가하기
    - "serve-json": "json-server --watch db.json --port 4000"
    - 터미널에서 “npm run serve-json” 로 서버실행하기
  - 최상위 폴더에서, “db.json”파일 만들기

Dir : db.json
~~~
{
    "products": [
        {
            "id": 1,
            "title": "나이키 양말",
            "price": 8000,
            "description": "이 양말은 어쩌고 저쩌고~"
        },
        {
            "id": 2,
            "title": "뉴발란스 신발",
            "price": 80000,
            "description": "이 신발은 어쩌고 저쩌고~"
        },
        {
            "id": 3,
            "title": "개발자 키보드",
            "price": 50000,
            "description": "이 키보드는 어쩌고 저쩌고~"
        }
    ]
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ff3bda8f-fe91-475f-852f-60dafab8dee4)

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/50b659cd-7935-45c3-bd2a-aaef8033e2a7)

###### [Loading Data을 위한 fake rest server설치하기](#loading-data을-위한-fake-rest-server설치하기)
###### [Top](#top)

<br/>
<br/>

***

# Page에 “+page.js”파일 데이터 불러오기
  - “+page.svelte”와 짝꿍 격인 “+page.js”파일을 만들어서 불러온다

Dir : routes/products/ +page,svelte
~~~
<script>
    export let data; // page.js파일의 async 리턴을 받아 온다
</script>

<h1>제품 리스트</h1>

<p>{data.title}</p>
~~~

<br/>

Dir : routes/products/ +page.js
~~~
export const load = async () => {

    const title = '갤럭시 S53';

    return {
        title
    };
}
~~~

###### [Page에 “+page.js”파일 데이터 불러오기](#page에-pagejs파일-데이터-불러오기)
###### [Top](#top)

<br/>
<br/>

***

# fetch로 api호출하고 데이터 뿌려주기
  - “+page.js”에서 fetch함수를 이용해서,  api를 호출해 데이터를 불러온후, 그것을 “+page.svelte”파일에서 불러오기
  - 아래의 fetch함수는 web에서 제공해주는 native함수이다
  - SvelteKit가 제공하는 fetch함수를 사용하라고 경고를 띄워줌

Dir : routes/products/ +page.svelte
~~~
<script>
    export let data; // page.js파일의 async 리턴을 받아 온다
    const products = data.products // page.js파일에서 return해준 products를 꺼내 온다
</script>

<h1>제품 리스트</h1>

{#each products as product}
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
    <hr/>
{/each}
~~~

Dir : routes/products/ +page.js
~~~
export const load = async () => {
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();

    return {
        products
    };
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/49e47ee8-3f10-4334-a4d0-08a643b45799)

  - SvelteKit가 제공하는 fetch함수 사용하기
Dir : routes/products/ +page.js
~~~
// export const load = async () => {
//     const response = await fetch("http://localhost:4000/products");
//     const products = await response.json();

//     return {
//         products
//     };
// }

export const load = async (loadEvent) => {

    const {fetch} = loadEvent;
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();

    return {
        products
    };
}
~~~

  - 위의 load 함수는 Universal Load Function이며, 브라우저(클라이언트)와 서버 모두에게서 실행된다
    - 페이지를 불러올때 console.log하여 찍어보면 알 수 있음
    - 하지만, 링크를 타고 들어갈때는 브라우저(클라이언트) 에서만 함수가 실행된다..!

###### [fetch로 api호출하고 데이터 뿌려주기](#fetch로-api호출하고-데이터-뿌려주기)
###### [Top](#top)

<br/>
<br/>

***

# Universal VS Server(Data Load Function)
  - Universal load function
    - Client, Server 양쪽에서 모두 실행됨
    - 서버 사이드 렌더링(SSR)을 위해 사용될 수 있으며, 페이지가 로드되기 전에 데이터를 가져와서 초기 상태를 설정하는 데 유용합니다. 또한, 클라이언트 측에서 페이지 이동 시에도 데이터를 미리 가져와서 부드러운 전환을 제공할 수 있습니다.
  - Server load function
    - Server 에서만 실행됨
    - 클라이언트 측에서는 호출되지 않고, 서버에서만 호출됩니다. 이는 서버 사이드 렌더링 시에만 필요한 데이터를 미리 가져와서 초기 상태를 설정하고, 클라이언트에 전달하여 렌더링 성능을 향상시키는 데 사용됩니다.
    - 외부에 데이터를 유출하지 않을때(클라이언트에 가면 안되!)

  - Server load function실행하기
    - “+page.server.js”파일을 만들어서 실행한다
    - serverLoadEvent객체를 받기 때문에 이것만 바꿔주면 된다

Dir : routes/products/ +page.server.js
~~~
export const load = async (serverLoadEvent) => {

    const {fetch} = serverLoadEvent;
    const response = await fetch("http://localhost:4000/products"); // +page.server.js파일은 http://localhost:4000이라고 하는 상세 url까지 써주어야 한다
    const products = await response.json();

    return {
        products
    };
}
~~~

###### [Universal VS Server(Data Load Function)](#universal-vs-serverdata-load-function)
###### [Top](#top)

<br/>
<br/>

***

# fetch로 api호출하고 데이터 뿌려주기(Params)

Dir : routes/products/[productId]/ +page.svelte
~~~
<script>
    export let data;
    const products = data.product;
</script>

<h1>제품 상세페이지</h1>
<div>
    <h2>{products.title}</h2>
    <h3>가격: {products.price}원</h3>
    <p>설명 : {products.description}</p>
</div>
~~~

Dir : routes/products/[productId]/ +page.server.js
~~~
export const load = async (serverLoadEvent) => {

    const {fetch, params} = serverLoadEvent;
    const {productId} = params;
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();

    return {
        product
    };
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/19fa842c-abd6-4378-b9c7-5ddde964f291)

  - serverLoadEvent에서 제공해주는 데이터 확인해보기
    - fetch, params, url, route
~~~
export const load = async (serverLoadEvent) => {
    const {fetch, params, url, route} = serverLoadEvent;
    console.log({fetch, params, url, route});
   
    const {productId} = params;
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();

    return {
        product
    };
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/3695f5d3-ed27-48b6-a356-c448a5084775)

###### [fetch로 api호출하고 데이터 뿌려주기(Params)](#fetch로-api호출하고-데이터-뿌려주기params)
###### [Top](#top)

<br/>
<br/>

***

# error&redirect
  - “+error.svelte”라는 파일 문법을 사용한다

Dir : routes/products/[productId]/ +page.server.js
~~~
import {error} from '@sveltejs/kit'; // sveltekit이 제공

export const load = async (serverLoadEvent) => {
    const {fetch, params} = serverLoadEvent;
    const {productId} = params;

    if(productId > 3){
        throw error(404,'Product not found');
    }

    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();

    return {
        product
    };
}
~~~

Dir : routes/products/[productId]/ +error.svelte
~~~
<h1>상품이 존재하지 않습니다.</h1>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/907ae92b-b999-46fc-87a8-9b2249f077a1)

  - redirect

Dir : routes/products/[productId]/ +page.server.js
~~~
import {redirect} from '@sveltejs/kit'; // sveltekit이 제공

export const load = async (serverLoadEvent) => {
    const {fetch, params} = serverLoadEvent;
    const {productId} = params;

    if(productId > 3){
        throw redirect(307,'/products');
    }

    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();

    return {
        product
    };
}
~~~

###### [error&redirect](#errorredirect)
###### [Top](#top)

<br/>
<br/>

***

# TailWind사용하기
  - 1. npm install -D tailwindcss postcss autoprefixer
  - 2. npx tailwindcss init -p
    - tailwind.config.js, postcss.config.js이 생성됨
  - 3. svelte.config.js파일 수정
    - import { vitePreprocess } from '@sveltejs/kit/vite';
    - preprocess: vitePreprocess()

Dir : svelte.config.js
~~~
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter()
    },
    preprocess: vitePreprocess()
};

export default config;
~~~

  - 4. tailwind.config.js 파일 수정
    - content: ['./src/**/*.{html,js,svelte,ts}']

Dir : tailwind.config.js
~~~
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
~~~

  - 5. css파일 생성
    - 아래는 app.css란 파일로 생성 하였음(이름은 달라져도 됨)
    - src바로 하위에 생성하여야함

Dir : src/ app.css
~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~

  - 6. layout.svelte파일 생성

Dir : src/routes/ +layout.svelte
~~~
<script>
    import "../app.css";
  </script>
 
  <slot />
~~~

  - 7. 완료!
  - 8. 추가 확장 설치

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/9c72182a-3dfa-4ae3-aa22-93408cbbbadc)

###### [TailWind사용하기](#tailwind사용하기)
###### [Top](#top)

<br/>
<br/>

***

# export와 export default의 차이

  - 변수 가져오기
    - export default를 썼기 때문에 아래와 같이 num이라는 변수에 맞춰서 가지고 오지 않아도 된다

Dir : input.js
~~~JavaScript
let num  = 10;
export default num;
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import num from './input'
    //import * as num from "./input";
    //import {default as num} from "./input"

    console.log(num)
</script>

<h1>{num}</h1>
~~~

<br/>

  - 함수 가져오기
    - export default를 썼기 때문에 아래와 같이 num이라는 함수명에 맞춰서 가지고 오지 않아도 된다

Dir : input.js
~~~JavaScript
function num(){
    console.log(">>>>");
}

export default num;
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import num from './input'
    //import * as num from "./input";
    //import {default as num} from "./input"

    num();
    //console.log(num)
</script>

<h1>{num}</h1>
~~~

###### [export와 export default의 차이](#export와-export-default의-차이)
###### [Top](#top)

<br/>
<br/>

***

# oracledb연결하기
  - nodejs에서 오라클 db를 사용하기 위해서는 oracle client를 설치하고, 위치를 설정해 줘야 한다
  - npm i oracledb 명령어로 설치
  - 커넥션 풀
    - 데이터베이스와 연결된 커넥션을 미리 만들어서 풀(pool) 속에 저장해 두고 있다가 필요할 때 커넥션을 풀에서 쓰고 다시 풀에 반환하는 기법
    - 커넥션 풀을 사용하면 커넥션을 생성하고 닫는 시간이 소모되지 않기 때문에 애플리케이션의 실행 속도가 빨라지며, 또한 한 번에 생성될 수 있는 커넥션 수를 제어하기 때문에 동시 접속자 수가 몰려도 웹 애플리케이션이 쉽게 다운되지 않는다
    - 생성(초기화)하는 과정이 오래 걸리고 부하가 심한 것들을 미리 만들어두고 바구니에 담아두고 계속 재활용하는것이 목적이다
  - db객체 정의하기

~~~
const dbConfig = {
    user:  1111,
    password:  2222,
    connectString: 143.243.535”80,
    externalAuth: false,
    poolMin: 1,
    poolMax: 20,
    poolTimeout: 300,
}
~~~

  - “externalAuth”
    - externalAuth는 외부 인증(External Authentication)을 사용할지 여부를 나타내는 옵션입니다.
    - 외부 인증은 Oracle 데이터베이스의 사용자 인증을 외부에서 처리하는 방식을 말합니다.
    - 이 옵션을 true로 설정하면, user 및 password 옵션을 제공하지 않아도 됩니다. 대신 운영 체제나 다른 인증 서비스에서 인증 정보를 제공합니다.
    - 외부 인증을 사용하는 경우, user 및 password를 설정하지 않아도 데이터베이스에 연결할 수 있습니다.
  - “poolTimeout”
    - poolTimeout을 설정하면 커넥션 풀에 대기 중인 커넥션의 최대 대기 시간을 지정할 수 있습니다. 대기 시간이 지정된 시간을 초과하는 경우, 커넥션은 풀에서 제거됩니다. 이렇게 함으로써 오랫동안 유휴 상태로 남아있는 커넥션들을 제거하여 풀의 리소스를 절약하고 성능을 향상시킬 수 있습니다.
    - 밀리초 단위로 지정된다

<br/>

  - 오라클db연결
~~~JavaScript
import oracledb from 'oracledb';
//import * as OracleDB from "oracledb";
//import {default as OracleDB} from "oracledb";

/** @type {import('@sveltejs/kit').Config} */
const dbConfig = {
    user:  ,
    password:  ,
    connectString: ,
    externalAuth: false,
    poolMin: 1,
    poolMax: 20,
    poolTimeout: 300,
}

let pool;
export const createPool = async () => {
    pool = await oracledb.createPool(dbConfig) // 초기비용을 아끼기 위한 방법(new 할당)
}

/* 오라클 클라이언트를 환경변수에 적용했다면 필요 없음 */
let init;
const initOracleClient = async () => {
    try {
        await oracledb.initOracleClient({ libDir: './src/lib/oracle/instantclient_21_7' })
        init = true
    } catch (error) {
       //logger.error('%o', error)
    }
}

// 데이터베이스 연결 가져오기
export const getConnection = async () => {
    if (!init) await initOracleClient()
    if (!pool) await createPool()


    return await pool.getConnection()
}
~~~

  - db옵션값
    - autoCommit: false
      - 자동으로 데이터 베이스의 커밋을 완료해줌
      - 기본값은 false임
      - 오라클 db의 트렌젠셕을 완료해 준다는 의미임
    - oracledb.OUT_FORMAT_OBJECT
      - 결과를 JavaScript 객체 형식으로 반환합니다
    - batchErrors: true
      - sql문을 실행하고 나서 발생하는 오류를 보여줌

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d10a56fb-3a12-45e1-8689-8c8973824da0)

~~~JavaScript
const connection = await getConnection()
const result = await connection.execute(nativeQuery.query, nativeQuery.binds, options)
//const result = await connection.execute(nativeQuery.query)
const returnData = result.rows // 분류
connection.release()

console.log(result.batchErrors) //오류 보여줌
~~~

###### [oracledb연결하기](#oracledb연결하기)
###### [Top](#top)

<br/>
<br/>

***

# Query 바인딩

Dir : src/routes/api/daily_report/index/indexM/ +server.js

~~~JavaScript
    // 분류 쿼리
    const nativeQuery = {
        query:`
        select HPL_CD, HPM_CD, HPM_NM from PROMMSTB where HPL_CD = :HPL_CD              
        `,
       
        binds:{
             HPL_CD:{ val: req.hpl_cd  } // HPL_CD가 0001일 경우 개발 업무
        }
    }
~~~

  - val을 다른것으로 바꾸면 에러가남
Error: NJS-044: bind object must contain one of the following attributes: "dir", "type", "maxSize", or "val"  

<br/>

  - 바인드 속성들
    - dir: 바인드 변수의 방향을 지정. 'IN'은 입력 값을 나타내고, 'OUT'은 출력 값을 나타낸다
    - type: 바인드 변수의 데이터 유형을 지정. 예를 들어 'STRING', 'NUMBER', 'DATE' 등을 지정할 수 있다
    - maxSize: 바인드 변수의 최대 크기를 지정. 일반적으로 문자열이나 버퍼와 같은 유형에 사용된다

~~~JavaScript
    // 분류 쿼리
    const nativeQuery = {
        query:`
        select HPL_CD, HPM_CD, HPM_NM from PROMMSTB where HPL_CD = :HPL_CD              
        `,
       
        binds:{
             HPL_CD:{ dir: oracledb.BIND_IN, type: oracledb.STRING, maxSize:100, val: req.hpl_cd  } // HPL_CD가 0001일 경우 개발 업무
        }
    }
~~~

<br/>

  - 바인딩 속성들을 정의 하지 않고 그냥 보내도 된다
~~~JavaScript
    // 분류 쿼리
    const nativeQuery = {
        query:`
        select HPL_CD, HPM_CD, HPM_NM from PROMMSTB where HPL_CD = :HPL_CD              
        `,
       
        binds:{
             HPL_CD:req.hpl_cd // HPL_CD가 0001일 경우 개발 업무
        }
    }
~~~

###### [바인딩](#바인딩)
###### [Top](#top)







<br/>
<br/>
<br/>
<br/>
<br/>

***

# Style속성은 현재 svelte파일에만 적용

Dir : +page.svelte

~~~JavaScript
<script>
    import Nested from "./Nested.svelte";
</script>

<p>This is a paragraph.</p>

<div>
    <Nested/>
</div>

<style>
    p {
        color: purple;
        font-family: 'Comic Sans MS', cursive;
        font-size: 2em;
    }
</style>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f325c391-c705-408a-8e91-afb6ee9db04b)

###### [Style속성은 현재 svelte파일에만 적용](#style속성은-현재-svelte파일에만-적용)
###### [Top](#top)

<br/>
<br/>

***

# string안에 태그 데이터 넣기
  - @html 을사용함으로써 태그를 집어 넣을 수 있다

Dir : +page.svelte

~~~JavaScript
<script>
    let string = '<strong>this is string</strong>'
</script>

<div>{@html string}</div>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f33411bb-1102-4d19-9e2c-434c1780aac0)

###### [string안에 태그 데이터 넣기](#string안에-태그-데이터-넣기)
###### [Top](#top)

<br/>
<br/>

***

# $문법
  - 아래는 count가 바뀌었을때 자동으로 doubled도 최신화 된다

Dir : +page.svelte

~~~JavaScript
<script>
    let count = 0;
    $: doubled = count * 2;
   
    function handleClick() {
        count += 1;
    }
</script>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/beed8886-1eb0-4021-9a10-510d44067fd9)

<br/>

  - 아래와 같이 console.log를 찍을 수도 있다

~~~JavaScript
<script>
    let count = 0;
    let count1 = 0;
    $: console.log(`${count}${count1}`)
   
    function handleClick1() {
        count += 1;
    }

    function handleClick2() {
        count1 += 1;
    }
</script>

<button on:click={handleClick1}>
    버튼1
</button>

<button on:click={handleClick2}>
    버튼2
</button>
~~~

<br/>

  - 다른 예시

~~~JavaScript
$: {
    console.log('the count is ' + count);
    alert('I SAID THE COUNT IS ' + count);
}
~~~

<br/>

~~~JavaScript
$: if (count >= 10) {
    alert('count is dangerously high!');
    count = 9;
}
~~~

###### [$문법](#$문법)
###### [Top](#top)

<br/>
<br/>

***


# if문 사용하기

Dir : +page.svelte

~~~JavaScript
{#if x > 10}
    <p>{x} is greater than 10</p>
{:else if 5 > x}
    <p>{x} is less than 5</p>
{:else}
    <p>{x} is between 5 and 10</p>
{/if}
~~~

###### [if문 사용하기](#if문-사용하기)
###### [Top](#top)

<br/>
<br/>

***


# each문 사용하기
  - array를 돌릴 수 있다

Dir : +page.svelte

~~~JavaScript
<script>
    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
    {#each cats as cat}
        <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
            {cat.name}
        </a></li>
    {/each}
</ul>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/fe55da1e-6bb8-45e2-bc69-3ac27d2e6226)

<br/>

  - 두번째 인자로 인덱스를 0부터 줄 수 있다

~~~JavaScript
<script>
    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
    {#each cats as cat, i}
        <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
            {i} : {cat.name}
        </a></li>
    {/each}
</ul>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/29e2adbd-0e5d-4ae4-a078-8c448e833d73)

<br/>

  - as받는 부분을 처음부터 인자로 받을 수도 있음

~~~JavaScript
<script>
    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
    {#each cats as {id, name}, i}
        <li><a target="_blank" href="https://www.youtube.com/watch?v={id}" rel="noreferrer">
            {i} : {name}
        </a></li>
    {/each}
</ul>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/9a1b7363-f3a8-4c98-a5f1-b8004b40bcbb)

###### [each문 사용하기](#each문-사용하기)
###### [Top](#top)

<br/>
<br/>

***


# await, then문

Dir : +page.svelte

~~~JavaScript
<script>


// 어떤 함수 클릭에 의한 실행
//{
    indexMdata = indexM(HPL_CD)
//}

</script>

<!-- 아래와 같이 하면 indexMdata 데이터가 출력된 후에 그 다음문을 실행하게 된다-->
{#await indexMdata}
{:then number}
{#if number == undefined}
{:else}
    {number}
{/if}
{/await}
~~~

<br/>

  - 아래와 같이 awite와 then을 한줄로 사용할 수 있다

~~~JavaScript
{#await indexMdata then number}
{#if number == undefined}
{:else}
{number}
{/if}
{/await}
~~~

###### [await, then문](#await-then문)
###### [Top](#top)

<br/>
<br/>

***

# on click

Dir : +page.svelte

~~~JavaScript
<script>
    let count = 0;

    function incrementCount() {
        count += 1;
    }
</script>

<button on:click={incrementCount}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/79207a50-21e0-4f21-a839-5e8ac35d7b11)

<br/>

~~~JavaScript
<script>

    function handleClick() {
            alert('clicked')
        }
</script>

<button on:click|once={handleClick}>
    Click me
</button>
~~~

  - once : 핸들러가 한번 실행된 후 제거된다
  - stopPropagation : 이벤트가 상위 엘리먼트에 전달되지 않게 막아 준다
  - 그 외에도 여러가지 속성이 있음
  - https://svelte.dev/tutorial/event-modifiers
  - 참고

###### [on click](#on-click)
###### [Top](#top)

<br/>
<br/>

***

# Mousemove

Dir : +page.svelte

~~~JavaScript
<script>
    let m = { x: 0, y: 0 };


    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
</div>

<style>
    div { width: 100%; height: 100%; }
</style>
~~~

###### [Mousemove](#mousemove)
###### [Top](#top)

<br/>
<br/>

***

# text input

Dir : +page.svelte

~~~JavaScript
<script>
    let name = 'world';
</script>

<input value={name}>

<h1>Hello {name}!</h1>
~~~

<br/>

  - input박스에 있는 데이터를 바꿨을때 바로 html에 데이터가 바껴지지 않는다 이럴때는 bind를 통해서 실시간으로 바꿀 수 있게 해야 한다

~~~JavaScript
<script>
    let name = 'world';
</script>

<input bind:value={name}>

<h1>Hello {name}!</h1>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/5a33a464-63e4-4138-aa31-bbd8fe6687ea)

<br/>

  - 타입 number로 지정할 수도 있음

~~~JavaScript
<script>
    let a = 1;
    let b = 2;
</script>

<label>
    <input type=number bind:value={a} min=0 max=10>
    <input type=range bind:value={a} min=0 max=10>
</label>

<label>
    <input type=number bind:value={b} min=0 max=10>
    <input type=range bind:value={b} min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>

<style>
    label { display: flex }
    input, p { margin: 6px }
</style>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0b43f4cf-b15f-41c1-b7ce-1c2a0c6d815c)

<br/>

  - div의 innerHTML속성 값 바인딩 할 수도 있음

~~~JavaScript
<script>
    let html = '<p>Write some text!</p>';
</script>

<div contenteditable="true" bind:innerHTML={html}></div>

<pre>{html}</pre>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/575839b3-9656-4c6f-b857-639b5e012964)

<br/>

  - 글자 사이즈 실시간 변경하기

~~~JavaScript
<script>
    let w;
    let h;
    let size = 42;
    let text = 'edit me';
</script>

<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px">{text}</span>
</div>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/9c5956c6-6504-46f2-9ad8-e83c296ddba7)

###### [text input](#text-input)
###### [Top](#top)

<br/>
<br/>

***

# svelte간 데이터 전달
  - 데이터 전달하는 과정을, 양방향 bind와, 단방향 전달로 잘 보여주고 있다.
  - 여기서 input.svelte의 버튼을 클릭해 데이터를 20으로 전부 바꾸고, inputChild.svelte의 버튼을 클릭해 본인만 데이터가 30이 되었을 때, 다시 inputChild.svelte의 버튼을 클릭하면 inputChild.svelte의 값이 20으로 돌아가지 않게 되는데, 이는 이미 input.svelte 자신의 데이터가 20임으로 값이 그대로인 20으로 바꾸려는 것 때문에 html의 최신화가 이루어지지 않기 때문이다

Dir : +page.svelte
~~~JavaScript
<script>
    import Input from "./input.svelte";
    let num;

    function ChangeDataPage(){
        num = 10;

        console.log(num);
    }

</script>

<button on:click={ChangeDataPage}>
    +page의 버튼
</button>

<Input
    bind:num1={num}/>

    <h1>나는 +page의 값 : {num}</h1>
~~~

<br/>

Dir : input.svelte

~~~JavaScript
<script>
    import InputChild from "./inputChild.svelte";

    export let num1 = 10;

    function ChangeData(){
        num1 = 20;
        console.log(num1);
    }
</script>

<button on:click={ChangeData}>
    input의 버튼
</button>

<InputChild
    num2={num1}/>

    <h1>나는 input의 값 : {num1}</h1>
~~~

<br/>

Dir : inputChild.svelte

~~~JavaScript
<script>
    export let num2;

    function ChangeDataChild(){
        num2 = 30;
        console.log(num2);
    }
</script>

<button on:click={ChangeDataChild}>
    inputChild의 버튼
</button>

    <h1>나는 inputChild의 값 : {num2}</h1>
~~~

<br/>

  - 함수 전달

Dir : +page.svelte
~~~JavaScript
<script>
    import Input from "./input.svelte";

    function deiley(){
        console.log("나는 함수");
    }
</script>

<div>
    <div>
        <Input f2={deiley}/>
    </div>
</div>
~~~

Dir : input.svelte
~~~JavaScript
<script>
    export let f2

    f2() // 나는 함수라는 스트링이 터미널에 출력된다
</script>
~~~

  - 함수도 bind로 가져올 수 있음

Dir : +page.svelte
~~~JavaScript
<script>
    import Input from "./input.svelte";

    let deiley;

</script>

<div>
    <div>
        <Input bind:f2={deiley}/>
    </div>
</div>

<button on:click={() => deiley()}>deiley 함수 실행</button>
~~~

<br/>

Dir : input.svelte
~~~JavaScript
<script>
    export function f2(){
        console.log("나는 함수")
    }
</script>
~~~

###### [svelte간 데이터 전달](#svelte간-데이터-전달)
###### [Top](#top)

<br/>
<br/>

***

# onMount
  - 컴퍼넌트가 처음 만들어지고 실행되는 함수
  - onMount() 함수의 return문은 컴포넌트 또는 DOM 요소가 DOM에서 제거될 때, 실행되어야 하는 함수를 작성한다. 즉, onMount() 함수의 return문과
  - onDestroy() 함수는 동일한 역할을 수행한다

Dir : +page.svelte

~~~JavaScript
<script>
    import { onMount } from 'svelte';

    let photos = [];

    onMount(async () => {
        const res = await fetch(`/tutorial/api/album`);
        photos = await res.json();
    });
</script>
~~~

###### [onMount](#onmount)
###### [Top](#top)

<br/>
<br/>

***

# tick
  - 아래와 같이 tick을 사용하지 않으면 console.log에 찍히는 것은 물음표가 나오지 않는다.

Dir : +page.svelte

~~~JavaScript
<script>
    import { tick } from 'svelte';

    let name = 'man';

    async function handler(){
        name = 'man ?';

        await tick();

        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
    }
</script>

<h1 on:click={handler}>Are You {name}</h1>
~~~

###### [tick](#tick)
###### [Top](#top)

<br/>
<br/>

***

# Writable stores
  - js파일에서 export해온 변수는 상수 취급이 되기 때문에  svelte에서 값을 바꿀 수가 없다
  - 버튼을 누르면 타입 에러가 발생한다

Dir : aaa.js

~~~JavaScript
export let count = 5;
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import { count } from './aaa'

    function add(){
        count = count + 1;
        console.log(count);
    }
</script>

<div >{count}</div>
<button on:click={add}>
    더하기
</button>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/b0000a98-6a07-4163-9ac9-3c2bf9901b94)

<br/>

  - 방법1 : 다른변수에 담는다

Dir : aaa.js
~~~JavaScript
export let count = 5;
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import { count } from './aaa'

    let count1 = count

    function add(){
        count1 = count1 + 1;
        console.log(count1);
    }
</script>

<div>{count1}</div>
<button on:click={add}>
    더하기
</button>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8b49a42e-dd5e-40bc-9eeb-689df846acab)

<br/>

  - 밥법2 : Writable을 사용해야 한다
    - update : 데이터 바꾸기
    - set : 데이터 초기화 하기
    - 클라이언트 부분에 렌더링 할때는 $을 앞에 붙여 준다

Dir : aaa.js
~~~JavaScript
import { writable } from 'svelte/store'
export const count = writable(5);
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import { count } from './aaa'

    function add(){
        count.update(n => n + 1)
    }
</script>

<div >{$count}</div>
<button on:click={add}>
    더하기
</button>
~~~

<br/>

 - set
   - 데이터 초기화

~~~JavaScript
count.set(0);
~~~

###### [Writable stores](#writable-stores)
###### [Top](#top)

<br/>
<br/>

***

# Derived stores
  - 파생 store변수 만들기
  - writable했던, name이란 변수를 통해서 파생 값을 만든다

Dir : aaa.js
~~~JavaScript
import { writable, derived } from 'svelte/store';

export const name = writable('kkkk')

export const greeting = derived(
    name,
    $name => `qqqq ${$name}`
)
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import { name, greeting } from './aaa.js';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name}>
~~~

###### [Derived stores](#derived-stores)
###### [Top](#top)

<br/>
<br/>

***

# Slots
  - 자식 svelte파일에 <slot></slot>을 넣게 되면, 부모가 자식 class안쪽에 넣은 데이터가 들어가게 된다

Dir : Input.svelte
~~~JavaScript
<div class="box">
    <slot></slot>
</div>

<div>
    aaaaaaaa
</div>

<style>
    .box {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import Box from './input.svelte';
</script>

<Box>
    <h2>Hello!</h2>
    <p>This is a box. It can contain anything.</p>
</Box>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/607cda57-7c1f-4f5a-90be-ed38f3ad8c4f)

<br/>

  - 아무것도 적지 않았을때 기본 값을 설정 할 수 있다

Dir : Input.svelte
~~~JavaScript
<div class="box">
    <slot>
        dsfsdsdsdfsdf
    </slot>
</div>

<style>
    .box {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import Box from './input.svelte';
</script>

<Box>
    <h2>Hello!</h2>
    <p>This is a box. It can contain anything.</p>
</Box>

<Box/>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/9d8a6a92-a535-4602-9d1c-10f0130b54ef)

<br/>

  - Slots여러군데 사용시에 사용법
    - name을 달아서 사용할 수 있다

Dir : input.svelte
~~~JavaScript
<article class="contact-card">
    <h2>
        <slot name="name">
            <span class="missing">Unknown name</span>
        </slot>
    </h2>

    <div class="address">
        <slot name="address">
            <span class="missing">Unknown address</span>
        </slot>
    </div>

    <div class="email">
        <slot name="email">
            <span class="missing">Unknown email</span>
        </slot>
    </div>
</article>

<style>
    .contact-card {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
    }

    h2 {
        padding: 0 0 0.2em 0;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #ff3e00
    }

    .address, .email {
        padding: 0 0 0 1.5em;
        background:  0 0 no-repeat;
        background-size: 20px 20px;
        margin: 0 0 0.5em 0;
        line-height: 1.2;
    }

    .address {
        background-image: url(/tutorial/icons/map-marker.svg);
    }
    .email {
        background-image: url(/tutorial/icons/email.svg);
    }
    .missing {
        color: #999;
    }
</style>
~~~

<br/>

Dir : +page.svelte
~~~JavaScript
<script>
    import Box from './input.svelte';
</script>

<Box>
    <span slot="name">
        P. Sherman
    </span>

    <span slot="address">
        42 Wallaby Way<br>
        Sydney
    </span>
</Box>
~~~

<br/>

  - Slots가 사용되었는지 확인 가능

Dir : +page.svelte
~~~JavaScript
<script>
    import Box from './input.svelte';
</script>

<Box>
    <span slot="name">
        P. Sherman
    </span>

    <span slot="address">
        42 Wallaby Way<br>
        Sydney
    </span>
</Box>
~~~

<br/>

  - Dir : input.svelte

~~~JavaScript
<article class="contact-card">
    <h2>
        <slot name="name">
            <span class="missing">Unknown name</span>
        </slot>
    </h2>

    <div class="address">
        <slot name="address">
            <span class="missing">Unknown address</span>
        </slot>
    </div>

    <div class="email">
        <slot name="email">
            <span class="missing">Unknown email</span>
        </slot>
    </div>
</article>

<dir>{$$slots.name}</dir>
<dir>{$$slots.address}</dir>
<dir>{$$slots.email}</dir>

<style>
    .contact-card {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
    }

    h2 {
        padding: 0 0 0.2em 0;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #ff3e00
    }

    .address, .email {
        padding: 0 0 0 1.5em;
        background:  0 0 no-repeat;
        background-size: 20px 20px;
        margin: 0 0 0.5em 0;
        line-height: 1.2;
    }

    .address {
        background-image: url(/tutorial/icons/map-marker.svg);
    }
    .email {
        background-image: url(/tutorial/icons/email.svg);
    }
    .missing {
        color: #999;
    }
</style>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/aaac9bb6-ac56-4f93-b59a-0c4d0c9f0e4c)

###### slots
###### [Top](#top)

<br/>
<br/>

***

# 실예시 코드
  - [서버 load함수](#서버-load함수)
  - [서버 통신함수](#서버-통신함수)
  - [서버 load함수에 의해 받은 데이터 +page.svelte로 넘기기](#서버-load함수에-의해-받은-데이터-pagesvelte로-넘기기)
  - [서버 load함수가 아닌 js](#서버-load함수가-아닌-js)
  - [Svelte파일에서 js파일 함수 사용하기](#svelte파일에서-js파일-함수-사용하기)

###### [실예시 코드](#실예시-코드)
###### [Top](#top)

<br/>
<br/>

# 서버 load함수
  - 페이지가 로드 되면서 바로 데이터 불러오기(+page.server.js)
    - +page.server.js에 라우팅된 사이트를 들어가면 +page.server.js를 바로 실행 시킴
    - 통신은 +server.js파일 안에 있는 POST 및 GET과 같은 함수로 들어가게 되고, 데이터를 받게됨
    - console.log로 서버에 데이터 찍힘

Dir : +page.server.js
~~~JavaScript
import axios from "axios";

export async function load(){
    const response = await axios.post('http://localhost:5173/api/daily_report/index/indexL',{})  
    const data = response.data

    const client_res = await axios.get('http://localhost:5173/api/daily_report/index',{})  
    const client_res_data = client_res.data
   
    const mapData1 = data.map(e=>e[0])
    const mapData2 = data.map(e=>e[1])
    const setData1 = new Set(mapData1)

    const setData2 = new Set(mapData2)
    const object1 = Object.fromEntries(setData1.entries())  
    const object2 = Object.fromEntries(setData2.entries())  

    const obj = {
        data1 :  object1,
        data2 :  object2,
        clients : client_res_data
    }

    return obj    
}
~~~

###### [서버 load함수](#서버-load함수)
###### [Top](#top)

<br/>
<br/>

# 서버 통신함수
  - +server.js함수이고 이 파일에서 모든 DB와의 통신이 이어 진다
  - console.log로 서버에 데이터 찍힘

Dir : routes/api/daily_report/index/indexL/ +server.js
~~~JavaScript
import { json } from '@sveltejs/kit';
import oracledb from 'oracledb';
import {getConnection} from "../../../../../libraries/oracle/oracleConfig"

const options = { outFormat: oracledb.OUT_FORMAT_OBJECT, autoCommit: false, batchErrors: true }  

// 기본 데이터 가져오는 함수
/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
    //const req = await request.clone().json();

    // 분류 쿼리
    const nativeQuery = {
        query:`
        select HPL_CD, HPL_NM from PROLMSTB              
        `,
       
        binds:{
        //     HPL_CD:{ val: req.hpl_cd  } // HPL_CD가 0001일 경우 개발 업무
        }
    }

    const connection = await getConnection()
    //const result = await connection.execute(nativeQuery.query, nativeQuery.binds, options)
    const result = await connection.execute(nativeQuery.query, {}, options)
    const returnData = result.rows // 분류
    connection.release()

    //console.log(returnData)
    return json(returnData)
}
~~~

<br/>

Dir : routes/api/daily_report/index/ +server.js
~~~JavaScript
import { json } from '@sveltejs/kit';
import oracledb from 'oracledb';
import {getConnection} from "../../../../libraries/oracle/oracleConfig"

const options = { outFormat: oracledb.OUT_FORMAT_OBJECT, autoCommit: false, batchErrors: true }  

// 고객사 데이터 가져오는 함수
/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {    

    //고객사 쿼리
    const customerQuery = {
        query:`
            SELECT AS_GROP_CD, AS_GROP_NM FROM GWGROPTB
            WHERE MA_FG IN ('0001','0002','0003')
            ORDER BY AS_GROP_NM
        `,
        binds:{
            //MS_NO:{ val: req.msNo  }
        }
    }

    const connection = await getConnection()
    const customer_result = await connection.execute(customerQuery.query,{}, options)
    const returnData = customer_result.rows // 고객사
    connection.release()

    //console.log("aaaaaaaaaaaaa")
    //console.log(returnData)

    return json(returnData)
}
~~~

###### [서버 통신함수](#서버-통신함수)
###### [Top](#top)

<br/>
<br/>

# 서버 load함수에 의해 받은 데이터 +page.svelte로 넘기기
  - export let data에 데이터가 들어가게 된다
  - svelte에서 다른 svelte파일을 불러와서 그곳에 데이터, 인수를 넘기는 법
    - 스벨트 파일위치를 불러와서, 그것에 대한 이름을 지정하고(이름은 마음대로 지정할 수 있음), 아래 부분에 넣어서 사용한다

Dir : routes/daily_report/ +page.svelte
~~~JavaScript
<script>  
    import Write from "./Write.svelte";
    import Read from "./Read.svelte";

    export let data    
    let REQ_CONTENT
    let WORK_CONTENT
    let PLAN_CONTENT
    let MAN_DAY
    let CTRT_MD

</script>
<div class="flex flex-nowrap w-full mx-5 justify-center">
    <!-- svelte-ignore missing-declaration -->
    <Write
        {data}
        {REQ_CONTENT}
        {WORK_CONTENT}
        {PLAN_CONTENT}
        {MAN_DAY}
        {CTRT_MD}
    />
    <Read  
        bind:REQ_CONTENT
        bind:WORK_CONTENT
        bind:PLAN_CONTENT
        bind:MAN_DAY
        bind:CTRT_MD
    />
</div>
~~~

<br/>

  - 다른 svelte파일에서 보낸 데이터를 같은 변수로 설정해서 받을 수 있다

Dir : routes/daily_report/ Write.svelte
~~~JavaScript
<script>
    export let data;
   
    export let REQ_CONTENT
    export let WORK_CONTENT
    export let PLAN_CONTENT
    export let MAN_DAY
    export let CTRT_MD

</script>
~~~

###### [서버 load함수에 의해 받은 데이터 +page.svelte로 넘기기](#서버-load함수에-의해-받은-데이터-pagesvelte로-넘기기)
###### [Top](#top)

<br/>
<br/>

# 서버 load함수가 아닌 js
  - 서버 load함수가 아닌 js파일 안에서 api를 호출하기 위한 것을 만들 수 있음
  - 함수를 실행 시킴으로 써 리턴 값을 받게 됨
  - 이것또한 결국 +server.js파일로 가서 데이터를 가져오게 됨

Dir : routes/daily_report/store.js
~~~JavaScript
import axios from "axios";

export const indexM = async(chplCd) =>{

    const postData = {
        hpl_cd:chplCd
    }
    const response = await axios.post('/api/daily_report/index/indexM',postData)
    const serverData = response.data

    let serverDataarray = []

    for(let i = 0; i < serverData.length; i++)
    {
        serverDataarray.push(Object.values(serverData[i]));  // indexL 데이터
    }

    return serverDataarray;
}
~~~

###### [서버 load함수가 아닌 js](#서버-load함수가-아닌-js)
###### [Top](#top)

<br/>
<br/>

# Svelte파일에서 js파일 함수 사용하기
  - js파일에서 사용할 함수 import(일반 변수도 export 키워드를 사용하였다면 import해올 수 있음)
  - 함수 사용하고 return받을 때 비동기로 받기
  - 전역 변수에 저장 하기 위해 변수를 밖으로 빼놓기

Dir : 익명.svelte
~~~JavaScript
import { indexM } from 'routes/daily_report/store.js'

let indexMdata;

async function dropClickL(item, i) {
dropclickL = item;
dropdownOpenL = false;
indexMdata = await indexM(array1[i]);
indexMdata_hpL_cd = array1[i];

console.log(indexMdata)
}
~~~

###### [Svelte파일에서 js파일 함수 사용하기](#svelte파일에서-js파일-함수-사용하기)
###### [Top](#top)

<br/>
<br/>

