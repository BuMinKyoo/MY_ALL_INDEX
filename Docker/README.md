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
  - docker ps -a : 흔적이 남은 컨테이너까지 포함해서 모두 출력
  - docker commit [컨테이너_ID] [새_이미지_이름] : 흔적이 남은 컨테이너를 그대로 다시 굽기


###### [명령어](#명령어)
###### [Top](#top)
