###### Top

- [리눅스에설치](#리눅스에설치)



<br/>
<br/>

***

# 리눅스에설치
  - [ClaudeCodeSetting](https://github.com/BuMinKyoo/ClaudeCodeSetting)
  - 기본
    - home폴더에 들어가서 바꾸면 전역 설정이 되고, 폴더 하위 단위로도 적용이 된다
  - 톨더
    - commands : 커스텀 슬래시 커맨드 (레거시)
    - skills : 커스텀 스킬 (SKILL.md 포함, commands/의 후속)
      - 폴더 - SKILL.md 구조
    - rules : 프로젝트 규칙 (경로별 마크다운 파일)
    - agents : 커스텀 서브에이전트 정의
    - hooks : 훅 스크립트 저장 (settings.json에서 참조)
    - output-styles : 응답 포맷/스타일 커스터마이징
  - 파일
    - settings.json : 프로젝트 설정 (hooks, permissions, MCP 등)
    - settings.local.json :로컬 전용 설정 (gitignore)
    - keybindings.json : 키보드 단축키
    - CLAUDE.md
  - 명령어
    - /effort
    - /branch
    - /fork
    - /exit
    - /agent
    - claude -r (브렌치)
    - claude --resume
    - /clear
    - /plugin
    - /rewind
      - Restore conversation : 선택한 메시지를 입력하기 직전의 상태로 대화 내역을 완전히 되돌립니다
      - Summarize from here : 돌아가고자 하는 시점 이후의 대화 내용들을 완전히 지우는 대신 짧은 요약본으로 압축하여 기억하게 만듭니다, add context를 통해 요약에 추가적인 지시를 덧붙일 수도 있습니다
  - 프레임웍
    - Bkit

###### [Claude](#claude)
###### [Top](#top)
