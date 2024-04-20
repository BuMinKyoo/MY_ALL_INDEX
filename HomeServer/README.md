  - 홈서버를 구축해 보았습니다..
  - 많은 부분들을 링크로 대체 하여 퍼온 정보들을 어디에서 얻었는지 명시해 놓겠습니다
  - 설명은 사실 대충대충 저만 알아볼 수 있게 되어 있긴해서, 단지 제가 보기 위한 용도로 쓸거 같습니다(정돈 하지 않았음..)
  - 마지막으로 홈서버의 구조를 전체다 구현하지 않았으며, 어느정도 사용을 위한 정도까지만 구축 하였습니다
  - 보안에 대해 아직 공부가 많이 부족해 공격받을 수 있으므로, 개인 ip는 밝히지 않겠습니다

<br/>

###### Top

- [홈서버 구축](#홈서버-구축)
  - [1.홈서버 구조](#1홈서버-구조)
  - [2.홈서버 하드웨어 준비](#2홈서버-드웨어-준비)
  - [3.가상화 전용 OS Proxmox 설치](#3가상화-전용-os-proxmox-설치)
  - [4.local/local-lvm 통합하기](#4locallocal-lvm-통합하기)
  - [5.Proxmox에 새로운 디스크추가](#5proxmox에-새로운-디스크추가)
  - [6.Proxmox에 vm추가 다른os설치](#6proxmox에-vm추가-다른os설치)
  - [7.클러스터기능](#7클러스터기능)
  - [8.추가자료](#8추가자료)
  - [9.리눅스 파일 브라우져 설치](#9리눅스-파일-브라우져-설치)
  - [10.문제들](#10문제들)
  - [11.백업](#11백업)

<br/>

- [용어정리](#용어정리)

<br/>
<br/>

***

# 홈서버 구축
  - [1.홈서버 구조](#1홈서버-구조)
  - [2.홈서버 하드웨어 준비](#2홈서버-드웨어-준비)
  - [3.가상화 전용 OS Proxmox 설치](#3가상화-전용-os-proxmox-설치)
  - [4.local/local-lvm 통합하기](#4locallocal-lvm-통합하기)
  - [5.Proxmox에 새로운 디스크추가](#5proxmox에-새로운-디스크추가)
  - [6.Proxmox에 vm추가 다른os설치](#6proxmox에-vm추가-다른os설치)
  - [7.클러스터기능](#7클러스터기능)
  - [8.추가자료](#8추가자료)
  - [9.리눅스 파일 브라우져 설치](#9리눅스-파일-브라우져-설치)
  - [10.문제들](#10문제들)
  - [11.백업](#11백업)

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 1.홈서버 구조
  - https://svrforum.com/svr/1176425#&gid=1&pid=1

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c3c26996-ca32-446e-993b-cf6bc8e25c7c)

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 2.홈서버 하드웨어 준비
  - CPU
    - T붙은건 저전력
    - J붙은것은 저전력 + 메인보드 일체형
    - AMD는 소켓이 모두 같음
    - intel은 소켓이 여러종류
      - AM4소켓
      - 8세대, 9세대 : 1151V2 소켓
      - 10세대 : 1200소켓
      - 등등
    - cpu명칭 설명
      - 이름: 프로세서 이름. 인텔 셀러론, 인텔 코어, 인텔 제온 등 많은 이름이 있지만 통상적으로 인텔 코어를 가장 많이 사용한다. 
      - 등급: CPU의 성능 등급을 표시한다. 
        - 보통 셀러론<펜티엄<i3<i5<i7<i9 순서로 고성능을 의미하며 듀얼코어(2)-쿼드코어(4)-옥타코어(8) 순이며 i9도 옥타코어지만 스레드가 많은 더욱더 고성능의 등급
      - 세대: CPU의 세대를 의미하며 1세대(린필드)를 시작으로 현재 10세대까지 발표. 통상적으로 1년의 하나씩 세대가 올라간다. 세대가 상승함에 따라 성능도 조금씩 상승된다
      - 성능: 자세한 성능을 알려주는 숫자. 가장 낮은 성능인 1부터 가장높은성능인 9까지 표시된다
      - 특성: 숫자뒤에 붙는 알파벳은 CPU의 특성을 나타낸다.
        - K : 배수락이 해제된제품으로 오버클럭가능
        - F : 내장그래픽이 없음
        - X : 익스트림에디션으로 고성능을 의미
        - G : 라데온 그래픽 내장
        - H : 노트북 고성능
        - U : 노트북 저전력
        - M : 노트북 전용
  - 메인보드
    - 사이즈는 총3가지
      - ATX(305x244mm)
      - Micro-ATX(244x244mm)
      - Mini-ITX(170x170mm)
    - m.2지원
    - sata연결이 몇개까지 가능
  - 메모리
    - 메인보드와 속도 맞춰서 구매하면됨
  - SSD
  - HDD
  - 케이스
    - 케이스는 파워가 ATX꼽을수 있고, 메인보드가 들어갈 수 있는것으로
  - 파워

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/fcc730c0-9210-4aa4-bd90-2db239e3a938)

<br/>

  - cpu : i3 8100 + 기본쿨러 : 40000
  - 메인보드 : 아수스 B365M-k메인보드 : 43000
  - 램 : 삼성전자 DDR4-2666 8기가 2개 : 44000
  - 케이스 : 앱코 O10M 오피스 라이트 블랙 (미니타워) : 21150
  - 파워 : 마이크로닉스 Classic II 풀체인지 500W 80PLUS BRONZE 230V EU : 51750
  - SSD : SK하이닉스 Gold P31 M.2 NVMe (500GB) : 65700
  - HDD : 시게이트 2TB HDD / ST20000DM008 : 40000

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 3.가상화 전용 OS Proxmox 설치
  - 보통은 Host OS(윈도우나, 리눅스) 위에서 가상화를 설치해서 사용한다. 이것은, 직접 사용하고 있는 컴퓨터 1대에서 이것저것 할때유용하다. 이렇게 하면 오버헤드가 크기 때문(하이퍼바이저)
하지만, Host OS를 설치하지 않고 바로, 가상화 전용 OS를 설치해서 그 위에 바로 올려 놓을 수도 있다(베어메탈)_ 이때 사용하는 것이 ESXi 또는 Proxmox
  - ESXi 는 유료인 부분이 많고, Proxmox은 오픈 소스이기 때문에 Proxmox로 설치 진행
  - https://svrforum.com/os/132771
  - https://svrforum.com/svr/626336 
  - https://opencourse.tistory.com/445
  - https://velog.io/@kisuk623/Proxmox-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0 
  - https://svrforum.com/svr/626324
  - Proxmox 는 가급적 hdd에 설치, vm을 올릴때 각각을 ssd에 할당해 주면됨
  - no support for hardware-accelerated kvm virtualization detected. check bios settings for intel vt/amd-v/svm 에러(intel에서는 원래 나오고, amd에서만 가능하다고 봄)

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 4.local/local-lvm 통합하기
  - https://svrforum.com/os/289851 
  - https://blog.koder.page/proxmox-7-4-merge-local/ 

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 5.Proxmox에 새로운 디스크추가
  - https://svrforum.com/os/392591 
  - https://blog.naver.com/17beans/222086381116 
  - https://ploz.tistory.com/entry/proxmox-DISK-%EB%A7%88%EC%9A%B4%ED%8A%B8-%ED%95%98%EA%B8%B0
  - https://opencourse.tistory.com/445

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 6.Proxmox에 vm추가 다른os설치
  - Xpenology
    - https://svrforum.com/hardware/573786 
    - https://velog.io/@kisuk623/Proxmox%EC%97%90-Xpenology-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0 헤놀로지 설치
    - https://blog.koder.page/proxmox-xpenology/ 
    - https://svrforum.com/nas/128449 
    - https://blog.dalso.org/article/%ED%97%A4%EB%86%80%EB%A1%9C%EC%A7%80-dsm7-2-%EB%B6%80%ED%8A%B8%EB%A1%9C%EB%8D%94-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0-arpl-i18n
    - BIOS들어가서 가상화 꼭 켜야함.. 안켜서 되게 고생함..
    - vi /etc/pve/qemu-server/[vm번호].conf
    - args: -drive 'if=none,id=synoboot,format=raw,file=/var/lib/vz/template/iso/arpl.img' -device 'qemu-xhci,addr=0x18' -device 'usb-storage,drive=synoboot,bootindex=5' 
    - args: -device 'ich9-usb-ehci1,id=usb-ctl-ds3615xs,addr=0x18' -drive 'id=usb-drv-ds3615xs,file=/var/lib/vz/template/iso/arpl.img,if=none,format=raw' -device 'usb-storage,id=usb-stor-ds3615xs,bootindex=1,removable=off,drive=usb-drv-ds3615xs'
    - 부팅로더 최신버전 : https://github.com/fbelavenuto
    - dsm설치 과정 : https://qideun.com/xpenology-install/ 
  - LXC컨테이너
    - https://it-svr.com/proxmox-lxc-container/ 
    - https://velog.io/@kisuk623/Proxmox-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0 
  - NGNIX 리버스 프록시 and 클라우드 페어 : http -> https로 바꾸기
    - http에 접근하는 것을 전부 proxmox에 있는 lcx컨테이너 하나에 있는 nginx에 보내서, 여기서 https로 프록시 해준다
    - https://nginxproxymanager.com/guide/#quick-setup 
    - https://velog.io/@kisuk623/Nginx-Proxy-Manager%EC%99%80-Cloud-Flare%EB%A1%9C-%EA%B0%84%ED%8E%B8%ED%95%98%EA%B2%8C-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0 
    - https://stackoverflow.com/questions/19910042/locate-the-nginx-conf-file-my-nginx-is-actually-using 
    - sudo netstat -ltup
    - systemctl kill nginx.service
    - docker-compose up -d
  - pfsense / Opnsense(미설치 함)
    - iptime대신에 L4스위치 포트포워딩을 하기 위한것
    - https://witch.work/posts/blog-home-server#4.2.-pfsense-%EC%84%A4%EC%B9%98 
    - https://witch.work/posts/blog-home-server-2#1-%EA%B8%B0%EC%B4%88-%EC%84%A4%EC%A0%95 
    - https://www.2cpu.co.kr/lec/4139
    - https://heisyoung.tistory.com/43  
    - https://blog.naver.com/PostView.naver?blogId=kihyun1998&logNo=222645222009 
    - 라우터는 그냥 엑세스 포인터가 되어야 함(고정으로 되어야 되니까 DHCP서버의 범위 밖에 있는것이 좋음)
    - lan디바이스를 한개만 더 만들어서 거기에 pfsense WAN, LAN을 각각 연결 
    - pfsense의 게이트 웨이에 나머지 장비가 연결되어야함
  - proxmox root차단 sshd
  - 윈도우11
    - https://it-svr.com/proxmox-8eseo-windou-11-seolcihagi/ 

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 7.클러스터기능
  - 다른 서버도 하나의 웹에서 관리하게 해줌
  - https://hwanstory.kr/@kim-hwan/posts/Proxmox-Virtual-Private-Network-Configuration 

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 8.추가자료
  - https://svrforum.com/proxmox_guide

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 9.리눅스 파일 브라우져 설치
  - https://svrforum.com/docker/724152
  - bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/filebrowser.sh)" 
  - id : admin
  - pw : changeme

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 10.문제들
  - https://svrforum.com/nas/691287 

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

# 11.백업
  - https://svrforum.com/os/273957 proxmox백업 설치
  - https://www.youtube.com/watch?v=pC4tdpllJYc 

###### [홈서버 구축](#홈서버-구축)
###### [Top](#top)

<br/>
<br/>

***

# 용어정리
  - Proxmox : 무료 가상화 OS
  - ESXi  : 유료 가상화 OS
  - LXC(LinuX Containers) : 단일 리눅스 시스템에 동작하고 있는 프로세스를 격리시켜 각 프로세스마다 독자적인 리눅스 시스템 환경을 구축하는 것을 의미한다. 일반적으로 가상화는 Hypervisor라는 논리적 플랫폼을 이용해 하나의 Host OS 위에 여러 Guest OS를 구동하는 기술이다. 이와 달리 LXC는 하나의 리눅스 시스템에서 프로세스들을 격리시켜 독자적인 시스템환경을 구축한다. 즉, 리눅스 컨테이너에서 가상화된 프로세스들은 모두 리눅스 시스템을 호환해야 한다
  - LXC 와 도커의 차이점 :
    - LXC는 하나의 컨테이너에 여러개의 응용프로그램들을 띄울 수 있다
    - 도커는 컨테이너당 하나의 응용프로그램을 사용하길 권장하고 있고 이에 대한 수 많은 기능들을 제공한다
