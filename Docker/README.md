###### Top

- [도커file](https://github.com/BuMinKyoo/DockerRepository)
- [리눅스에 도커설치](#리눅스에-도커설치)
- [명령어](#명령어)

<br/>
<br/>

***

# 리눅스에 도커설치
  - 1.기존 Docker 제거
    - sudo apt-get remove docker docker-engine docker.io containerd runc
  - 2.패키지 업데이트
    - sudo apt-get update
  - 3.필수 패키지 설치
    - sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
  - 4.Docker 공식 GPG 키 추가
    - curl -fsSL [https://download.docker.com/linux/ubuntu/gpg](https://download.docker.com/linux/ubuntu/gpg) | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
  - 5.Docker 저장소 추가
    - echo "deb \[arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg\] [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) $(lsb\_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  - 6.패키지 업데이트
    - sudo apt-get update
  - 7.Docker 및 관련 패키지 설치
    - sudo apt-get install docker-ce docker-ce-cli containerd.io
  - 8.Docker 설치 확인
    - sudo docker --version
  - 9.Docker 서비스 상태 확인
    - sudo systemctl start docker
  - 10.Docker 서비스 실행
    - sudo systemctl status docker


###### [리눅스에 도커설치](#리눅스에-도커설치)
###### [Top](#top)

<br/>
<br/>

***

# 명령어
  - docker images : 도커에 있는 이미지 뭐뭐 있나 확인
  - docker run --rm [이미지이름] : 도커에 있는 이미지를 실행하되, exit해서 빠져 나오면 기본값을 제외하고 다 지움
  - docker run [이미지이름] : 도커에 있는 이미지를 실행하되, exit해서 빠져 나와도 설치했던 것을 지우지 않음
  - docker build -t [이미지이름] . : 이미지 굽기
  - docker build -f Dockerfile2 -t [이미지이름] . : Dockerfile 이라는 이름이 아닌 다른 파일을 이용해서 굽는 방법
  - docker run -it [이미지이름] : -it옵션을 넣으면 도커 안에서 리눅스 터미널을 사용할 수 있음
  - docker rmi [이미지_이름 또는 이미지_ID] : 이미지 삭제하기
  - docker ps -a : 흔적이 남은 컨테이너까지 포함해서 모두 출력
    - docker rm [컨테이너_ID] : docker ps -a 명령어를 통해서 나온 컨테이너 삭제하기
  - docker commit [컨테이너_ID] [새_이미지_이름] : 흔적이 남은 컨테이너를 그대로 다시 굽기

<br/>

  - docker-compose.yml파일 사용시
    - docker compose up -d : docker-compose.yml파일로 도커 실행할때사용, 자동으로 이미지가 구워지고 컨테이너가 실행, 최초실행시 사용
      - docker compose -f [compose.yml파일명] up : 기본 설정 이름인 docker-compose.yml이 아닌 다른 이름의 yml파일을 사용할때
    - docker exec -it [컨테이너 이름] /bin/bash : 컨테이너 안으로 들어가서 코딩
    - docker compose up -d --build : 다시 굽고 다시 실행
    - docker ps : 현재 실행중인 컨테이너들 목록


###### [명령어](#명령어)
###### [Top](#top)
