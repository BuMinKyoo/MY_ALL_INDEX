###### Top

- [리눅스에 도커설치](#리눅스에-도커설치)

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
