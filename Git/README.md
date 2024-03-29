<br/>

###### Top

  - [Git설치](#git시작)
  - [Git명령어](#git명령어)

<br/>
<br/>

***

# Git시작
  - 1. git-scm.com에 가서 git을 다운받는다.(모두 기본 값으로 다운)
  - 2. git bash응용프로그램을 실행 시킨다
  - 3. 원하는 폴더에 가서 "git init" 명령어를 실행한다
    - .git파일이 만들어진다(버전관리에 관한 정보들 담김)

###### [Git설치](#git시작)
###### [Top](#top)

<br/>
<br/>

***

# Git명령어
  - git config --global user.name 이름
    - git에서 커밋 할 때 사용할 이름(최조 1번)
  - git config --global user.email 이메일
    - git에서 커밋 할 때 사용할 이메일(최조 1번)
  - git init
    - 버전관리할 폴더를 만듬, .git파일이 생성됨(버전관리에 관한 정보들 담김)
  - git add 파일명
    - commit할 파일들을 결정(git add . : 전체 파일 add하기)
  - git commit -m '남길메시지'
  - git status
    - 현재 git상태 확인
  - git log
    - commit한 log보기

<br/>

  - git branch
    - 현재 branch보기
  - git branch 브랜치명
    - branch 만들기
  - git checkout 변경할브랜치
    - 브랜치 이동하기
  - git checkout -r
    - 원격 브랜치 목록 조회
  - git branch -d 삭제할브랜치
    - branch삭제
  - git pull origin 브랜치
    - git에서 다른 브랜치에서 pull하는 방법
  - git merge 병합할브랜치
    - branch병합하기
    - branch를 merge하는 일은 '현재 branch에서 다른 branch를 가져와서 병합하는 것'만 가능하다
  - git push origin master:minkyoo --force
    - master에 있는 것을 minkyoo 브랜치에 강제 푸쉬 하겠다는 말
  - git remote update
    - 로컬 저장소에 있는 모든 branch의 원격저장소 정보를 업데이트 한다

<br/>

  - git reset --hard ORIG_HEAD
    - 방금 pull해온것 취소하기
  - git reset --merge ORIG_HEAD
    - merge되돌리기
  - git reset --hard 커밋로그
    - HEAD로 가리키고 있는것이 아닌 commit을 제거할때(작업했던것 없어짐!!)
  - git reset --hard HEAD~1
    - commit을 제거할때(작업했던것 없어짐!!)
  - git reset --soft 커밋로그
    - HEAD로 가리키고 있는것이 아닌 commit을 제거할때(작업했던것 없어지지 않음!!)
  - git reset --soft HEAD~1
    - commit을 제거할때(작업했던것 없어지지 않음!!)
  - git status
    - git add 했던것 전체 취소하기

<br/>

  - 다른 브랜치에 작업한 것을, 옮겨서 push하는법
    - 1. git remote update
    - 2. git add .
    - 3. git stash -> add했던 파일들만 임시로 다른곳에 저장한다
    - 4. git checkout -t origin/브랜치 -> 브랜치 이동하기
    - 5. git stash pop

###### [Git명령어](#git명령어)
###### [Top](#top)

<br/>
<br/>

