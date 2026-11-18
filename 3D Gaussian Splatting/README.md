<br/>

###### Top

- [Computer Graphics 기초이론](#computer-graphics-기초이론)
 

<br/>
<br/>

# Computer Graphics 기초이론
  - 점과 백터
    - 그래픽스에서는 점과 백터의 표현을 달리하며, 점은 이동할수 있고 백터는 이동할수 없다
    - 각각의 동차 좌표 표현
      - 점 : (x,y,z)	-> (x,y,z,1)
      - 벡터 : (x,y,z)	-> (x,y,z,0)

<br/>

  - 이동,회전, 크기 조절 행렬

<br/>

~~~text
// 이동행렬 T는 아래와 같다

    ⎡ 1  0  0  5 ⎤
T = ⎢ 0  1  0  3 ⎥
    ⎢ 0  0  1  2 ⎥
    ⎣ 0  0  0  1 ⎦

// 좌표 곱하기 예시
⎡ 1  0  0  5 ⎤   ⎡ x ⎤   ⎡ x + 5w ⎤
⎢ 0  1  0  3 ⎥ × ⎢ y ⎥ = ⎢ y + 3w ⎥
⎢ 0  0  1  2 ⎥   ⎢ z ⎥   ⎢ z + 2w ⎥
⎣ 0  0  0  1 ⎦   ⎣ w ⎦   ⎣    w   ⎦

~~~


###### [Computer Graphics 기초이론](#computer-graphics-기초이론)
###### [Top](#top)
