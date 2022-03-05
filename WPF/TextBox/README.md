
##### TextBox
  - AcceptsReturn="True" 속성 : 엔터키를 사용 할 수 있게함
  - AcceptsTab="True" 속성 : 텝키를 사용 할 수 있게함
  - VerticalScrollBarVisibility="Auto" 속성 : TextBox안의 공간보다 길이 길어지면 자동으로 wrap해줌
  - MaxLength 속성 : 글자수를 제한해줌
  - CharacterCasing 속성 : 자동으로 대문자 소문자로 입력되게 함
  - SelectedText : 마우스 드래그로 선택한 텍스트를 가져옴

  - TextChanged 이벤트 : 글자가 바뀔 때마다 이벤트를 실행하게함(TextBox안에 글자가 지정되어 있으면 예외가 발생하여 실행이 안됨)
  - SelectionChanged 이벤트 : 선택한 텍스트를 변경하거나 캐럿을 이동할 때 발생하는 이벤트, 마우스나 키보드 등의 입력장치를 사용해서 선택을 조정할 때마다 발생하는 이벤트


<br/>

##### TextBox에서 선택 위치얻는 속성
  - CaretIndex : 캐럿의 위치를 설정
  - SelectionStart : 선택한 텍스트가 시작되는 위치값(CaretIndex와 같은 값을 리턴)
  - SelectionLength : 선택된 문자 수를 반환, 선택 문자가 없으면 0을 리턴
  - Select(1,4) : 마우스로 드래그 하는 것과 같다, ex)현재 예시는 1이상 4미만의 인덱스를 표시함
  - SelectAllAll() : 마우스로 드래그 하는 것과 같다, 전체 선택
