###### Top

- [Claude](#claude)
- [Gemini](#gemini)


<br/>
<br/>

***

# Claude
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
  - 프레임웍
    - Bkit

<br/>

  - CLAUDE.md
~~~
# CLAUDE.md

## 작업 규칙

- 코드 관련 질문을 받았을 때, 분석/설명만 하고 바로 수정하지 말 것
- 반드시 사용자에게 "이 코드를 수정할까요?" 또는 "다른 질문이 있으신가요?" 확인 후 진행할 것
- 사용자가 명시적으로 수정을 요청한 경우에만 코드를 변경할 것
~~~


<br/>
<br/>

***

# Gemini
  - [GeminiSetting](https://github.com/BuMinKyoo/GeminiSetting)
  - 파일
    - .gemini.md


