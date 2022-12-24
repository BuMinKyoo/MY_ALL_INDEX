우선, 유투브에서 ‘널널한 개발자’로 활동중이신, 최호성님의 강의를 보고. 많은 부분에서 정리와, 캡쳐한 내용임으로 출처를 밝힙니다!
https://www.youtube.com/watch?v=k1gyh9BlOT8 

###### Top

- [컴퓨터구조, 네트워크 계층](#컴퓨터구조-네트워크-계층)
- [Port, IP, MAC](#port-ip-mac)
- [LAN, WAN](#lan-wan)
- [Host, Switch, End-point, Network](#host-switch-endpoint-network)
- [IP주소 종류](#ip주소-종류)
- [DNS](#dns)
- [웹 서비스 구조](#웹-서비스-구조)
- [GET, POST](#get-post)
- [네트워크 데이터 단위](#네트워크-데이터-단위)
- [패킷의 생성 원리](#패킷의-생성-원리)
- [Router의 구조, Inline, Out of path](#router의-구조-inline-out-of-path)
- [Proxy](#proxy)
- [TCP/IP 송수신 원리](#tcpip-송수신-원리)
- [L2스위치](#l2스위치)
- [TCP/IP통신시 MAC주소 변화](#tcpip통신시-mac주소-변화)
- [L2스위치 작동원리, ARP](#l2스위치-작동원리-arp)
- [TTL](#TTL)
- [3 way handshake](#3-way-handshake)
- [MTU, Packet 단편화](#mtu-packet-단편화)
- [Unicast, Broadcast, Multicast](#unicast-broadcast-multicast)
- [서브넷팅](#서브넷팅)
- [공유기 작동원리](#공유기-작동원리)
- [부하분산(Load Balancer)](#부하분산load-balancer)
- [VPN작동원리(L3, IPSec)](#vpn작동원리l3-ipsec)
- [네트워크 보안 종류](#네트워크-보안-종류)
- [wireshark(패킷 분석 프로그램)](#wireshark패킷-분석-프로그램)

<br/>
<br/>

***

# 컴퓨터구조, 네트워크 계층

  - 컴퓨터의 구조
    - 하드웨어
    - 소프트 웨어
      - 시스템 소프트웨어(Kernel)
      - 애플리케이션(User)

  - 네트워크의 계층적 구분
    - OSI 7 LAYER 와 DoD Four-Layer Model 의 2가지가 있다
      - OSI 7 LAYER 에서의 구분
        - 7 응용
        - 6 표현
        - 5 세션
        - 4 전송
        - 3 네트워크
        - 2 데이터링크
        - 1 물리계층
      - DoD Four-Layer Model 에서의 구분
        - 4 Application
        - 3 Transport
        - 2 Network
        - 1 Access

  - DoD Four-Layer Model 으로 설명하는 것이 조금더 간단하고, 아래 그림을 설명해 보면
    - Access 계층에 ‘네트워크 인터페이스 카드(Network Interface Card)’ 인 ‘NIC’이 있고 그 ‘NIC’인 하드웨어를 움직일 수 있는 Device Driver가 있으며, 그 위에 IP, TCP가 존재하고 맨 위에 Application인 Process가 있다.
    - 네트워크 에서, Application에서 kernel쪽으로 데이터를 보낼때 이것을 추상화하면 File의 형태로 추상화 하는데, 이것을 Socket이라고 한다
    - Socket이란? : TCP, IP Socket 이라고 했을때, TCP를 User 모드 Application Process가 접근 할 수 있도록 File형식으로 추상화한 인터페이스

![image](https://user-images.githubusercontent.com/39178978/209421150-33508b05-4493-4918-95ac-a9e1ebd443ac.png)

###### [컴퓨터구조, 네트워크 계층](#컴퓨터구조-네트워크-계층)
###### [Top](#top)

<br/>
<br/>

***

# Port, IP, MAC

  - 각각은 어떤 식별자 인가?
    - MAC주소 : 네트워크 인터페이스 카드(Network Interface Card)’ 인 ‘NIC’ 에 대한 식별자(NIC은 쉽게 LAN카드라고 할 수 있음)
      - 보통 노트북에는 유선 LAN카드와 무선 LAN카드가 있기 때문에 MAC주소가 2개 있다고 생각하면 된다
      - 맥 주소는 변경 가능하다(Virtual MAC)
    - IP주소 : Host에 대한 식별자(Host : 인터넷에 연결된 컴퓨터)
      - IP주소는 NIC하나에 N개를 바인딩 할 수 있음, 즉 컴퓨터는 IP주소가 여러개 될 수 있음
      - IPv4(32비트, 약43억개), IPv6(128비트) 로 2가지가 있다
        - NET기술 때문에 IPv4체계를 아직까지 대부분 사용하면서 인터넷을 쓰고 있다!(인터넷 하나를 쪼개는 공유기의 보급때문에!)
      - IPv4는 8비트씩 4번을 끊는 식으로 관리한다(000,000,000,000)
      - IPv4는 Network ID와 Host ID로 나뉜다.
        - Netmask : IPv4주소에서 Network ID길이가 얼마인지 나타내는 것
        - ex) IPv4주소 : 192.168.60.14이고 Netmask가 255.255.255.0일때 AND연산을 진행(위의 예제 에서는 192.168.60.0 이 Network ID가 된다, 192.168.60.14/24 이렇게 표기 하기도 한다)
    - Port번호 : 프로세스 식별자, 서비스 식별자, 인터페이스번호
      - 16비트 정보(0~65535)
      - Socket을 생성할때 붙는 번호라고 생각하면되고, 인터넷 정보가들와서 TCP수준까지 올라 왔을때 Port번호를 보고 어떤 프로세스로 갈지 결정하게 된다

![image](https://user-images.githubusercontent.com/39178978/209421715-e1f32dcb-5e9b-4843-818e-127289022ba4.png)

![image](https://user-images.githubusercontent.com/39178978/209421721-45a2eec7-c8c3-41ad-8d35-cac96a155712.png)

###### [Port, IP, MAC](#port-ip-mac)
###### [Top](#top)

<br/>
<br/>

***

# LAN, WAN

  - LAN : MAC주소에 기초해서 작동하는 네트워크(방송주소에 닿는 수준까지)
  - WAN : IP주소에 기초해서 작동하는 네트워크

![image](https://user-images.githubusercontent.com/39178978/209421744-dd724c67-5983-4d81-9006-a07dfac3e6f5.png)

###### [LAN, WAN](#lan-wan)
###### [Top](#top)

<br/>
<br/>

***

# Host, Switch, End-point, Network

  - Host : 컴퓨터가 인터넷에 연결되어 있으면 그 컴퓨터를 Host라고 한다
  - Switch :  네트워크 자체를 이루고 있는 컴퓨터(Router, Firewall, IPS 등)
    - Switch의 역할은 Switching이며 Router는 길을 찾기 위해(경로 선택의 근거는 ‘라우팅 테이블’이다), Firewall 과 IPS 를 보안을 위해 작업을 하게 된다
    - MAC주소를 Switching하면 L2스위치, IP를 Switching하면 L3스위치 라는 식으로 불리게 되고, L1~L7로 갈수록 비싸진다
  - End-point : 네트워크를 이용하는 이용 주체(Peer, Server, Client 등)
  - Network : Router(패킷 경로를 찾아 주는 L3 스위치의 일종으로 생각해도 좋다) + DNS의 집합체

###### [Host, Switch, End-point, Network](#host-switch-endpoint-network)
###### [Top](#top)

<br/>
<br/>

***

# IP주소 종류

  - Global IP(공인IP) : xxx.xxx.xxx.xxx 32비트
    - 오로지 하나뿐인 IP
  - Private IP(사설IP) : xxx.xxx.xxx.xxx 32비트
    - LAN이라고 일컬을 수 있다.
    - 공유기가 Global IP를 공유해 주기 때문에 사용할 수 있게 된다
    - 각각 클래스 별로 사설 IP주소가 정해져 있다
      - A : 8비트(네트워크) + 24비트(호스트) : 10..
      - B : 16비트(네트워크) + 16비트(호스트) : 172.16..
      - C : 24비트(네트워크) + 8비트(호스트) : 192.168..
  - Loopback
    - 127.0.0.1이며, 호스트 자신을 의미한다
    - Process 1번과 2번이 있을때 목적지 서버 주소를 127.0.0.1로 보내게 되면, IP에서 NIC으로 내려가지 않고, 다시 올라가게 된다

![image](https://user-images.githubusercontent.com/39178978/209421778-b0336755-8313-42cf-aef2-dc3eddf4f0dc.png)

###### [IP주소 종류](#ip주소-종류)
###### [Top](#top)

<br/>
<br/>

***


# DNS

<DNS>
  - 분산형 DB구조를 가지며, 계층구조를 가지고 있다
  - 최 상단에 Root DNS가 13대 존재한다
  - www.naver.com
    - www : 호스트 네임
    - naver.com : 도메인 네임
  - 모든 컴퓨터는 IP주소로 통신하지만 외우기 어렵기 때문에 DNS를 도입하여 외우기 쉬운 문장으로 표현한것
  - 인터넷에서 도메인 네임을 쳤을때 일어나는 일
    - 1. PC메모리의 DNS Cache를 확인
    - 2. Hosts File을 확인(윈도우 에서)
    - 3. Root DNS에게 확인
      - 공유기는 DNS포워딩을 지원하기 때문에 응답을 대리 하기도 한다
      - 공유기가 응답하지 않을경우는, IPS가 제공하는 DNS에게 물어본다
      - Root DNS가 직접 IP주소를 알려주는 것이 아니며, 연관되어 있는 각각의 DNS목록 들을 보내주며 계층적으로 계속 내려가게 된다
        - 응답시에 계속 이런 절차를 가지면 효율이 떨어지기 때문에 응답시에는 유효기간을 같이 보내주게 된다(PC메모리의 DNS Cache)

![image](https://user-images.githubusercontent.com/39178978/209421832-e58ac85f-89c2-46f3-a02d-d8526ec2cb3a.png)

  - Root DNS에 직접 묻기
    - 1 CMD창에서 “nslookup - <Root DNS IP주소>”
    - 2 CMD창에서 찾고 있는 DNS이름 입력 “www.naver.com”
    - 3 Root DNS는 다른 목록들을 보내주게 되고, 다른 목록에게 다시 물어보는 식으로 진행 한다

![image](https://user-images.githubusercontent.com/39178978/209421860-8fed26b7-bf0f-4a78-bdff-5f07ec5d7f8e.png)

###### [DNS](#dns)
###### [Top](#top)

<br/>
<br/>

***
