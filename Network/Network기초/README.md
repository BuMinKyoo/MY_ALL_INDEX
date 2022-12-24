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
    - 1 CMD창에서 "nslookup - <Root DNS IP주소>"
    - 2 CMD창에서 찾고 있는 DNS이름 입력 "www.naver.com"
    - 3 Root DNS는 다른 목록들을 보내주게 되고, 다른 목록에게 다시 물어보는 식으로 진행 한다

![image](https://user-images.githubusercontent.com/39178978/209421860-8fed26b7-bf0f-4a78-bdff-5f07ec5d7f8e.png)

###### [DNS](#dns)
###### [Top](#top)

<br/>
<br/>

***

# 웹 서비스 구조
  - 1 HTML탄생 -> 문서 뷰어 역할수행(링크 타고 문서이동)
    - 웹클라이언트(웹브라우저) <-> 인터넷 <-> 웹서버
    - 상호간 TCP/IP의 연결 위에서 HTTP통신을 하게 된다.
      - 웹브라우저가 HTTP통신을 통해서 웹서버에 HTML파일을 요청하면 웹서버는 HTML파일을 송부해줌
      - HTML파일을 받은 웹브라우저는 2가지를 수행
        - 1 - Parser가 구분분석을 해서 자료구조를 생성한다(DOM)
        - 2 - 화면에 렌더링을 하게 된다

![image](https://user-images.githubusercontent.com/39178978/209432617-0eff1553-7357-494c-9bda-186c5b344c22.png)

<br/>

  - 2 CSS의 탄생
    - 클라이언트가 서버에 요청하는 방식으로 ‘단방향’방식.
    - HTML : 자료구조, CSS : UI

  - 3 JavaScript, WAS의 탄생
    - 클라이언트, 서버의 양방향 상호작용의 등장
    - 예전에는 웹서버가 모든 송수신을 담당했지만, 웹이 발전하면서 처리하고 연산해주는 것이 하나 별도로 생겨나게 된다(WAS의 등장)
      - 클라이언트가 동적인 입력과, 정보를 보내게 되었을때, HTTP는 상태를 저장할 수 없는 프로토콜 이므로 각자가 데이터를 저장할 수 있는 저장소가 필요하게 됐다.
      - 웹 서버 -> 데이터 베이스에 상태 저장, 웹 브라우저 -> Cookie에 상태 저장.
      - 동적으로 생성된 HTML 송부가능
      - MVC모델 탄생
    - 웹 브라우저에 연산을 할 수 있는 SW을 집어 넣게 되고 그 언어인 JavaScript가 탄생
    - 웹의 3대 요소
      - 1 - 구문 분석을 해주는 Parser
      - 2 - 렌더링을 해주는 엔진
      - 3 - 연산을 해주는 스크립트 엔진

  - 4 WAS
    - WAS는 미들웨어(Middleware)의 일종.
      - 미들웨어(Middleware) : 운영 체제에서 제공하지 않는 서비스와 기능을 어플리케이션에 제공하는 소프트웨어
      - 데이터관리, 메시지, 인증 및 API 등 관리는 주로 미들웨어를 통해 처리된다
    - 일반적으로 프레임 워크로 개발이 이루어지게 되며, JAVA언어로 많이 개발된다(Spring boot)
    - JAVA코드가 아닌 스크립트 언어만으로 해결 할 수 있다.(node.js, PHP 등)

  - 5 웹 서비스의 성능
    - 1 - WAS 연산 속도
    - 2 - DB 응답 속도
      - 속도를 높이기 위해 튜닝을 한다
    - 3 - 클라이언트 -> 웹서버 응답 속도(즉, 네트워크 속도)
    - 1번 2번을 모니터링 하는 것이 APM 이다(ex : 스카우터(Scouter), 제니퍼(JENNIFER) )

  - 6 RESTful API
    - 예전의 웹은 GET, POST방법을 통해서, HTML + CSS + JavaScript + 사진 등등을 직접 받았지만, 지금은 데이터만 날아 오는식으로 발전됐다(XML, JSON)
      - 클라이언트가 데이터만 받아서 HTML을 생성(자신의 OS에 맞는 HTML생성, JavaScript(React.js, Vue.js, Angular 등))
    - 어떤 웹 시스템을 하나의 기능으로 보고, CRUD(생성,읽기,쓰기,삭제)기능을 제공하게 되고, 이때 HTTP기반으로 클라이언트가 URL을 던져서 CRUD(생성,읽기,쓰기,삭제)기능을 함수형태로 CALL하게 되는데 이것을 RESTful API라고 한다.

  - 7 보안
    - 웹 서버 앞단에 보안으로 꼭 들어가는 3가지
      - IPS
      - SSL
      - WAF

![image](https://user-images.githubusercontent.com/39178978/209432772-98891c0d-ca1d-42c8-a4ef-1c2076874846.png)

###### [웹 서비스 구조](#웹-서비스-구조)
###### [Top](#top)

<br/>
<br/>

***

# GET, POST
  - 클라이언트와 서버 사이에 이루어지는 요청과 응답 데이터를 전송하는 방식

<br/>

  - GET type
    - localhost:8080/jsp-test/bmi/output.jsp?name=홍길동&birth=19910315
      - localhost = URL/IP 
      - :8080 = WAS port number  
      - /jsp-test = context root 
      - /bmi/output.jsp = web page경로 
      - ? = 웹페이지와 파라미터 구분. 
      - name = 파라미터값의name 
      - 홍길동 = 파라미터의 값.
      - & = 파라미터와 파라미터 구분
    - Select적인 성향을 가지고 있으며, 서버에서 데이터를 가져와서 보여주기만 하는 용도로 사용한다, 서버의 값이나 상태를 바꾸지 않는다(게시판 리스트 보기, 글보기 등)
    - 한번 접근하면 캐싱을 하기 때문에 두번째 접근할때 속도가 빨라진다
  - POST type
    - localhost:8080/jsp-test/bmi/output.jsp
      - localhost = URL/IP 
      - :8080 = WAS port number  
      - /jsp-test = context root 
      - /bmi/output.jsp = web page경로
    - 한글이 깨지게 된다. 한글을 인코딩해줘야 한다
    - 데이터를 가져와서 서버의 값이나 상태를 저장하거나 수정할 수 있다(글쓰기, 글 수정, DB값 수정)

<br/>

  - http의 기본 포트는 80이고, https의 기본 포트는 443이기 때문에 통신을 할때 기본 포트는 생략해도 되며, 기본 포트가 아닌 경우에는 꼭 명시 해줘야 한다

###### [GET, POST](#get-post)
###### [Top](#top)

<br/>
<br/>

***

# 네트워크 데이터 단위
  - Socket수준 : Stream
  - TCP수준 : Segment
      - TCP수준에서의 최대 길이를 MSS라고함(MSS가 MTU보다 작다)
      - MSS는 특별한 이유가 없다면 TCP/IP헤더가 각각 20바이트 임으로 -40을 해서 1460이 된다.(하위 수준으로 내려갈때 각각 헤더가 붙게 됨!)
  - IP수준 : Packet
      - IP수준 에서의 최대 길이를 MTU라고 함(기본적으로 1500 바이트)
  - 하드웨어 수준 : Frame

  - User수준인 어플리케이션 process가 추상화한 File에 다가 Stream데이터를 Write하고, kernel수준으로 내려간 Stream데이터가 TCP에서 Segment화 된다. 그것이 인터넷에서 전송 가능한 형태인 Packet으로 캡슐화 후, 실제로 Packet 실어 나를때는 또 캡슐화 하여 Frame이 되어 전송 된다

![image](https://user-images.githubusercontent.com/39178978/209432848-c48ccb71-2e5c-4756-b060-3b9df931e86c.png)

###### [네트워크 데이터 단위](#네트워크-데이터-단위)
###### [Top](#top)

<br/>
<br/>

***

# 패킷의 생성 원리
  - Packet의 생김새
    - Header(IP l TCP)
      - Payload를 실어 나르기 위한 데이터가 들어 있다
      - Header에는 IP(L3), TCP(L4)순으로 Header가 붙어 있게 된다
    - Payload
      - 일반적으로 IP l TCP 가 각각 20바이트로 Header로 붙기 때문에 1460바이트가 된다
      - Payload를 조사하는 것을 DPI라고 한다

  - 프로세스가 소켓에 입출력을 시도 하면 메모리에 저장된 Stream이라는 데이터를 일정한 크기로 자른후, 캡슐화 하여 Packet을 만들고(IP, TCP헤더), 다시 캡슐화 하여 Frame을 만들어 내보낸다

![image](https://user-images.githubusercontent.com/39178978/209432879-5eea2a38-dd77-44f9-b65a-e1573cb1d04a.png)

###### [패킷의 생성 원리](#패킷의-생성-원리)
###### [Top](#top)

<br/>
<br/>

***

# Router의 구조, Inline, Out of path
  - Router(Inline방식)(packet단위를 다룸)
    - 라우터에는 내부로 연결되는 NIC과 외부로 연결되는 NIC이 존재한다
    - 방화벽과 라우터는 둘다 L3스위치에 속하고 IP로 통신한다
      - 방화벽은 보안적인 이유로 Bypass or Drop을 결정
    - 내부적으로 라우터는 Bypass or Drop 인지 결정하고 어디로패킷을 보낼지 지정해줌(이과정을 lnline처리라고 함)
    - Inline구조이며 데이터가 타고 가는 과정은 아래와 같다
    - 아래와 같이 한번 저렇게 H/W -> Kernel -> User 단계를 크로스 하며 갈때 전산 비용이 상당히 발생하게 된다(처리 지연이 발생한다)

![image](https://user-images.githubusercontent.com/39178978/209432901-186e34f1-e2eb-4973-a05d-791be4b1c82a.png)

<br/>

  - 처리 수준의 3가지에 따라 처리 속도가 달라진다
    - Process수준에서 처리한 이후 전송
    - IP수준에서 처리한 이후 전송
    - H/W(NIC)수준에서 처리한 이후 전송
      - H/W단계에서 보내는 것이 가장 빠르고, ‘가속했다’라고 말한다

![image](https://user-images.githubusercontent.com/39178978/209432920-d5941ead-7dad-41a1-b241-d53486f9652f.png)

<br/>

  - Inline방식(packet단위를 다룸)
    - Bypass or Drop중에 하나를 선택 하게 되는 장비
    - Inline형태의 장비가 필터링을 하는 방화벽 역할을 한다면 ‘패킷 필터링 방화벽’이라고 말한다

![image](https://user-images.githubusercontent.com/39178978/209432944-f8bdfd76-256c-4d04-8706-f3239f2b8bee.png)

<br/>

  - Out of path(packet단위를 다룸)
    - 중간에 인터페이스 중의 하나의 선을 따서 장치를 설치하고, 포트 미러링을 시켜서, 그곳을 지나가는 것을 전부 감지한다.
    - 포트 미러링 : 네트워크 스위치의 어떤 한 포트에서 보이는 모든 네트워크 패킷 혹은 전체 VLAN의 모든 패킷들을 다른 모니터링 포트로 복제하는데 사용된다.
    - 감지(Sensor)만 하는 Read only방식이다
    - 포트미러링을 데이터를 전부 copy해서 보내주기 때문에 cpu사용량이 크게 늘게 된다(과부하)
    - 사용용도에 따라서, 장애대응센서 혹은 IDS(침임 탐지 시스템)등이 된다

![image](https://user-images.githubusercontent.com/39178978/209432955-cd6d2982-cd65-4f29-b61d-fcffa967bdbc.png)

<br/>

  - Tap스위치
    - Out of path구조는 부하가 걸리게 하기 때문에, copy만을 전문으로 떠주는 장치
    - 다양한 Out of path의 장치들에게 보내게 된다

![image](https://user-images.githubusercontent.com/39178978/209432967-0f55c843-1c2e-4458-b75b-5ad3e8669d87.png)

###### [Router의 구조, Inline, Out of path](#router의-구조-inline-out-of-path)
###### [Top](#top)

<br/>
<br/>

***

# Proxy
  - Socket Stream데이터를 다룬다!
  - 비슷한 기능을 하는 VPN은 Network수준, Proxy는 HTTP(Web)수준에서 사용한다
  - 어떤 PC1번의 Proxy를 PC2번이라고 설정한다면, PC1의 어떤 서버와 TCP/IP통신 할때
    - 1 - PC1번이 Proxy에 접속
      - PC2번에는 Proxy역할을 해주는 Process(소켓이 2개, 하나는 받고, 하나는 보내고)가 존재 한다는것
    - 2 - Proxy가 PC1번에 원래 접속하려고 했던 곳으로 요청을 보냄
    - 3 - 요청 받은 사이트가 response를 Proxy로 보냄
    - 4 - Proxy가 response를 PC1번으로 보냄

  - 4가지 기능
    - 우회
      - Proxy를 사용하면 접속 사이트는 PC1이 접속한 것이 아니라 PC2가 접속 했다고 생각할것이다
      - 하지만 PC2는 PC1의 모든 통신을 감청을 할 수 있다

![image](https://user-images.githubusercontent.com/39178978/209433140-b044ec6c-60f8-4a24-87da-010cfabf3a49.png)

<br/>

  - 분석
    - wireshark같은 프로그램은 packet을 분석하기 때문에 일반적으로 SSL같은 기술로 payload가 암호화 된다
    - 자기 자신을 분석할 때는 Proxy서버를 로컬로 해놓는 다면 첫번째 프로그램의 Socket단계에서 바로 두번째 프로그램으로 접속한후, TCP단계로 내려가게 된다
      - 암호화는 두번째 프로그램에서 하게 된다!
      - 암호화 되기 전에 볼 수 있다는것!
      - EX) Fiddler

![image](https://user-images.githubusercontent.com/39178978/209433161-32ffc654-8f45-4c20-aed0-084526ec22ee.png)

  - 감시와 보호
    - 모든 PC가 IP번호 3.3.3.100을 가진 PC를 Proxy로 설정한다면 모든PC가 어떤 사이트를 접근할 때 3.3.3.100을 통해 접근 하게 된다. 이때 악성코드가 있던 사이트를 방문 하게 되면 그것이 Proxy로 먼저 가게 된다.(Virus Wall역할)

![image](https://user-images.githubusercontent.com/39178978/209433175-66837719-0648-45c3-a7c0-de136afc7239.png)

  - Reverse
    - Server앞단에 Proxy를 둔다면, 어떤 클라이언트가 Server에 접속하려고 할때 사실은 Proxy IP로 접속하는 것이 된다. Proxy는 그런 클라이언트의 요청을 받아 실제 서버에 접속해 그것을 다시 클라이언트로 보내주게 된다
    - 해커가 해당 web을 공격할때 실제 접속은 앞단에 있는 Proxy에게 하는 것이므로, 그것을 판별해 내는 Proxy를 WAF(웹 방화벽)라고 한다
      - 이러한 Server을 위한 Proxy를 Reverse Proxy라고 한다
      - WAF(웹 방화벽)의 감시 단위 또한 Proxy 이므로 Socket Stream데이터를 감시한다

![image](https://user-images.githubusercontent.com/39178978/209433189-8dad8d01-a12c-4386-866b-f49c96bb4a6f.png)

###### [Proxy](#proxy)
###### [Top](#top)

<br/>
<br/>

***

# TCP/IP 송수신 원리
  - 서버쪽에서 어떤 파일을 가지고 있고, 클라이언트가 요청했을때 그 파일을 보내주는 상황을 가정
    - 프로그램에 Socket이 열려 있고, 프로그램이 Socket에 파일입출력함(Read : Receive, Write : Send)
      - 1 - 하드 디스크에 있는 File(ex : 1.4MB)
      - 2 - 하드 디스크의 디바이스 드라이버
      - 3 - Socket에 입출력전에, 파일을 입출력하기 위한 메모리를 할당함(Buffered I/O)
        - Memory(Buffered I/O)를 할당할때는 개발자가 결정(ex : 64kb)
        - 용량이 큰 파일을 한번에 불러오는 것이 아니라, 끊어서 불러온다
      - 4 - Socket에 파일을 입출력
      - 5 - TCP(L4)가기전 분해하게 되는데, Buffered I/O에서 TCP(L4)쪽 Window Size에다가 분해한것을 복사(Segment)
        - TCP(L4)쪽 Buffer에 대한 사항은 나중에 검색해보자!!(Window Size)
      - 6 - IP(L3)쪽으로 내려올때, TCP(L4)쪽 Window Size에 있는것을 다시 또 분해(Packet)
        - TCP(L4)쪽에 있는 것을 분해해서 번호를 붙인다음 그중 하나를 캡슐화함(택배 포장 한다고 생각하면 됨)
      - 7 - NIC(L2)쪽으로 내려올때(Frame)
        - IP(L3)쪽에서 내려온것을 다시 캡슐화함(그것을 배송하기 위해, 트럭에 싣는다 고 생각하기)
        - 해당 IP(L3)에 도착하기까지 택배 박스가 택배트럭을 많이 갈아 타게 됨(IP Packet앞에 ethernet Head가 붙게 되며, 한 컴퓨터로 이동시 붙었다 떨어졌다를 반복한다)
      - 8 - 요청된 IP(L3)에 도착(Packet)
        - 역캡슐화가 일어나, Frame은 사라진다(즉, 택배 기사가 택배를 놓고감)
      - 9 - TCP(L4)로 올라감
        - 역캡슐화가 일어나, TCP(L4)쪽 Window Size에 붙게됨(즉, 택배상자가 뜯어져서 내용물이 나옴)
      - 10-1 -데이터를 수신받을 컴퓨터의 TCP(L4) Window Size에 대략 Segment가 2개정도 오면, 잘 수신했다는 것으로 ACK를 보냄(이때 1번 2번 잘 수신했고 3번을 달라고 보내면,        - 자신의 Window Size도 같이 보냄)
      - 10-2 - 데이터를 보낼 컴퓨터는 1번 2번을 보낸후 ACK를 기다리게됨(Wait함)
        - 이것 때문에 속도 지연이 발생함
        - TCP가 UDP보다 느린 이유
        - 이때 ACK로 받은 Window Size에, 3번데이터가 들어갈 자리가 없다면, 보내지 않게 된다(Wait함)

  - 결론
    - 수신측에서, TCP(L4)에서 File Buffer로 퍼올리는 Read속도가 > Ne수신 속도 보다 빨라야 한다(그렇지 않으면 처리 지연 발생)
    - 무조건 네트워크 에서 장애를 찾을 것이 아니라, 프로그램이나 CPU속도, 점유율이 높을경우 이런것이 늦어져서 수신이 늦을 수가 있다.

![image](https://user-images.githubusercontent.com/39178978/209433321-58b7103a-cdb8-4e0b-8e77-cad9c1d0a4d8.png)

###### [TCP/IP 송수신 원리](#tcpip-송수신-원리)
###### [Top](#top)

<br/>
<br/>

***

# L2스위치
  - MAC주소 : cmd창에서 -> ‘ipconfig /all’명령어 -> 물리적주소
  - L2스위치는 2종류가 있다
    - L2 Access : Endpoint와 직접 만나는 스위치
    - L2 Distribution : Access스위치와 연결되는 스위치
  - uplink : 상위 계층 스위치로 연결되는 라인
    - Link-up, Link-down과 의미가 전혀 다르니 헷갈리지 말자

![image](https://user-images.githubusercontent.com/39178978/209433490-3b740c70-3128-457e-b67f-48aa8022545d.png)

<br/>

  - 예를 들어 L2스위치로써 16개를 꼽을 수 있는 장치가 있다면 uplink로 하나 연결해야 하니 최대 15개 컴퓨터 연결이 가능하게 된다

![image](https://user-images.githubusercontent.com/39178978/209433508-9507c35f-92d8-48cc-82c1-a396174ac207.png)

###### [L2스위치](#l2스위치)
###### [Top](#top)

<br/>
<br/>

***

# TCP/IP통신시 MAC주소 변화
  - 통신시, TCP - IP - NIC수준으로 이동하게 되며, IP - NIC수준 이동시 캡슐화가 된다
    - IP Packet앞에 ethernet Head가 붙게 된다
  - L2통신시에는 IP주소는 보지 않고, MAC주소만 보기때문에 L2통신에 MAC주소는 중요하다.
  - 각 라우터는 Packet 수신자의 IP와 목적지 IP를 보고, 가장 빠른 길로 갈 수 있는 다음 라우터의 MAC주소만 바꿔서 간다고 생각할 수 있다

![image](https://user-images.githubusercontent.com/39178978/209433549-6c47eb61-a8cb-400d-a46f-728d6f9f4f0f.png)

###### [TCP/IP통신시 MAC주소 변화](#tcpip통신시-mac주소-변화)
###### [Top](#top)

<br/>
<br/>

***

# L2스위치 작동원리, ARP
  - ARP : IP주소로 MAC주소를알아내는 프로토콜
  - Broadcast를 쏴서 찾고 있는 IP를 가진 컴퓨터가 응답을 Unicast로 하게 된다
  - 그러한 ARP를 조작하는 것을 ARP Spoofing이라고 한다

![image](https://user-images.githubusercontent.com/39178978/209433578-bd159143-9ac8-4f16-b6f9-d818aef04a12.png)

###### [L2스위치 작동원리, ARP](#l2스위치-작동원리-arp)
###### [Top](#top)

<br/>
<br/>

***

# TTL
  - TTL(Time To Live) : Hop을 하나 지나갈때마다 TTL을 하나 줄이게 된다. 0이 되면 Packet이 사라지게 된다
    - 라우터에 Looping이 발생했을때, 라우터의 cpu점유율이 뛰고 망가질 수 있기 때문에 TTL이 0이 되면 없어지게 된다.
    - TTL이 0이되었던 라우터에서 ICMP를 보내주게 된다(보안 때문에 설정해 놓지 않았다면 보내지 않는다)
  - Hop : 라우터와 라우터 사이의 간극

![image](https://user-images.githubusercontent.com/39178978/209433602-164a8df7-406a-4e88-9ad9-601d0d2a195a.png)

###### [TTL](#TTL)
###### [Top](#top)

<br/>
<br/>

***

# 3 way handshake
  - 주고 받는 단위 :  Segment
  - Server는 Client의 Seq번호를 받고, 응답해줌
    - MSS사이즈 및 정책을 교환한다
    - 가장 작은 MSS로 하향 평준화 하여 맞춘다
    - 정책 : 혼잡제어
      - 네트워크가 문제가 있어서 수신이 안되거나, 데이터를 받지 못하는 상황
  - 3 way handshake을 한다는것
    - Seq교환, MSS교환, 정책 교환
    - 보안이 전혀 되어 있지 않다

![image](https://user-images.githubusercontent.com/39178978/209433642-03d0d76c-a5be-4aad-98d9-706d279b2393.png)

###### [3 way handshake](#3-way-handshake)
###### [Top](#top)

<br/>
<br/>

***

# MTU, Packet 단편화
  - Packet이 단편화가 일어나면, 잘려진 뒤쪽에도 IP해더를 복사해서 붙이게 되며, Offset값을 붙여서 어느 지점에서 잘렸는지 알 수 있게 한다
  - 수신받는 측에서 보통 단편화된 것들을 조립하게 된다
  - 현재는 거의 발생하지 않지만, VPN때문에 간혹 발생하게 된다
  - 단편화가 나지 않도록 하향평준화 시키면 된다

![image](https://user-images.githubusercontent.com/39178978/209433664-5262225f-bed6-4c62-99e9-7e27ca98653f.png)

###### [MTU, Packet 단편화](#mtu-packet-단편화)
###### [Top](#top)

<br/>
<br/>

***

# Unicast, Broadcast, Multicast
  - Unicast : 내부 네트워크 망 안에서 통신 하는것(PC1 과 PC24가 통신)
  - Broadcast : Broadcast주소는 HOST주소가 2진수로 전부다 1일때를 가리킨다
    - PC1이 Broadcast 주소로 전달을 하게 되면, 내부 네트워크 안에 있는 모든 IP에 전달 되게 된다.
      - IP : XXX.XXX.XXX.255
      - MAC : FF FF FF FF FF FF
    - Broadcast를 하게 되면, 그 순간은 어느 IP에서도 신호를 쏠 수 없게 된다. 네트워크 효율을 떨어 뜨리며, 최소화를 해야 한다.

![image](https://user-images.githubusercontent.com/39178978/209433702-52260eb2-8bc0-4925-b056-d992c62937aa.png)

<br/>

  - Multicast : 한 IP에서, 특정한 여러 IP로 지정해서 보내고 싶을때
    - 어떤 등록된 IP는 신호를 받고 사용하게 되지만, 등록되지 않은 IP가 받았을 경우, 받자 마자 무시를 하게 된다
      - 즉, L2수준에서는 Broadcast처리가 되기 때문에, 효율을 떨어뜨리게 됨으로 ‘SDN’이 등장하게 됨

![image](https://user-images.githubusercontent.com/39178978/209433744-a45b1c34-2541-40eb-bd8b-ecb7501a8b50.png)

###### [Unicast, Broadcast, Multicast](#unicast-broadcast-multicast)
###### [Top](#top)

<br/>
<br/>

***

# 서브넷팅
  - 사설IP를 더욱 나누어서 쓰기 위해서 사용함
  - 서브넷 마스크 bit수를 1증가시키면, Network ID값이 1bit증가되고 Host ID를 나타내는 bit가 1 줄어들게 된다
  - https://code-lab1.tistory.com/34

###### [서브넷팅](#서브넷팅)
###### [Top](#top)

<br/>
<br/>

***

# 공유기 작동원리
  - NAT-Table을 참고해서 작동 된다
    - 1 - 최초의 Packet을 보고, 송신, 수신 에 대한 IP, Port를 적어 놓는다
    - 2 - Port번호를 변경시켜서 수신된 곳에 보낸다
      - 이때는 공유기 IP와, 공유기가 바꾼 Port번호로 가게 된다
    - 3 - 수신된 곳에서 Response를 보내서, 공유기가 수신 받는다
    - 4 - Packet을 열어서, IP, Port를확인하고, NAT-Table을 참고해서 처음 수신했던 PC로 Response보낸다
  - 공유기 안쪽의 사설IP에 있는 다른 PC 2대가, 외부에 있는 사이트에 접속했을 때, 사이트는 같은 IP인 공유기가 2번 접속 했다고 생각하게 된다
  - F/W기능을 수행한다
    - 내부에 있는 PC에서 송신할때 NAT-Table에 그것들을 보관 하고 나중에 참고해서 보내주기 때문에, 해커가 접속하게 됐을 때, NAT-Table에 존재하지 않기에 자동으로 F/W기능을 하게 된다

![image](https://user-images.githubusercontent.com/39178978/209433787-ba919305-b58d-4184-840b-ef56d5c69959.png)

###### [공유기 작동원리](#공유기-작동원리)
###### [Top](#top)

<br/>
<br/>

***

# 부하분산(Load Balancer)
  - 공유기와 같은 원리로 작동된다, 서버에 골고루 접속시킬 수 있도록 작동
  - 보통2대를 사용하게 된다
    - 1대만 쓰게 된다면, 1개가 고장나면 큰일이 나기 때문

![image](https://user-images.githubusercontent.com/39178978/209433803-0a1edd9f-1a4a-439d-9c15-c63b08cf117d.png)

###### [부하분산(Load Balancer)](#부하분산load-balancer)
###### [Top](#top)

<br/>
<br/>

***

# VPN작동원리(L3, IPSec)
  - 내부망 안에 있는 Server는 내부에서만 접근이 가능한데, 외부에서 접근하기 위해 VPN을 사용하여 ‘터널링’한다.
  - 라우터나, 보안장치가 전부 VPN을 지원해야 한다(SG = SecureGate를 지원해야 한다)
  - VPN프로그램을 설치 해야 한다
  - 내부망 IP주소를 외부로 하나 할당하게 된다
  - 순서
    - 1 - VPN 프로그램을 깔면, Virtual NIC Driver가 생김
    - 2 - 그곳에 내부망 IP를 할당한다
    - 3 - Virtual 로 만들어진 IP를 탄후, 본래의 IP를 타고 가게 된다
      - IP, TCP 헤더가 2개씩 붙게 된다
      - 헤더가 하나더 붙기 때문에 MTU 1500을 초과하게 되어 단편화가 발생되니, Payload를 기본적으로 1460보다 더 작게 만들어 헤더가 하나더 붙었을때 초과 되지 않게 만든다
    - 4 - 공유기가 그 IP를 받게 되고, 그것을 디캡슐화 시킨다

![image](https://user-images.githubusercontent.com/39178978/209433861-7cd9c8ee-d239-4185-a296-03a020ae46a0.png)

<br/>

![image](https://user-images.githubusercontent.com/39178978/209433865-3919c937-5db1-4d58-9f22-d5d5c92a1ca7.png)

<br/>

![image](https://user-images.githubusercontent.com/39178978/209433873-d3215dfa-4e57-4c0a-a48a-071dfc2aa89a.png)

###### [VPN작동원리(L3, IPSec)](#vpn작동원리l3-ipsec)
###### [Top](#top)

<br/>
<br/>

***

# 네트워크 보안 종류
  - 내부망 안에 있는 Server는 내부에서만 접근이 가능한데, 외부에서 접근하기 위해 VPN을 사용하여 ‘터널링’한다.
  - 라우터나, 보안장치가 전부 VPN을 지원해야 한다(SG = SecureGate를 지원해야 한다)
  - VPN프로그램을 설치 해야 한다
  - 내부망 IP주소를 외부로 하나 할당하게 된다
  - 순서
    - 1 - VPN 프로그램을 깔면, Virtual NIC Driver가 생김
    - 2 - 그곳에 내부망 IP를 할당한다
    - 3 - Virtual 로 만들어진 IP를 탄후, 본래의 IP를 타고 가게 된다
      - IP, TCP 헤더가 2개씩 붙게 된다
      - 헤더가 하나더 붙기 때문에 MTU 1500을 초과하게 되어 단편화가 발생되니, Payload를 기본적으로 1460보다 더 작게 만들어 헤더가 하나더 붙었을때 초과 되지 않게 만든다
    - 4 - 공유기가 그 IP를 받게 되고, 그것을 디캡슐화 시킨다

![image](https://user-images.githubusercontent.com/39178978/209433861-7cd9c8ee-d239-4185-a296-03a020ae46a0.png)

<br/>

![image](https://user-images.githubusercontent.com/39178978/209433865-3919c937-5db1-4d58-9f22-d5d5c92a1ca7.png)

<br/>

![image](https://user-images.githubusercontent.com/39178978/209433873-d3215dfa-4e57-4c0a-a48a-071dfc2aa89a.png)

###### [VPN작동원리(L3, IPSec)](#vpn작동원리l3-ipsec)
###### [Top](#top)

<br/>
<br/>

***
