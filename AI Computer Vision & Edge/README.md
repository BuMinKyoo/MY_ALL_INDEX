###### Top

- [그래픽관련tool](#그래픽관련tool)
- [Ai_Agent_API](https://github.com/BuMinKyoo/Ai_Agent_API/tree/main)
  - WPF 기반 LLM 로그 분석 도우미. 장비/시스템에서 발생한 로그·에러 메시지를 LLM API로 보내, 근본 원인 추정과 점검 항목을 자동으로 받아보는 데스크톱 앱

<br/>
<br/>

***

# 그래픽관련tool
  - GDI(CPU 전용)
    - 기본 2D 화면 그리기
    - 낡음, 무거움 (MFC 시절의 유산)
  - DirectX(GPU)
    - 고성능 화면 그리기 (윈도우 전용)
    - PC 게임, WPF 렌더링의 뼈대
  - OpenGL(GPU)
    - 범용 화면 그리기 (크로스 플랫폼)
    - 널리 쓰이나 구조가 오래됨
  - Vulkan(GPU)
    - 초고성능 화면 그리기 (크로스 플랫폼)
    - 성능 끝판왕, 그러나 극악의 개발 난이도
  - Metal(GPU)
    - 고성능 화면 그리기 (애플 전용)
    - Mac, iOS 등 애플 기기의 그래픽/연산 핵심
  - WebGL / WebGPU(GPU)
    - 웹 기반 3D 및 고성능 그래픽
    - 웹 브라우저 위에서 별도 프로그램 설치 없이 구동
  - Skia(CPU / GPU 혼용)
    - 2D UI 화면 렌더링
    - 구글 크롬, 안드로이드, 플러터(Flutter)의 뼈대
  - CUDA(GPU 전용 - NVIDIA)
    - 초고속 병렬 수학 연산 (AI 핵심)
    - 화면 안 그림. 오직 엔비디아 GPU용
  - OpenCL(GPU / CPU 범용)
    - 범용 병렬 수학 연산 (크로스 플랫폼)
    - 하드웨어를 가리지 않으나 현재 AI 생태계 주도권은 잃음
  - DirectML(주로 GPU)
    - 머신러닝 연산 가속 (윈도우 전용)
    - 그래픽카드 종류 상관없이 윈도우 앱 내 AI 추론 가속 (최근 NPU도 지원)
  - TensorRT(GPU 전용 - NVIDIA)
    - AI 모델 추론 초고속 최적화
    - 무거운 AI 모델을 엔비디아 GPU에 맞춰 가볍고 빠르게 압축
  - OpenCV(기본 CPU / GPU 가속 지원)
    - 이미지/영상 분석 및 처리
    - 기본 연산은 CPU가 담당하나, 내부적으로 cv::cuda 등을 호출해 GPU로 고속 처리 가능
  - FFmpeg(기본 CPU / GPU 코덱 지원)
    - 비디오/오디오 파일 및 스트림 처리
    - 기본 인코딩/디코딩은 CPU가 담당하나, NVIDIA의 NVENC 같은 GPU 전용 코덱 칩을 활용해 가속 가능

###### [그래픽관련tool](#그래픽관련tool)
###### [Top](#top)





