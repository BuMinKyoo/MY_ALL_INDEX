<br/>  

###### Top
  
  - [내 프로젝트 버전 확인](#내-프로젝트-버전-확인)
  - [Nuget사용법](#nuget사용법)
  - [Nuget패키지 버전 확인법](#nuget패키지-버전-확인법)
  - [Nuget종속성 버전 확인하기](#nuget종속성-버전-확인하기)
  - [단축키](#단축키)
  - [Nuget 패키지 검색 안될시](#nuget-패키지-검색-안될시)
  - [원격디버깅](#원격디버깅)

<br/>

***
***

<br/>

## 내 프로젝트 버전 확인

<br/>

  - 1.솔루션 탐색기에서 내 프로젝트 위에 마우스 우클릭
<img src="https://user-images.githubusercontent.com/39178978/153402632-5d1b9334-7281-4864-8f18-e74ce328c4ac.png" width="500" height="400">
<br/>

  - 2.속성 클릭  
<img src="https://user-images.githubusercontent.com/39178978/153402709-8b17bfe1-d62b-4547-a85e-9f8f21cd293c.png" width="500" height="600">
<br/>

  - 3.내 버전 확인가능  
<img src="https://user-images.githubusercontent.com/39178978/153402781-8b7c32c7-7e49-4bbe-a380-ce16c6b462d2.png" width="600" height="400">


###### [내 프로젝트 버전 확인](#내-프로젝트-버전-확인)
###### [Top](#top)

***

<br/>
<br/>

## Nuget사용법
  - 비주얼 스튜디오에서 개발 확장으로 공개한 무료 오픈 소스 패키지 관리자 프로그램

<br/>

  - Nuget이용하여 오픈소스 패키지 설치하기
    - 1.콘솔을 이용하여 설치
    - 2.Nuget검색으로 설치

<br/><br/>

먼저는 콘솔을 이용하여 설치하기

  - 1.도구 -> NuGet패키지 관리자 -> 패키지 관리자 콘솔
<img src="https://user-images.githubusercontent.com/39178978/153404410-3c3816ec-070c-4aa3-976c-1b4167a83826.png">
<br/>

  - 2.패키지 관리자 콘솔에서, 다운로드할 패기지를 바로 설치하기  
<img src="https://user-images.githubusercontent.com/39178978/153404566-662f1d53-c61b-4721-8ef7-ee89b61255f1.png">
<br/>
<br/>


Nuget검색으로 설치 하기

  - 1.프로젝트위에서 마우스 우클릭 -> NuGet패키지 관리
<img src="https://user-images.githubusercontent.com/39178978/153405294-e509ce38-bd38-4dae-9757-d8dfa76b65f6.png">
<br/>

  - 2.찾아보기 -> 검색
<img src="https://user-images.githubusercontent.com/39178978/153404566-662f1d53-c61b-4721-8ef7-ee89b61255f1.png">
<br/>

  - 3.버전 선택후 설치
<img src="https://user-images.githubusercontent.com/39178978/153405665-52f4bf1c-e5c3-40f3-a5ef-ebee742b168c.png">
<br/>
<br/>

같은 방법으로

  - 1.도구 -> NuGet패키지 관리자 -> 솔루션용 NuGet패키지 관리
<img src="https://user-images.githubusercontent.com/39178978/153405938-9239c16d-f885-4c88-804b-e6fb506c19d6.png">

###### [Nuget사용법](#nuget사용법)
###### [Top](#top)

***

<br/>
<br/>

## Nuget패키지 버전 확인법

<br/>

위에서 보았던 'NuGet패키지 관리' 및 '솔루션용 NuGet패키지 관리'창에서 확인 가능 하며 버전을 바꿀 수 있다.
<img src="https://user-images.githubusercontent.com/39178978/153406430-90fd7cbe-5766-42d5-97d3-5dd5081e1210.png" width="800" height="600">

###### [Nuget패키지 버전 확인법](#nuget패키지-버전-확인법)
###### [Top](#top)

***

<br/>
<br/>

## Nuget종속성 버전 확인하기
  - 프로젝트의 모든 버전에 모든 패키지를 적용 시킬 수 있는것은 아니기 때문에 종속성 버전을 확인해야함
  - Nuget패키지 버전을 확인할 수 있는 창에서 또한 확인이 가능하다

<br/><br/>

  - 현재 사진을 해석하면, .NETFramework 에서는 4.5.2버전 이상일때 사용 가능하고, .NETCore에서는 3.1버전 이상일때 사용 가능하다는것
<img src="https://user-images.githubusercontent.com/39178978/153407073-c2c341c3-015a-43b0-b955-848dc656e86c.png">


###### [Nuget종속성 버전 확인하기](#nuget종속성-버전-확인하기)
###### [Top](#top)

***

<br/>
<br/>

## 단축키
  - 비주얼 스튜디오 2022단축키
    - cpp 및 h이동 : Ctrl + K + O
    - 뷰 디자이너  보기 : Shift + F7 // VScode : 없음
    - 소스 보기 : F7 // VScode : 없음
    - 커서 앞으로 이동 : Ctrl + Shift + - // VScode : Alt + 오른쪽 화살표
    - 커서 뒤로 이동 : Ctrl + -   // VScode : Alt + 왼쪽 화살표
    - 현재 파일 단어 검색 : Ctrl + F // VScode : 동일함
    - 전체 파일 단어 검색 : Ctrl + Shift + F // VScode : 동일함 
    - 주석 펴기/닫기 : Ctrl + m + m  // VScode : Ctrl + Shift + [ , Ctrl + Shift + \]
    - 정의로 이동 : Ctrl + 마우스 좌클릭 // VScode : 동일
    - 여러줄 주석 처리 : Ctrl + K + C // VScode : 동일
    - 여러줄 주석 풀기 : Ctrl + K + U // VScode : 동일
    - 중단점 : F9 // VScode : 동일
    - 중단점끼리 건너뛰기 / 디버그실행 : F5 // VScode : 동일
    - 한줄디버그 : F10 // VScode : 동일
    - 한줄디버그(안쪽으로 들어가기) : F11 // VScode : 동일
    - CodeRush설치 후, Code Places열기 단축기 Alt + m 으로 변경

<img width="803" height="598" alt="image" src="https://github.com/user-attachments/assets/712b75c4-1447-4d0d-aad6-39f33b92596e" />

###### [단축키](#단축키)
###### [Top](#top)

***

<br/>
<br/>

## Nuget 패키지 검색 안될시
  - 1. NuGet 패키지 관리자에서 톱니바퀴 클릭

![20231018_233221](https://github.com/BuMinKyoo/MFCMultiThread/assets/39178978/1d762d97-179a-4fc7-a5e3-99facd651330)

  - 2. 패키지 소스에서 nuget.org소스 등록

![20231018_233304](https://github.com/BuMinKyoo/MFCMultiThread/assets/39178978/24130ca7-71e9-4949-be7b-5f20f4a33386)

###### [Nuget 패키지 검색 안될시](#nuget-패키지-검색-안될시)
###### [Top](#top)

***

<br/>
<br/>

## 원격디버깅
  - 1. 버전에 맞는 원격 디버거 다운로드
    - RTM버전에 아닌 업데이트가 가장 높은 버전으로 다운로드 하기
    - https://learn.microsoft.com/ko-kr/visualstudio/debugger/remote-debugging?view=vs-2022 
  - 2. 다운로드한 원격 디버거를 테스트할 PC에 다운로드 하여 설치후, Remote Debugger실행
    - 원격 디버거가 처음 실행될때는, 원격 디버깅 구성이 나오는데, 원격 디버깅 구성을 클릭
    - 도구에서 암호 없이 디버깅을 원격으로 접근할 수 있게 설정 가능함
  - 3. 비주얼 스튜디오 디버그 설정을 원격 window 디버거로 설정

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/b0c73aad-f89e-4790-9943-4b32c1867c65)

  - 4. 프로젝트 속성으로 가서, 구성속성 - 디버깅 - 시작할 디버거 : 원격 window 디버거로 세팅하고, 세부 세팅을 시작함

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/6042368c-8150-4da1-917a-0e87d712a8e8)

  - 5. 세부세팅
    - 원격 명령 : 테스트 PC에서 실행할 실행파일의 위치, 자신의 프로젝트가 c:\test\Stone 에 있고 디버그시에 실행파일이 c:\test\Stone\ Stone.exe 가 생성된다면 c\test\Stone\Stone.exe 라고 적는다
    - 작업 디렉터리 : 프로그램의 작업 경로를 적어주면 됩니다. 일반적으로 실행파일이 존재하는 경로를 명시합니다. c:\test\Stone
    - 원격 서버 이름 : 테스트pc의 ip:포트 를 적어주면 된다
    - 디버거 형식 : C/C++ 에서는 "네이티브 전용"
    - 배포 디렉터리 : 테스트 PC에 디버깅에 필요한 파일들을 복사할 경로,. c:\test\Stone
    - 배포할 추가 파일 : 추가로 배포할 파일
  - 6. 프로젝트 구성 관리자에서, 배포에 체크 한다

<br/>

  - 디버깅 방법 참고 : http://www.tipssoft.com/bulletin/board.php?bo_table=FAQ&wr_id=1959

###### [원격디버깅](#원격디버깅)
###### [Top](#top)

