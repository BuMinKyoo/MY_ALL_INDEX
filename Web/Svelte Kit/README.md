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
    const response = await fetch("http://localhost:4000/products");
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
  - 

###### [fetch로 api호출하고 데이터 뿌려주기(Params)](#fetch로-api호출하고-데이터-뿌려주기params)
###### [Top](#top)

<br/>
<br/>

***

# error&redirect
  - 

###### [error&redirect](#errorredirect)
###### [Top](#top)

<br/>
<br/>

***

