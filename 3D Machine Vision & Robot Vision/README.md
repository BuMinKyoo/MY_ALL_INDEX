<br/> 

###### Top

- [MFC,ImGui](#mfcimgui)
- [2d이미지 프로세싱](#2d이미지-프로세싱)
- [GLM](#glm)
- [화면 좌표를 월드 좌표로 변환하기](#화면-좌표를-월드-좌표로-변환하기)
- [3d입체원그리기](#3d입체원그리기)

<br/>
<br/>

***

# MFC,ImGui
  - MFC와 Dear ImGui 비교
    - ImGui는 실행 중인 프로그램의 상태를 확인하거나 값을 조절하는 개발용 GUI를 빠르게 만들 때 주로 사용

<br/>

```text
구분        MFC                              Dear ImGui
----------  -------------------------------  ----------------------------------
주된 용도   Windows 데스크톱 프로그램         게임·그래픽 프로그램의 개발 도구
UI 구성     창과 컨트롤 생성 후 이벤트 처리   매 프레임 코드로 UI 선언
화면 표시   Windows 컨트롤 중심              그래픽 렌더러로 UI를 그림
플랫폼      Windows                          여러 플랫폼 지원
```


###### [MFC,ImGui](#mfcimgui)
###### [Top](#top)

<br/>
<br/>

***

# 2d이미지 프로세싱
  - 이미지는 픽셀의 집합이며, 각 픽셀은 RGB 색상 값을 가진다
  - 이미지 처리는 이 값을 직접 바꾸거나 주변 픽셀과 섞어 새로운 이미지를 만드는 과정
    - 밝기 조절 : RGB 값에 일정 값을 더하거나 배율을 곱한다.
    - 블러 : 주변 픽셀의 색을 섞어 색상 변화와 경계를 부드럽게 만든다
    - 등등...

<br/>

<img width="648" height="691" alt="image" src="https://github.com/user-attachments/assets/58e74515-8d38-48b0-bdd4-657971640b55" />


###### [2d이미지 프로세싱](#2d이미지-프로세싱)
###### [Top](#top)

<br/>
<br/>

***

# GLM
  - GLM은 그래픽스에 필요한 벡터·행렬 계산을 쉽게 해주는 C++ 수학 라이브러리(OpenGL Mathematics)

<br/>

| 자료형 | 의미 | 사용 예 |
| --- | --- | --- |
| `glm::vec2` | `float` 숫자 2개 | 화면 좌표, 텍스처 좌표 |
| `glm::vec3` | `float` 숫자 3개 | 3차원 위치·방향, RGB 색상 |
| `glm::vec4` | `float` 숫자 4개 | 변환용 좌표, RGBA 색상 |
| `glm::mat4` | `float` 기반 4×4 행렬 | 이동·회전·크기·투영 변환 |
| `glm::dvec3` | `double` 숫자 3개 | 더 높은 정밀도가 필요한 계산 |

<br/>

  - 기본 계산들

<br/>

~~~c++
// 벡터 더하기
glm::vec3 a(1.0f, 2.0f, 3.0f);
glm::vec3 b(7.0f, 8.0f, 9.0f);
glm::vec3 v(3.0f, 4.0f, 0.0f);

glm::vec3 result = a + b;
// (1+7, 2+8, 3+9) → (8, 10, 12)

/////////////////////////

// 벡터 빼기
result = b - a;
// 같은 위치의 성분끼리 빼기
// (7-1, 8-2, 9-3) → (6, 6, 6)

/////////////////////////

// 벡터에 숫자 곱하기
result = a * 10.0f;
// 모든 성분에 10 곱하기
// (1×10, 2×10, 3×10) → (10, 20, 30)

/////////////////////////

// 벡터를 숫자로 나누기
result = a / 2.0f;
// 모든 성분을 2로 나누기
// (1÷2, 2÷2, 3÷2) → (0.5, 1, 1.5)

/////////////////////////

// 벡터의 길이
float vectorLength = glm::length(v);
// sqrt(3×3 + 4×4 + 0×0) → 5
// sqrt는 루트를 씌우는것

// 주의: v.length()는 성분의 개수
// v.length() → 3
// glm::length(v) → 5

/////////////////////////

// 정규화: 방향을 유지하면서 길이를 1로 만들기
result = glm::normalize(v);
// v를 자신의 길이인 5로 나누기
// (3÷5, 4÷5, 0÷5) → (0.6, 0.8, 0)
// 주의: 영벡터 (0, 0, 0)는 정규화할 수 없음

/////////////////////////

// 내적: 같은 위치의 성분끼리 곱해서 모두 더하기(닷 프러덕트)
float dotResult = glm::dot(a, b);
// 1×7 + 2×8 + 3×9 → 50
// 결과는 숫자 하나
// 두 벡터의 방향 관계를 확인할 때 사용

// 두 벡터의 길이가 모두 1이면:
glm::vec3 unitA = glm::normalize(a);
glm::vec3 unitB = glm::normalize(b);
float cosAngle = glm::dot(unitA, unitB);
//  1.0 →   0도: 같은 방향
//  0.5 →  60도
//  0.0 →  90도: 서로 수직
// -0.5 → 120도
// -1.0 → 180도: 정반대 방향

/////////////////////////

// 외적: 두 벡터 모두에 수직인 벡터 구하기(크로스 프러덕트) -> 삼각형 넓이를 구함
result = glm::cross(a, b);
// (2×9 - 3×8, 3×7 - 1×9, 1×8 - 2×7)
// → (-6, 12, -6)
// 순서를 바꾸면 결과의 부호가 반대
// glm::cross(b, a) → (6, -12, 6)

// 외적하고 나누기 2를 하면 삼각형 넓이가 나옴
~~~

###### [GLM](#glm)
###### [Top](#top)

<br/>
<br/>

***

# 화면 좌표를 월드 좌표로 변환하기
  - 우리가 화면 좌표라고 하는것은 픽셀하나하나의 데이터이기 때문에 (0,0) 이 첫 시작이고 화면크기인 가로크기와 세로 크기의 -1 씩을 하면 (width-1, height-1)이 제일 하단 오른쪽이된다
  - 그것을 월드 좌표로 바꾼다는것은, 내가 원하는 가상의 좌표로 바꾼다는말이 된다

<br/>

  - 전체 가로 길이가 4, 세로 길이가 2인 좌표 범위로 바꾼다
  - 범위 :
    - x: 0 ~ 4
    - y: 0 ~ 2

<br/>

~~~c++
// width - 1을 4로 바꾸려면 다음 배율을 곱하면 된다 -> float xScale = 4.0f / (width - 1);
// 세로의 마지막 좌표인 height - 1을 2로 바꾸려면 다음 배율을 곱한다 -> float yScale = 2.0f / (height - 1);

// 따라서 각 픽셀의 좌표에 아래의 배율을 곱하면 월드 좌표인 (0,0)~(width-1,height-1)의 모든 좌표가 (0,0)~(4,2) 의 좌표에 놓인다
float x = 픽셀좌표.x * xScale;
float y = 픽셀좌표.y * yScale;

// 중앙 옮기기
// 위의 좌표의 (0,0)~(4,2)의 중앙점은 (2, 1)이다
// 화면 중앙이 (0, 0)이 되도록 좌표를 옮기는법
// 현재 좌표 범위의 중앙은 (2, 1) 이기 때문에, (0, 0)으로 표현하려면 모든 점의 x좌표에서 2, y좌표에서 1을 빼면 된다

// 따라서, 모든 픽셀에 다음과 같이 하면 월드 좌표계로 변환후 중앙을 0,0으로 옮긴 것이 된다
float x = 픽셀좌표.x * xScale - 2.0f;
float y = 픽셀좌표.y * yScale - 1.0f;
~~~ 


###### 화면 좌표를 월드 좌표로 변환하기](#화면-좌표를-월드-좌표로-변환하기)
###### [Top](#top)

<br/>
<br/>

***

# 3d입체원그리기
  - [DrawingSphere](https://github.com/BuMinKyoo/DrawingSphere)

<br/>

  - step1
    - 먼저 3d구를 표현하기 위해서는 ray라는 개념이 필요하다
    - 컴퓨터 화면은 평면이기 때문에 그것을 3d로 보이게 하기 위해서, 컴퓨터의 (0,0)~(width-1, height-1)의 모든 좌표에서 일직선으로 쏘는 직선이 있다고 생각을 하고, 그 각각의 선의 방정식에서, 우리가 보여야 하는 구를 정의해두고 구의 점의 방정식을 대입해서, 서로 교차하는, 즉 충돌하는 부분을 수학적으로 구하게 되면 3d차원에서의 점들을 구할수 있다

<br/>

~~~c++
// 월드 좌표계로 만든 값과, z값을 합쳐서
Start = TransformScreenToWorld(x, y, width, height)

// Ray를 만들고
Ray ray = new Ray
{
    Start = TransformScreenToWorld(x, y, width, height),
    Direction = Vector3.UnitZ
};

// 그것을 IntersectRayCollision 함수에 넣고 충돌을 확인한다
// https://en.wikipedia.org/wiki/Line%E2%80%93sphere_intersection -> 직선과 구의 교차 방정식을 확인한다
~~~

<br/>

<img width="572" height="350" alt="image" src="https://github.com/user-attachments/assets/23c6c0e2-de66-4466-be63-c16df8f015da" />

<br/>

  - step2
    - Phong 조명을 추가 해서 빛이 들어오는 방향에 대한 3d모델 계산을 추가
    - Phong 조명은 구 표면에 빛이 어떻게 보일지 계산하는 모델이다

<br/>

  - Ambient 주변광 + Diffuse 확산 반사 + Specular 정반사 이렇게 3개를 더해야 구의 둥근 모양과 반짝이는 재질을 표현할 수 있다고 한다.
    - Ambient는 수학적으로 따로 구할건 없다 왜냐하면, 어두울때도 기본적으로 보이는 색이니까 입혀주기만 하면되고
  - Diffuse는 광원의 점을 알고 있으면 -> 충돌 포인트와 광원의 점을 빼고 정규화 한후 -> 정규화한 구원점에서 충돌포인트와 정규화한 충돌포인트에서 광원까지의 백터를 닷프로덕트해서 얼마나 비슷한 방향을 가고 있는지 확인하는 것으로 값을 구한다

<br/>

~~~c++
const vec3 dirToLight = glm::normalize(light.pos - hit.point);
const float diff = glm::max(glm::dot(hit.normal, dirToLight), 0.0f);
~~~

<br/>

  - Specular 는 가장 구하기 어려운데, Specular는 충돌 포인트에서 광원으로 향하는 방향과 표면의 법선을 이용해 → 빛이 표면에 부딪힌 뒤 반사되어 나가는 방향을 구하고 → 그 반사 방향과 충돌 포인트에서 관찰자로 향하는 방향(-ray.dir)을 닷프로덕트해서 얼마나 같은 방향인지 확인한 후 → 음수는 0으로 처리하고 → alpha만큼 거듭제곱해서 반짝임의 값을 구한다

<br/>

~~~c++
https://en.wikipedia.org/wiki/Phong_reflection_model -> Phong_reflection설명(Ambient+Diffuse+Specular = Phong Reflection)

const vec3 reflectDir = 2.0f * dot(hit.normal, dirToLight) * hit.normal - dirToLight;
// 하단의 사진을 봤을때 reflectDir의 값은 "충돌포인트 -> 광원 의 반대점" 의 부분이 되고

const float specular = glm::pow(glm::max(glm::dot(-ray.dir, reflectDir), 0.0f), sphere->alpha);
// 를 해서 결과값을 구한다
~~~

<img width="627" height="460" alt="image" src="https://github.com/user-attachments/assets/d8d3cef7-8d66-4613-8b32-572306f3e3ce" />

<br/>

<img width="570" height="346" alt="image" src="https://github.com/user-attachments/assets/9cdbd421-f63e-4845-99ff-69db61876f9c" />

<br/>

  - step3
    - Orthographic projection (정투영) vs perspective projection (원근투영)
    - step2까지는 정투영으로써, z축이 모두 똑같은 위치에서 출발해서 원근법이 적용되지 않았음, 그러나 step3은 원근투영을 사용함
    - Ray를 만들때, Direction을 달라지게 만듬
   
  <br/>

~~~c++
if (UsePerspective)
{
    // 눈은 고정되어 있지만 픽셀 위치가 달라지므로 방향도 달라집니다.
    Vector3 eyeToPixel = pixelPosWorld - EyePosition;
    rayDirection = Vector3.Normalize(eyeToPixel);
}
~~~

<br/>

<img width="571" height="350" alt="image" src="https://github.com/user-attachments/assets/2994092e-d3c3-4c1d-8cfe-87f503a24470" />

<br/>

  - step4
    - 구에 이어 삼각형을 추가한다.
    - 삼각형은 세 꼭짓점 v0, v1, v2로 정의하고, 이 점들의 위치에 따라 크기와 방향이 결정된다
    - 삼각형의 두 변을 외적해서 두변에 수직인 벡터를 구한다 -> 그다음 Ray와 평면의 교점을 구해야 하는데(Ray 위의 점은 orig + t * dir로 표현가능하다), 평면의 방정식에 대입해서 t를 구하게 되면 그 숫자를 이용해서 현재 삼각형이 놓인 평면 위의 점을 구할수 있게 된다. -> 이 점은 삼각형 안에 있을수도 있고, 삼각형 바깥에 있을수도 있는 같은 평면위의 한점이기 때문에 삼각형 위에 있는지 바깥에 있는지를 찾아야 한다 -> 이 평면의 점을 point라고 했을때 -> point와 원래 삼각형의 각 변을 연결해서 작은 삼각형 세 개를 만든다 -> 일정한 꼭짓점 순서로 외적해서 작은 삼각형들의 법선을 구한다 -> point가 내부에 있으면 세 법선이 모두 원래 삼각형의 법선과 같은 방향이고, 외부에 있으면 적어도 하나가 반대 방향이 된다 -> 따라서 각 작은 법선과 원래 삼각형의 법선을 내적해서, 하나라도 음수가 나오면 삼각형 바깥의 점으로 판단한다.

<br/>

<img width="572" height="353" alt="image" src="https://github.com/user-attachments/assets/2eefc765-2467-4566-95a4-bd3e1113403b" />

<br/>

  - step5
    - 그림자 만들기, 그림자를 만드는 것은 충돌한 지점에서 다시한번더 광원으로 ray를 발사시켜서, 그곳에 닿으면 그림자를 안만들고, 그곳에 닿지 못하면(즉 다른 것과 다시 충돌하면)그림자를 만들면 된다

<br/>

<img width="572" height="348" alt="image" src="https://github.com/user-attachments/assets/a44f97de-955f-462e-8891-3a69fc1025b4" />

<br/>

  - step5
    - Supersampling(슈퍼샘플링)을 추가해서 구의 윤곽이나 그림자 경계에서 보이는 계단 현상을 줄인다
    - 이전에는 픽셀 하나에서 Ray를 한 번 쏘고, 그 결과를 해당 픽셀의 색으로 사용했다.
    - 이번에는 픽셀이 차지하는 영역을 2×2로 나눈다 → 네 작은 영역의 중심에서 각각 Ray를 쏜다 → 각 Ray의 충돌과 조명 계산으로 색을 구한다 → 네 색을 더하고 4로 나눈 평균을 원래 픽셀 하나의 색으로 사용한다.
    - 구의 경계에서는 어떤 Ray는 구에 충돌하고, 다른 Ray는 배경으로 지나간다 → 구의 색과 배경색이 평균에 함께 반영된다 → 경계에 중간색이 들어가면서 계단처럼 끊겨 보이는 현상이 줄어든다.

###### [3d입체원그리기](#3d입체원그리기)
###### [Top](#top)
















