<br/>

###### Top

- [Computer Graphics 기초이론](#computer-graphics-기초이론)
- [Computer Vision 기초이론](#computer-vision-기초이론)
- [가우시안 함수](#가우시안-함수)
- [미분 가능한 렌더링](#미분-가능한-렌더링)
- [렌더링 가속(바운딩 박스)](#렌더링-가속바운딩-박스)
- [가우시안 밀도 조절 (분할,복제,제거)](#가우시안-밀도-조절-분할복제제거)
- [기저 함수와 푸리에 분석, 파동의 중첩에서 이미지 복원까지](#기저-함수와-푸리에-분석-파동의-중첩에서-이미지-복원까지)
- [구면 조화 함수](#구면-조화-함수)
- [EWA스플래팅](#ewa스플래팅)
- [렌더링 파이프라인,알파 합성과 타일 기반 래스터화](#렌더링-파이프라인알파-합성과-타일-기반-래스터화)

 
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
// 이동행렬은 아래와 같다
    ⎡ 1  0  0  5 ⎤
T = ⎢ 0  1  0  3 ⎥
    ⎢ 0  0  1  2 ⎥
    ⎣ 0  0  0  1 ⎦

// 좌표 곱하기 예시
⎡ 1  0  0  5 ⎤   ⎡ x ⎤   ⎡ x + 5w ⎤
⎢ 0  1  0  3 ⎥ × ⎢ y ⎥ = ⎢ y + 3w ⎥
⎢ 0  0  1  2 ⎥   ⎢ z ⎥   ⎢ z + 2w ⎥
⎣ 0  0  0  1 ⎦   ⎣ w ⎦   ⎣    w   ⎦


// 회전행렬은 아래와 같다
// 여기는 전부다 오른손 좌표계 사용시의 행렬이라는것을 기억하기
     ⎡ c  -s  0  0 ⎤
Rz = ⎢ s   c  0  0 ⎥
     ⎢ 0   0  1  0 ⎥
     ⎣ 0   0  0  1 ⎦

// 좌표 곱하기 예시
⎡ c  -s  0  0 ⎤   ⎡ x ⎤   ⎡ cx - sy ⎤
⎢ s   c  0  0 ⎥ × ⎢ y ⎥ = ⎢ sx + cy ⎥
⎢ 0   0  1  0 ⎥   ⎢ z ⎥   ⎢    z    ⎥
⎣ 0   0  0  1 ⎦   ⎣ w ⎦   ⎣    w    ⎦

- cosθ = 가로 / 빗변  →  가로 = 빗변 · cosθ
- sinθ = 세로 / 빗변  →  세로 = 빗변 · sinθ
- 빗변이 1이면: 가로 = cosθ, 세로 = sinθ

[ A  B ] [ x ] = [ Ax + By ]  ← 이동된 x좌표 (x')
[ C  D ] [ y ]   [ Cx + Dy ]  ← 이동된 y좌표 (y')

이동된 x좌표 (Ax + By) 구하기
- Ax: x값에 곱해지므로, 가로변(1, 0)이 움직여서 만든 새로운 '가로' 성분
  → 빗변이 1일 때 가로는 cosθ이므로: A = cosθ (Ax = x·cosθ)

- By: y값에 곱해지므로, 세로변(0, 1)이 움직여서 만든 새로운 '가로' 성분
  → 세로변이 기울어지면서 생긴 가로는 sinθ인데, 왼쪽(-) 방향으로 움직이므로: B = -sinθ (By = -y·sinθ)

이동된 y좌표 (Cx + Dy) 구하기
- Cx: x값에 곱해지므로, 가로변(1, 0)이 움직여서 만든 새로운 '세로' 성분
  → 가로변이 들려 올라가면서 생긴 세로는 sinθ이므로: C = sinθ (Cx = x·sinθ)

- Dy: y값에 곱해지므로, 세로변(0, 1)이 움직여서 만든 새로운 '세로' 성분
  → 세로변이 기울어진 후 남은 세로는 cosθ이므로: D = cosθ (Dy = y·cosθ)


// 크기 조절 행렬
    ⎡ sx   0   0  0 ⎤
S = ⎢  0  sy   0  0 ⎥
    ⎢  0   0  sz  0 ⎥
    ⎣  0   0   0  1 ⎦

// 좌표 곱하기 예시
⎡ sx   0   0  0 ⎤   ⎡ x ⎤   ⎡ sx × x ⎤
⎢  0  sy   0  0 ⎥ × ⎢ y ⎥ = ⎢ sy × y ⎥
⎢  0   0  sz  0 ⎥   ⎢ z ⎥   ⎢ sz × z ⎥
⎣  0   0   0  1 ⎦   ⎣ w ⎦   ⎣    w   ⎦


// 이동,회전,크기조절을 동시에
// Z축을 중심으로 θ만큼 회전
// 크기 조절은 (2, 3, 1)배, 이동은 (5, 3, 2)
    ⎡ 2cosθ  -3sinθ  0  5 ⎤
M = ⎢ 2sinθ   3cosθ  0  3 ⎥
    ⎢   0       0    1  2 ⎥
    ⎣   0       0    0  1 ⎦
~~~

<br/>

  - 좌표계와 투영

<br/>

~~~text
카메라 위치: (0, 0, 5)
물체의 한 점: (2, 1, 0)

// 카메라와 월드의 축 방향이 같을 때
카메라 좌표 = 월드 좌표 - 카메라 위치
(2, 1, 0) - (0, 0, 5)
= (2, 1, -5)

    ⎡ 1  0  0   0 ⎤
V = ⎢ 0  1  0   0 ⎥
    ⎢ 0  0  1  -5 ⎥
    ⎣ 0  0  0   1 ⎦

// 월드 좌표 → 카메라 좌표
⎡ 1  0  0   0 ⎤   ⎡ 2 ⎤   ⎡  2 ⎤
⎢ 0  1  0   0 ⎥ × ⎢ 1 ⎥ = ⎢  1 ⎥
⎢ 0  0  1  -5 ⎥   ⎢ 0 ⎥   ⎢ -5 ⎥
⎣ 0  0  0   1 ⎦   ⎣ 1 ⎦   ⎣  1 ⎦

// 단순하게 한마디로 "카메라가 왼쪽으로 1 가면 카메라 입장에서는 물체가 오른쪽으로 1더 멀어짐"

// 회전에서는 카메라가 시계방향으로 회전하면 물체가 반시계방향으로 돌아가는것이됨
// 카메라의 위치·회전을 나타내는 행렬의 역행렬을 물체의 월드 좌표에 곱하면, 카메라 기준으로 표현한 물체의 3D 좌표가 나옴
~~~

<br/>

  - 원근투영행렬
    - 멀리 있는 물체는 작게 보이고 가까이 있는 물체는 크게 보이도록 좌표를 줄여주는 계산

<br/>

~~~text
// 행렬이 이렇게 된다고함, 따로 깊이 보지는 않고 이정도만으로 넘어가자!
⎡ k/a   0   0   0 ⎤   ⎡ x ⎤   ⎡ (k/a)·x ⎤  ← 1행: 가로 위치
⎢  0    k   0   0 ⎥ × ⎢ y ⎥ = ⎢   k·y   ⎥  ← 2행: 전봇대 높이(y)에 줌(k)만 곱함
⎢  0    0   A   B ⎥   ⎢ z ⎥   ⎢  A·z+B  ⎥  ← 3행: Z버퍼(앞뒤 판정용, 크기는 무관)
⎣  0    0  -1   0 ⎦   ⎣ 1 ⎦   ⎣   -z    ⎦  ← 4행: w 자리에 거리(-z)를 복사해 둠!
~~~

<br/>

  - 삼각형 레스터화
    - 무게중심 좌표(Barycentric Coordinates) 를사용한다
    - 삼각형의 꼭짓점을 A, B, C라고 하면, 검사할 점 P를 세 꼭짓점의 가중합으로 표현

<br/>

~~~text
삼각형의 꼭짓점:
A = (0, 0)
B = (4, 0)
C = (0, 4)

검사할 점:
P = (1, 1)

이때 수학적으로
① P = αA + βB + γC
② α + β + γ = 1
이렇게 2가지를 만족한다

(1, 1) = α(0, 0) + β(4, 0) + γ(0, 4)

α(0, 0) = (0, 0)
β(4, 0) = (4β, 0)
γ(0, 4) = (0, 4γ)

(1, 1) = (0, 0) + (4β, 0) + (0, 4γ)
       = (4β, 4γ)

x좌표 비교:
1 = 4β
β = 1/4 = 0.25

y좌표 비교:
1 = 4γ
γ = 1/4 = 0.25

α + β + γ = 1
α + 0.25 + 0.25 = 1
α + 0.5 = 1
α = 0.5

α = 0.5
β = 0.25
γ = 0.25
// 세 가중치가 모두 0 이상이므로 P는 삼각형 안에 있다

// 바깥 점 P = (3, 3) 의 계산
(3, 3) = (4β, 4γ)

β = 3/4 = 0.75
γ = 3/4 = 0.75

α = 1 - β - γ
  = 1 - 0.75 - 0.75
  = -0.5
~~~

<br/>

  - 타원레스터화

<br/>

~~~text
타원:
중심 = (0, 0)
가로 반지름 = 2
세로 반지름 = 1

검사할 점:
P = (1, 0.5)

// 이 타원은 반지름 1인 원을 가로로 두 배 늘려서 만든 것임. 따라서 가로를 절반으로 줄이면 다시 원이 된다

                  x좌표를 2로 나눔
타원 ───────────────────────────→ 반지름 1인 원

점 P도 같은 변환 적용:
(1, 0.5) ──────────────────────→ (0.5, 0.5)
                                      ↑
                              변환된 점 P'

// 이제 변환된 점 (0.5, 0.5)가 원 안에 있는지 검사하면된다

x'² + y'²
= 0.5² + 0.5²
= 0.25 + 0.25
= 0.5

0.5 ≤ 1이므로 원 안에 있음
→ 점 P가 타원 안에 있음

// 여기서 x좌표를 2로 나누는 작업이 바로 역변환
⎡ 0.5  0  0 ⎤   ⎡  1  ⎤   ⎡ 0.5 ⎤
⎢  0   1  0 ⎥ × ⎢ 0.5 ⎥ = ⎢ 0.5 ⎥
⎣  0   0  1 ⎦   ⎣  1  ⎦   ⎣  1  ⎦
~~~

###### [Computer Graphics 기초이론](#computer-graphics-기초이론)
###### [Top](#top)


<br/>
<br/>

# Computer Vision 기초이론
  - 렌즈 왜곡
    - 카메라 렌즈를 통과하면서 실제 직선이 휘어져 보이는 현상입니다. 이상적인 핀홀 카메라 모델과 실제 광학 렌즈 사이의 오차 때문에 발생
  - 특징 추출
    - 이미지 전체 픽셀을 그대로 쓰지 않고, 다른 시점이나 조명 변화에서도 잘 변하지 않고 식별하기 쉬운 핵심 지점(키포인트)과 묘사자(디스크립터)를 찾아내는 과정
  - 삼각 측량
    - 서로 다른 두 위치(또는 두 시점의 카메라)에서 바라본 동일한 3D 점의 2D 투영 좌표와 카메라 위치·자세를 알고 있을 때, 그 3D 점의 실제 공간 좌표 $(X, Y, Z)$를 계산하는 기법

<br/>

  - 위의 3가지에 대해서는 우선 깊이 보지 않고, 간단한 개념만 다루고 이해만 하고 넘어간다

###### [Computer Vision 기초이론](#computer-vision-기초이론)
###### [Top](#top)

<br/>
<br/>

# 가우시안 함수
  - 가우시안 함수란
    - 가우시안 함수는 중심에서 값이 가장 크고, 중심에서 멀어질수록 0에 가까워지는 함수다. 1차원에서는 종 모양이고, 2차원에서는 같은 값을 갖는 점들을 이으면 원이나 타원이 된다.
  - Gaussian Splatting에서 왜 사용하는가?
    - 가우시안을 쓰면 하나의 스플랫이 주변 픽셀에 얼마나 기여하는지 부드러운 가중치로 표현할 수 있다. 중심 주변에는 색과 불투명도가 강하게 반영되고, 가장자리로 갈수록 기여도가 작아진다.

<br/>

  - 최종계산식

~~~text
// 최종 계산식

화면의 픽셀 위치를 x, 스플랫의 중심을 mu라고 하면 해당 픽셀의 가중치는 다음과 같다.

d = x - mu
G(x) = exp(-0.5 * d^T * Sigma^(-1) * d)

d         중심에서 픽셀까지의 좌표 차이
d^T       d의 전치
Sigma^(-1)  공분산 행렬 Sigma의 역행렬
G(x)      픽셀 x에서 스플랫의 가중치
~~~

<br/>

  - 코드 계산

```python
# 픽셀 좌표에서 가우시안의 중심을 뺀다.
translated = np.stack([x_flat - mu_x, y_flat - mu_y], axis=1)

# 스케일 행렬 S와 회전 행렬 R로 공분산을 만든다.
Sigma = R @ S @ S.T @ R.T
Sigma_inv = np.linalg.inv(Sigma)

# 모든 픽셀의 지수를 계산하고 가중치로 변환한다.
power = -0.5 * np.einsum('ij,jk,ik->i', translated, Sigma_inv, translated)
gaussian_value = np.exp(power).reshape(x.shape)
```

###### [가우시안 함수](#가우시안-함수)
###### [Top](#top)

<br/>
<br/>

# 미분 가능한 렌더링
  - 현실 장면을 컴퓨터 그래픽으로 재현하려면, 사진을 보고 어떤 위치에 어떤 모양과 색이 있어야 그 이미지가 나오는지 추정해야 한다
  - PyTorch로 장면의 파라미터를 직접 조정하면서 목표 이미지에 가까워지도록 학습한다
  - 여러가지 도형 모두(원, 타원, 삼각형 등) 장면을 표현하는 데 쓸 수 있다. 어떤 요소를 쓰느냐에 따라 표현할 수 있는 모양, 학습에 쓸 수 있는 기울기, 렌더링 비용이 달라진다

<br/>

  - 순방향 렌더링
    - 위치와 색 같은 장면 설정을 받아 이미지를 그리는 과정
  - 역방향 렌더링
    - 목표 이미지가 주어졌을 때, 비슷한 이미지를 만드는 장면 설정을 찾는 과정
      - 1. 현재 설정으로 이미지를 그린다.
      - 2. 그린 이미지와 목표 이미지의 차이를 구한다.
      - 3. 차이가 줄어드는 방향으로 설정을 업데이트한다.

<br/>

  - 삼각형으로 삼각형 맞추기
    - 위치가 조금 틀린 흰 삼각형에서 시작.
    - 목표는 검은 배경 위에 그려진 RGB 삼각형.
    - 학습하는 값은 **꼭짓점 3개의 위치와 각 꼭짓점의 색**.
    - 목표 삼각형과, 학습하고 있는 삼각형을 mse로 해서 LOSS를 비교한다

<br/>

  - 타겟 삼각형 그리기

~~~python
import numpy as np
import matplotlib.pyplot as plt
import torch
from matplotlib.animation import FuncAnimation, FFMpegWriter
from IPython.display import Video

# Figure defaults (keeps visuals readable and consistent)
plt.rcParams["figure.dpi"] = 120
plt.rcParams["savefig.dpi"] = 120

def make_pixel_grid(H, W, device='cpu'):
    # Pixel centers in normalized device coords [-1, 1] with y pointing up
    xs = (torch.arange(W, device=device) + 0.5) / W * 2 - 1
    ys = (torch.arange(H, device=device) + 0.5) / H * 2 - 1
    Y, X = torch.meshgrid(ys, xs, indexing='ij')
    Y = torch.flip(Y, dims=[0])  # flip so first row is +1 (top) for nicer plotting consistency
    P = torch.stack([X, Y], dim=-1)  # (H, W, 2)
    return P

def edge_function(a, b, p):
    # Signed area (2D cross) of (b-a) x (p-a)
    return (b[..., 0] - a[..., 0]) * (p[..., 1] - a[..., 1]) - (b[..., 1] - a[..., 1]) * (p[..., 0] - a[..., 0])

def barycentric_weights(v0, v1, v2, p):
    # Works for any p; weights sum to 1 for points in the triangle plane
    area = edge_function(v0, v1, v2)
    # Avoid divide-by-zero (degenerate triangles)
    area = torch.where(torch.abs(area) < 1e-12, torch.tensor(1e-12, device=area.device), area)
    w0 = edge_function(v1, v2, p) / area
    w1 = edge_function(v2, v0, p) / area
    w2 = edge_function(v0, v1, p) / area
    return w0, w1, w2

def render_triangle_hard(H, W, verts, colors, background=(0.0, 0.0, 0.0)):
    """Hard-edge triangle rasterizer (non-smooth).
    verts: (3,2) in [-1,1] NDC; colors: (3,3) in [0,1].
    """
    device = verts.device
    P = make_pixel_grid(H, W, device=device)
    v0, v1, v2 = verts[0], verts[1], verts[2]
    # Ensure consistent orientation by using area sign for inside test
    area = edge_function(v0, v1, v2)
    s = 1.0 if area >= 0 else -1.0
    e0 = s * edge_function(v0, v1, P)
    e1 = s * edge_function(v1, v2, P)
    e2 = s * edge_function(v2, v0, P)
    inside = (e0 >= 0) & (e1 >= 0) & (e2 >= 0)
    w0, w1, w2 = barycentric_weights(v0, v1, v2, P)
    rgb = (w0[..., None] * colors[0] + w1[..., None] * colors[1] + w2[..., None] * colors[2])
    rgb = torch.clamp(rgb, 0.0, 1.0)
    img = torch.zeros((H, W, 3), device=device, dtype=verts.dtype)
    img[...] = torch.tensor(background, device=device, dtype=verts.dtype)
    img[inside] = rgb[inside]
    return img

def show_images(images, titles, figsize=None, vmin=0.0, vmax=1.0):
    n = len(images)
    if figsize is None:
        # Default: compact but readable; scales with number of panels
        figsize = (3.6 * n, 3.6)
    fig, axes = plt.subplots(1, n, figsize=figsize)
    if n == 1:
        axes = [axes]
    for ax, im, title in zip(axes, images, titles):
        # Convert to numpy for display if tensor
        if torch.is_tensor(im):
            im = im.detach().cpu().numpy()
        ax.imshow(im, vmin=vmin, vmax=vmax, interpolation="nearest")
        ax.set_title(title)
        ax.axis('off')
    plt.tight_layout()
    plt.show()

def show_image_grid(images, titles, cols=4, cell_size=3.2, vmin=0.0, vmax=1.0):
    n = len(images)
    cols = int(max(1, cols))
    rows = int(np.ceil(n / cols))
    fig, axes = plt.subplots(rows, cols, figsize=(cell_size * cols, cell_size * rows))
    axes = np.array(axes).reshape(rows, cols)
    for i in range(rows * cols):
        r, c = divmod(i, cols)
        ax = axes[r, c]
        if i < n:
            im = images[i]
            # Convert to numpy for display if tensor
            if torch.is_tensor(im):
                im = im.detach().cpu().numpy()
            ax.imshow(im, vmin=vmin, vmax=vmax, interpolation="nearest")
            ax.set_title(titles[i])
        ax.axis('off')
    plt.tight_layout()
    plt.show()

def diff_image(a, b):
    # pixel-wise absolute difference (RGB) and a grayscale magnitude view
    d = torch.abs(a - b)
    mag = torch.clamp(torch.norm(d, dim=-1, keepdim=True) / np.sqrt(3.0), 0.0, 1.0)
    return d, mag.repeat(1, 1, 3)

def save_training_video(frames, filename, fps=30, title="Training Progress"):
    """Save list of image frames as MP4 video."""
    if len(frames) == 0:
        print(f"No frames to save for {filename}")
        return
    
    fig, ax = plt.subplots(figsize=(6, 6))
    ax.set_title(title)
    ax.axis('off')
    
    # Initialize with first frame
    im_display = ax.imshow(frames[0], vmin=0.0, vmax=1.0, interpolation="nearest")
    text = ax.text(0.5, -0.05, f"Iteration: 0", transform=ax.transAxes, 
                   ha='center', fontsize=12)
    
    def update(frame_idx):
        im_display.set_array(frames[frame_idx])
        text.set_text(f"Iteration: {frame_idx}")
        return [im_display, text]
    
    anim = FuncAnimation(fig, update, frames=len(frames), interval=1000/fps, blit=True)
    
    # Save as MP4
    writer = FFMpegWriter(fps=fps, bitrate=1800)
    anim.save(filename, writer=writer)
    plt.close(fig)
    print(f"Video saved to {filename}")
~~~

<br/>

  - 삼각형 학습(아마 잘 안됨)

~~~python
# Optimization with PyTorch (hard-edge version)
# Create trainable parameters
verts_hard = verts_init.clone().detach().requires_grad_(True) # True/False 바꿔보세요
colors_hard = colors_init.clone().detach().requires_grad_(True)


# Use Adam optimizer for simpler, more stable training
optimizer_hard = torch.optim.Adam([verts_hard, colors_hard], lr=0.01)

history_hard = []
snapshots_hard = []  # list of (iter, verts, colors)
snapshot_schedule_hard = {0, 1, 2, 5, 10, 20, 40, 80, 100, 140, 160, 200}

# Video frames - capture every N iterations to keep video size reasonable
video_frames_hard = []
video_sample_rate = 1  # capture every 1 iterations

# Snapshot initial state
snapshots_hard.append((0, verts_hard.detach().clone(), colors_hard.detach().clone()))
# Add initial frame for video
initial_img = render_triangle_hard(H, W, verts_hard, colors_hard).detach().cpu().numpy()
video_frames_hard.append(initial_img)

max_iters_hard = 200
for it in range(max_iters_hard):
    optimizer_hard.zero_grad()
    
    # Clamp values to valid ranges (vertices and colors)
    with torch.no_grad():
        verts_hard.clamp_(-1.2, 1.2)
        colors_hard.clamp_(0.0, 1.0)
    
    # Render and compute loss
    img = render_triangle_hard(H, W, verts_hard, colors_hard)
    loss = torch.mean((img - img_target) ** 2)
    
    # Backward pass (NOTE: hard edges have zero/undefined gradients at discontinuities)
    loss.backward()
    optimizer_hard.step()
    
    # Record history
    history_hard.append(loss.item())
    
    # Take snapshots
    if (it + 1) in snapshot_schedule_hard:
        snapshots_hard.append((it + 1, verts_hard.detach().clone(), colors_hard.detach().clone()))
    
    # Capture video frames
    if (it + 1) % video_sample_rate == 0:
        frame = render_triangle_hard(H, W, verts_hard, colors_hard).detach().cpu().numpy()
        video_frames_hard.append(frame)

# Add final frame
final_frame = render_triangle_hard(H, W, verts_hard, colors_hard).detach().cpu().numpy()
video_frames_hard.append(final_frame)

# Save video
print(f"Creating video with {len(video_frames_hard)} frames...")
save_training_video(video_frames_hard, "hard_edge_training.mp4", fps=30, 
                   title="Hard-Edge Triangle Optimization")

# Display video
Video("hard_edge_training.mp4", embed=True, width=600)

# Final render
img_trained_hard = render_triangle_hard(H, W, verts_hard, colors_hard)

# Required: pixel-wise difference between target and trained
d_rgb_t, d_mag_t = diff_image(img_target, img_trained_hard)
show_images(
    [img_target, img_init_hard, img_trained_hard, d_mag_t],
    ["Target", "Initial", "Trained (hard)", "|Target - Trained|"],
    figsize=(16, 4)
 )

# Intermediate results during training (hard edges often jump / stall)
seen = set()
snapshots_hard_unique = []
for it, v, c in snapshots_hard:
    if it not in seen:
        snapshots_hard_unique.append((it, v, c))
        seen.add(it)
snapshots_hard_unique.sort(key=lambda t: t[0])

snap_imgs = []
snap_titles = []
for it, v, c in snapshots_hard_unique:
    snap_imgs.append(render_triangle_hard(H, W, v, c))
    snap_titles.append(f"iter {it}")
show_image_grid(snap_imgs, snap_titles, cols=4, cell_size=3.0)

plt.figure(figsize=(6, 3))
plt.plot(history_hard)
plt.title("Hard-edge optimization loss (often jagged / stuck)")
plt.xlabel("Iteration")
plt.ylabel("MSE")
plt.grid(True)
plt.show()

print("Hard-edge final loss:", history_hard[-1])
print("Hard-edge verts:\n", verts_hard.detach().numpy())
print("Hard-edge colors:\n", colors_hard.detach().numpy())
~~~

<br/>

  - 가우시안 스플랫으로 맞추기
    - 스플랫 하나는 중심에서 영향이 가장 크고, 멀어질수록 영향이 부드럽게 줄어드는 타원형 요소
    - 스플랫마다 다음 값을 학습
      - 중심 위치 `mu`
      - 두 방향의 크기 `sigma_x`, `sigma_y`
      - 회전 각도
      - 불투명도
      - RGB 색

<br/>

  - 가우시안 스플랫 그리기

~~~python
import numpy as np
import matplotlib.pyplot as plt
import torch
from matplotlib.animation import FuncAnimation, FFMpegWriter
from IPython.display import Video

# Figure defaults
plt.rcParams["figure.dpi"] = 120
plt.rcParams["savefig.dpi"] = 120

def make_pixel_grid(H, W, device='cpu'):
    """Create pixel centers in normalized device coords [-1, 1] with y pointing up"""
    xs = (torch.arange(W, device=device) + 0.5) / W * 2 - 1
    ys = (torch.arange(H, device=device) + 0.5) / H * 2 - 1
    Y, X = torch.meshgrid(ys, xs, indexing='ij')
    Y = torch.flip(Y, dims=[0])
    P = torch.stack([X, Y], dim=-1)  # (H, W, 2)
    return P

def render_gaussians_2d(H, W, mus, sigmas, thetas, opacities, rgbs):
    """Render multiple 2D Gaussian splats using full covariance matrices.
    
    Args:
        H, W: image dimensions
        mus: (N, 2) center positions μ
        sigmas: (N, 2) scale parameters σ
        thetas: (N,) rotation angles θ in radians
        opacities: (N,) opacity scalars α in [0, 1]
        rgbs: (N, 3) RGB color vectors
    
    Returns:
        img: (H, W, 3) rendered image
    
    Full covariance formulation: I(p) = Σ(i=1 to N) α_i * rgb_i * f_i(p; μ_i, Σ_i)
    where f_i uses 2×2 covariance matrix with rotation.
    """
    device = mus.device
    P = make_pixel_grid(H, W, device=device)  # (H, W, 2)
    
    img = torch.zeros((H, W, 3), device=device, dtype=mus.dtype)
        
    # Additive blending: sum all Gaussian contributions
    for i in range(len(mus)):
        mu = mus[i]
        sigma = sigmas[i]
        theta = thetas[i]
        opacity = opacities[i]
        rgb = rgbs[i]
        
        # Build inverse covariance matrix inline (formerly build_sigma_inv)
        cos_theta = torch.cos(theta)
        sin_theta = torch.sin(theta)
        rotation = torch.stack((
            torch.stack((cos_theta, -sin_theta)),
            torch.stack((sin_theta, cos_theta)),
        ))
        inv_scale_sq = sigma.reciprocal().square()
        sigma_inv = rotation @ torch.diag(inv_scale_sq) @ rotation.T
        
        # Compute Gaussian function f_i(p) with full covariance
        offsets = P - mu
        power = -0.5 * torch.einsum(
            "...i,ij,...j->...", offsets, sigma_inv, offsets
        )
        gaussian = torch.exp(power)

        # Accumulate: I(p) += α_i * rgb_i * f_i(p)
        img = img + opacity * gaussian[..., None] * rgb
    
    img = torch.clamp(img, 0.0, 1.0)
    return img

def show_images(images, titles, figsize=None, vmin=0.0, vmax=1.0):
    n = len(images)
    if figsize is None:
        figsize = (3.6 * n, 3.6)
    fig, axes = plt.subplots(1, n, figsize=figsize)
    if n == 1:
        axes = [axes]
    for ax, im, title in zip(axes, images, titles):
        if torch.is_tensor(im):
            im = im.detach().cpu().numpy()
        ax.imshow(im, vmin=vmin, vmax=vmax, interpolation="nearest")
        ax.set_title(title)
        ax.axis('off')
    plt.tight_layout()
    plt.show()

def show_image_grid(images, titles, cols=4, cell_size=3.2, vmin=0.0, vmax=1.0):
    n = len(images)
    cols = int(max(1, cols))
    rows = int(np.ceil(n / cols))
    fig, axes = plt.subplots(rows, cols, figsize=(cell_size * cols, cell_size * rows))
    axes = np.array(axes).reshape(rows, cols)
    for i in range(rows * cols):
        r, c = divmod(i, cols)
        ax = axes[r, c]
        if i < n:
            im = images[i]
            if torch.is_tensor(im):
                im = im.detach().cpu().numpy()
            ax.imshow(im, vmin=vmin, vmax=vmax, interpolation="nearest")
            ax.set_title(titles[i])
        ax.axis('off')
    plt.tight_layout()
    plt.show()

def diff_image(a, b):
    """Compute pixel-wise absolute difference"""
    d = torch.abs(a - b)
    mag = torch.clamp(torch.norm(d, dim=-1, keepdim=True) / np.sqrt(3.0), 0.0, 1.0)
    return d, mag.repeat(1, 1, 3)

def save_training_video(frames, filename, fps=30, title="Training Progress"):
    """Save list of image frames as MP4 video."""
    if len(frames) == 0:
        print(f"No frames to save for {filename}")
        return
    
    fig, ax = plt.subplots(figsize=(6, 6))
    ax.set_title(title)
    ax.axis('off')
    
    im_display = ax.imshow(frames[0], vmin=0.0, vmax=1.0, interpolation="nearest")
    text = ax.text(0.5, -0.05, f"Iteration: 0", transform=ax.transAxes, 
                   ha='center', fontsize=12)
    
    def update(frame_idx):
        im_display.set_array(frames[frame_idx])
        text.set_text(f"Iteration: {frame_idx}")
        return [im_display, text]
    
    anim = FuncAnimation(fig, update, frames=len(frames), interval=1000/fps, blit=True)
    writer = FFMpegWriter(fps=fps, bitrate=1800)
    anim.save(filename, writer=writer)

    plt.close(fig)    
    print(f"Video saved to {filename}")

def draw_gaussian_ellipses(ax, mus, sigmas, thetas, color='yellow', label='Gaussians', 
                          sigma_scale=3.0, show_centers=True, alpha=0.7, linewidth=2):
    """Draw nσ ellipse boundaries for Gaussian parameters.
    
    Args:
        ax: matplotlib axis to draw on
        mus: (N, 2) center positions μ (or (2,) for single Gaussian)
        sigmas: (N, 2) scale parameters σ (or (2,) for single Gaussian)
        thetas: (N,) rotation angles θ in radians (or scalar for single Gaussian)
        color: edge color for ellipses and center markers
        label: legend label (only applied to first element)
        sigma_scale: multiplier for ellipse size (default 3.0 for 3σ boundary)
        show_centers: whether to draw center markers
        alpha: transparency of ellipses
        linewidth: line width of ellipse boundaries
    
    The 3σ boundary represents where ~99% of the Gaussian's mass is contained,
    effectively showing the Gaussian's "support" in the image.
    """
    from matplotlib.patches import Ellipse
    
    # Convert to numpy if needed
    if torch.is_tensor(mus):
        mus = mus.detach().cpu().numpy()
    if torch.is_tensor(sigmas):
        sigmas = sigmas.detach().cpu().numpy()
    if torch.is_tensor(thetas):
        thetas = thetas.detach().cpu().numpy()
    
    # Handle single Gaussian (1, 2) or (2,) shape
    if mus.ndim == 2 and mus.shape[0] == 1:
        mus = mus[0]
        sigmas = sigmas[0]
        thetas = thetas[0:1]
    
    # Ensure arrays are 2D for iteration
    if mus.ndim == 1:
        mus = mus.reshape(1, -1)
        sigmas = sigmas.reshape(1, -1)
        thetas = np.atleast_1d(thetas)
    
    # Draw centers if requested
    if show_centers:
        ax.scatter(mus[:, 0], mus[:, 1], c=color, s=80, marker='x', 
                  linewidths=2, label=label if label else None, zorder=100)
    
    # Draw ellipses
    for i in range(len(mus)):
        ellipse = Ellipse(
            (mus[i, 0], mus[i, 1]),
            width=sigmas[i, 0] * sigma_scale,
            height=sigmas[i, 1] * sigma_scale,
            angle=np.degrees(thetas[i]),
            edgecolor=color,
            facecolor='none',
            linewidth=linewidth,
            alpha=alpha,
            label=label if (i == 0 and not show_centers) else None,
            zorder=99
        )
        ax.add_patch(ellipse)
~~~

<br/>

~~~python
# Scene setup
H, W = 96, 96

# Target: a single rotated Gaussian with purple color
# Use batched format (1, k) for consistency with render_gaussians_2d
target_mu = torch.tensor([[0.2, 0.1]], dtype=torch.float32)  # (1, 2)
target_sigma = torch.tensor([[0.35, 0.25]], dtype=torch.float32)  # (1, 2)
target_theta = torch.tensor([0.6], dtype=torch.float32)  # (1,) ~34 degrees rotation
target_opacity = torch.tensor([0.95], dtype=torch.float32)  # (1,) opacity
target_rgb = torch.tensor([[0.8, 0.3, 0.9]], dtype=torch.float32)  # (1, 3) Purple RGB

img_target_g = render_gaussians_2d(H, W, target_mu, target_sigma, target_theta, target_opacity, target_rgb)

# Visualize with and without ellipse boundary
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 5))

# Left: plain target image
ax1.imshow(img_target_g.detach().cpu().numpy(), interpolation="nearest")
ax1.set_title("Target Gaussian (rotated)")
ax1.axis('off')

# Right: target with ellipse boundary
ax2.imshow(img_target_g.detach().cpu().numpy(), extent=[-1, 1, -1, 1], origin='upper', interpolation="nearest")
draw_gaussian_ellipses(ax2, target_mu, target_sigma, target_theta, 
                       color='yellow', label='Center', alpha=0.9)
ax2.set_xlim(-1, 1)
ax2.set_ylim(-1, 1)
ax2.set_aspect('equal')
ax2.set_title('Target with Ellipse Boundary (1.5σ)')
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
~~~

  - 학습하기
    - 가우시안 스플릿 하나에서 하나로 맞추기

~~~python
# Optimization with PyTorch - now with separate opacity and RGB!
mu_param = init_mu.clone().detach().requires_grad_(True)
sigma_param = init_sigma.clone().detach().requires_grad_(True)
theta_param = init_theta.clone().detach().requires_grad_(True)
opacity_param = init_opacity.clone().detach().requires_grad_(True)
rgb_param = init_rgb.clone().detach().requires_grad_(True)

optimizer_g = torch.optim.Adam([mu_param, sigma_param, theta_param, opacity_param, rgb_param], lr=0.01)

history_g = []
snapshots_g = []
snapshot_schedule_g = {0, 1, 2, 5, 10, 20, 40, 60, 100, 150, 200, 250}

# Video frames
video_frames_g = []
video_sample_rate = 2

# Snapshot initial state
snapshots_g.append((0, mu_param.detach().clone(), sigma_param.detach().clone(),
                    theta_param.detach().clone(), opacity_param.detach().clone(), rgb_param.detach().clone()))
video_frames_g.append(img_init_g.detach().cpu().numpy())

max_iters_g = 250
for it in range(max_iters_g):
    optimizer_g.zero_grad()
    
    # Clamp parameters to valid ranges
    with torch.no_grad():
        mu_param.clamp_(-1.0, 1.0)
        sigma_param.clamp_(0.01, 2.0)
        opacity_param.clamp_(0.0, 1.0)
        rgb_param.clamp_(0.0, 1.0)
        # No clamping for theta - let it rotate freely
    
    # Render and compute loss
    img = render_gaussians_2d(H, W, mu_param, sigma_param, theta_param, opacity_param, rgb_param)
    loss = torch.mean((img - img_target_g) ** 2)
    
    # Backward pass
    loss.backward()
    optimizer_g.step()
    
    # Record history
    history_g.append(loss.item())
    
    # Take snapshots
    if (it + 1) in snapshot_schedule_g:
        snapshots_g.append((it + 1, mu_param.detach().clone(), sigma_param.detach().clone(),
                           theta_param.detach().clone(), opacity_param.detach().clone(), rgb_param.detach().clone()))
    
    # Capture video frames
    if (it + 1) % video_sample_rate == 0:
        frame = render_gaussians_2d(H, W, mu_param, sigma_param, theta_param, opacity_param, rgb_param).detach().cpu().numpy()
        video_frames_g.append(frame)

# Add final frame
final_frame = render_gaussians_2d(H, W, mu_param, sigma_param, theta_param, opacity_param, rgb_param).detach().cpu().numpy()
video_frames_g.append(final_frame)

print(f"Final loss: {history_g[-1]:.6f}")
print(f"Final mu: {mu_param.detach().numpy()}")
print(f"Final sigma: {sigma_param.detach().numpy()}")
print(f"Final theta: {theta_param.detach().numpy()[0]:.4f} rad ({np.degrees(theta_param.detach().numpy()[0]):.1f}°)")
print(f"Final opacity: {opacity_param.detach().numpy()}")
print(f"Final RGB: {rgb_param.detach().numpy()}")
~~~

<br/>

  - 삼각형을 스플릿으로 맞추는 학습하기

~~~python
// 삼각형 그리기
# Helper function for triangle rendering (from 0202)
def edge_function(a, b, p):
    return (b[..., 0] - a[..., 0]) * (p[..., 1] - a[..., 1]) - (b[..., 1] - a[..., 1]) * (p[..., 0] - a[..., 0])

def barycentric_weights(v0, v1, v2, p):
    area = edge_function(v0, v1, v2)
    area = torch.where(torch.abs(area) < 1e-12, torch.tensor(1e-12, device=area.device), area)
    w0 = edge_function(v1, v2, p) / area
    w1 = edge_function(v2, v0, p) / area
    w2 = edge_function(v0, v1, p) / area
    return w0, w1, w2

def render_triangle_hard(H, W, verts, colors, background=(0.0, 0.0, 0.0)):
    """Hard-edge triangle rasterizer."""
    device = verts.device
    P = make_pixel_grid(H, W, device=device)
    v0, v1, v2 = verts[0], verts[1], verts[2]
    area = edge_function(v0, v1, v2)
    s = 1.0 if area >= 0 else -1.0
    e0 = s * edge_function(v0, v1, P)
    e1 = s * edge_function(v1, v2, P)
    e2 = s * edge_function(v2, v0, P)
    inside = (e0 >= 0) & (e1 >= 0) & (e2 >= 0)
    w0, w1, w2 = barycentric_weights(v0, v1, v2, P)
    rgb = (w0[..., None] * colors[0] + w1[..., None] * colors[1] + w2[..., None] * colors[2])
    rgb = torch.clamp(rgb, 0.0, 1.0)
    img = torch.zeros((H, W, 3), device=device, dtype=verts.dtype)
    img[...] = torch.tensor(background, device=device, dtype=verts.dtype)
    img[inside] = rgb[inside]
    return img




// 삼각형 표출
# Create target triangle
verts_target = torch.tensor([
    [-0.65, -0.55],
    [ 0.90, -0.20],
    [-0.05,  0.75],
], dtype=torch.float32)

colors_target = torch.tensor([
    [1.0, 0.0, 0.0],  # Red
    [0.0, 1.0, 0.0],  # Green
    [0.0, 0.0, 1.0],  # Blue
], dtype=torch.float32)

img_target_tri = render_triangle_hard(H, W, verts_target, colors_target)
show_images([img_target_tri], ["Target Triangle (RGB)"])





// 가우시안 24개
# Initialize multiple random Gaussians to fit the triangle
num_gaussians = 24  # Use multiple Gaussians to approximate the triangle

# Random initialization
torch.manual_seed(42)
init_mus = torch.randn(num_gaussians, 2) * 0.5
init_sigmas = torch.rand(num_gaussians, 2) * 0.2 + 0.1  # Random sizes
init_thetas = torch.rand(num_gaussians) * 2 * np.pi  # Random rotations [0, 2π]
init_opacities = torch.rand(num_gaussians) * 0.5 + 0.3  # Random opacities [0.3, 0.8]
init_rgbs = torch.rand(num_gaussians, 3) * 0.6 + 0.2  # Random RGB colors

img_init_tri = render_gaussians_2d(H, W, init_mus, init_sigmas, init_thetas, init_opacities, init_rgbs)
d_rgb_tri, d_mag_tri = diff_image(img_init_tri, img_target_tri)
show_images(
    [img_target_tri, img_init_tri, d_mag_tri],
    ["Target Triangle", f"Initial ({num_gaussians} Gaussians)", "|Target - Initial|"],
    figsize=(12, 4)
)





// 학습하기
# Optimize multiple Gaussians to fit the triangle - now with rotation!
mus_param = init_mus.clone().detach().requires_grad_(True)
sigmas_param = init_sigmas.clone().detach().requires_grad_(True)
thetas_param = init_thetas.clone().detach().requires_grad_(True)
opacities_param = init_opacities.clone().detach().requires_grad_(True)
rgbs_param = init_rgbs.clone().detach().requires_grad_(True)

optimizer_tri = torch.optim.Adam([mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param], lr=0.01)

history_tri = []
snapshots_tri = []
snapshot_schedule_tri = {0, 1, 2, 5, 10, 20, 40, 80, 120, 160, 200, 250, 300, 350}

# Video frames
video_frames_tri = []
video_sample_rate = 3

# Snapshot initial state
snapshots_tri.append((0, mus_param.detach().clone(), sigmas_param.detach().clone(),
                     thetas_param.detach().clone(), opacities_param.detach().clone(), rgbs_param.detach().clone()))
video_frames_tri.append(img_init_tri.detach().cpu().numpy())

max_iters_tri = 350
print(f"Optimizing {num_gaussians} Gaussians (with rotation) to fit triangle...")
for it in range(max_iters_tri):
    optimizer_tri.zero_grad()
    
    # Clamp parameters to valid ranges
    with torch.no_grad():
        mus_param.clamp_(-1.5, 1.5)
        sigmas_param.clamp_(0.01, 1.0)
        opacities_param.clamp_(0.0, 1.0)
        rgbs_param.clamp_(0.0, 1.0)
        # No clamping for thetas - let them rotate freely
    
    # Render all Gaussians and compute loss
    img = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param)
    loss = torch.mean((img - img_target_tri) ** 2)
    
    # Backward pass
    loss.backward()
    optimizer_tri.step()
    
    # Record history
    history_tri.append(loss.item())
    
    # Take snapshots
    if (it + 1) in snapshot_schedule_tri:
        snapshots_tri.append((it + 1, mus_param.detach().clone(), sigmas_param.detach().clone(),
                             thetas_param.detach().clone(), opacities_param.detach().clone(), rgbs_param.detach().clone()))
    
    # Capture video frames
    if (it + 1) % video_sample_rate == 0:
        frame = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param).detach().cpu().numpy()
        video_frames_tri.append(frame)
    
    if (it + 1) % 50 == 0:
        print(f"Iteration {it+1}/{max_iters_tri}, Loss: {loss.item():.6f}")

# Add final frame
final_frame = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param).detach().cpu().numpy()
video_frames_tri.append(final_frame)


print(f"Final loss: {history_tri[-1]:.6f}")
print(f"Trained {num_gaussians} Gaussians to approximate triangle")
~~~

###### [미분 가능한 렌더링](#미분-가능한-렌더링)
###### [Top](#top)

<br/>
<br/>

# 렌더링 가속(바운딩 박스)
  - 컴퓨터 그래픽스에서는 속도를 빠르게 하니 위해서 렌더링을 할때 렌더링이 필요한 부분만 진행 함으로써 속도를 높인다
  - 공분산을 통해서 바운딩 박스의 크기를 어떻게 할지 결정할 수 있다
    - 공분산은 두 값이 평균을 기준으로 어느 방향으로 함께 변하는지 나타내는 값, 대각선 값은 가로·세로로 얼마나 퍼지는지, 대각선 밖의 값은 두 축이 어떻게 함께 변하는지를 담는다. 그래서 바운딩 박스를 구할 때는 대각선 값에 제곱근을 씌워 화면 x, y 방향의 표준편차를 얻고, 각각 3을 곱해 3σ 박스의 반폭으로 사용한다

<br/>

~~~python
def render_gaussians_2d(H, W, mus, sigmas, thetas, opacities, rgbs, n_sigma=3.0):
    P = make_pixel_grid(H, W, device=mus.device)
    img = torch.zeros((H, W, 3), device=mus.device, dtype=mus.dtype)

    for i in range(len(mus)):
        mu = mus[i]
        sigma = torch.clamp(sigmas[i], min=1e-3)
        theta = thetas[i]
        opacity = opacities[i]
        rgb = rgbs[i]

        # Axis-aligned 3σ (default) box for the rotated ellipse to cull distant pixels
        cos_t, sin_t = torch.cos(theta), torch.sin(theta)
        bbox_half = n_sigma * sigma.max()
        lower, upper = mu - bbox_half, mu + bbox_half
        mask_bbox = ((P >= lower) & (P <= upper)).all(dim=-1)
        if not mask_bbox.any():
            continue

        # Gaussian evaluation only inside the bounding box
        R = torch.stack([torch.stack([cos_t, -sin_t]), torch.stack([sin_t, cos_t])])
        sigma_inv = R @ torch.diag(1.0 / (sigma ** 2)) @ R.T

        diff = P[mask_bbox] - mu
        exponent = torch.einsum("bi,ij,bj->b", diff, sigma_inv, diff)
        f_x = torch.exp(-0.5 * exponent)
        img[mask_bbox] = img[mask_bbox] + (opacity * rgb).view(1, 3) * f_x.unsqueeze(-1)

    return torch.clamp(img, 0.0, 1.0)
~~~

<br/>

  - 학습

~~~python
# Optimize multiple Gaussians to fit the triangle - now with rotation!
mus_param = init_mus.clone().detach().requires_grad_(True)
sigmas_param = init_sigmas.clone().detach().requires_grad_(True)
thetas_param = init_thetas.clone().detach().requires_grad_(True)
opacities_param = init_opacities.clone().detach().requires_grad_(True)
rgbs_param = init_rgbs.clone().detach().requires_grad_(True)

optimizer_tri = torch.optim.Adam([mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param], lr=0.01)

history_tri = []
snapshots_tri = []
snapshot_schedule_tri = {0, 1, 2, 5, 10, 20, 40, 80, 120, 160, 200, 250, 300, 350}

# Video frames
video_frames_tri = []
video_sample_rate = 3

# Snapshot initial state
snapshots_tri.append((0, mus_param.detach().clone(), sigmas_param.detach().clone(),
                     thetas_param.detach().clone(), opacities_param.detach().clone(), rgbs_param.detach().clone()))
video_frames_tri.append(img_init_tri.detach().cpu().numpy())

max_iters_tri = 100
print(f"Optimizing {num_gaussians} Gaussians (with rotation) to fit triangle...")
for it in range(max_iters_tri):
    optimizer_tri.zero_grad()
    
    # Clamp parameters to valid ranges
    with torch.no_grad():
        mus_param.clamp_(-1.5, 1.5)
        sigmas_param.clamp_(0.01, 1.0)
        opacities_param.clamp_(0.0, 1.0)
        rgbs_param.clamp_(0.0, 1.0)
        # No clamping for thetas - let them rotate freely
    
    # Render all Gaussians and compute loss
    img = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param)
    loss = torch.mean((img - img_target_tri) ** 2)
    
    # Backward pass
    loss.backward()
    optimizer_tri.step()
    
    # Record history
    history_tri.append(loss.item())
    
    # Take snapshots
    if (it + 1) in snapshot_schedule_tri:
        snapshots_tri.append((it + 1, mus_param.detach().clone(), sigmas_param.detach().clone(),
                             thetas_param.detach().clone(), opacities_param.detach().clone(), rgbs_param.detach().clone()))
    
    # Capture video frames
    if (it + 1) % video_sample_rate == 0:
        frame = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param).detach().cpu().numpy()
        video_frames_tri.append(frame)
    
    if (it + 1) % 50 == 0:
        print(f"Iteration {it+1}/{max_iters_tri}, Loss: {loss.item():.6f}")

# Add final frame
final_frame = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param).detach().cpu().numpy()
video_frames_tri.append(final_frame)


print(f"Final loss: {history_tri[-1]:.6f}")
print(f"Trained {num_gaussians} Gaussians to approximate triangle")
~~~

  - 스플랫마다 바운딩 박스를 하나씩 만들게 된다, 스필랫이 20개면 20개 전부 바운딩 박스를 만드는 거고, 그것은 결국 스플랫의 맨 끝 부분인 바운딩 박스를 넘어가는 부분은 짤리게 된다는것

~~~python
// 이 부분에서, 전체 이미지 img를 만들 때 스플랫마다 계산한 색을 같은 이미지에 더한다
img[mask_bbox] = img[mask_bbox] + (opacity * rgb).view(1, 3) * f_x.unsqueeze(-1)
~~~

###### [렌더링 가속(바운딩 박스)](#렌더링-가속바운딩-박스)
###### [Top](#top)


<br/>
<br/>

# 가우시안 밀도 조절 (분할,복제,제거)
  - 1. Splitting: 크기가 너무 커졌을 때 쪼개기
  - 2. Cloning: 기울기(gradient)가 너무 클때 추가
  - 3. Pruning: 투명해졌을 때 삭제

<br/>

  - 가우시안 스플랫 생성

~~~python
import numpy as np
import torch
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation, FFMpegWriter
from IPython.display import Video
from matplotlib.patches import Ellipse, Rectangle

# Keep figures sharp
plt.rcParams["figure.dpi"] = 120
plt.rcParams["savefig.dpi"] = 120

# Image size (normalized coordinate frame [-1, 1])
H, W = 96, 96

def make_pixel_grid(H, W, device="cpu"):
    xs = (torch.arange(W, device=device) + 0.5) / W * 2 - 1
    ys = (torch.arange(H, device=device) + 0.5) / H * 2 - 1
    Y, X = torch.meshgrid(ys, xs, indexing="ij")
    Y = torch.flip(Y, dims=[0])
    return torch.stack([X, Y], dim=-1)

def render_gaussians_2d(H, W, mus, sigmas, thetas, opacities, rgbs, n_sigma=3.0):
    P = make_pixel_grid(H, W, device=mus.device)
    img = torch.zeros((H, W, 3), device=mus.device, dtype=mus.dtype)

    for i in range(len(mus)):
        mu = mus[i]
        sigma = torch.clamp(sigmas[i], min=1e-3)
        theta = thetas[i]
        opacity = opacities[i]
        rgb = rgbs[i]

        # Axis-aligned 3σ (default) box for the rotated ellipse to cull distant pixels
        cos_t, sin_t = torch.cos(theta), torch.sin(theta)
        half_w = n_sigma * (torch.abs(cos_t) * sigma[0] + torch.abs(sin_t) * sigma[1])
        half_h = n_sigma * (torch.abs(sin_t) * sigma[0] + torch.abs(cos_t) * sigma[1])
        x0, x1 = mu[0] - half_w, mu[0] + half_w
        y0, y1 = mu[1] - half_h, mu[1] + half_h
        mask_bbox = (P[..., 0] >= x0) & (P[..., 0] <= x1) & (P[..., 1] >= y0) & (P[..., 1] <= y1)
        if not mask_bbox.any():
            continue

        # Gaussian evaluation only inside the bounding box
        R = torch.stack([torch.stack([cos_t, -sin_t]), torch.stack([sin_t, cos_t])])
        sigma_inv = R @ torch.diag(1.0 / (sigma ** 2)) @ R.T

        diff = P[mask_bbox] - mu
        exponent = torch.einsum("bi,ij,bj->b", diff, sigma_inv, diff)
        f_x = torch.exp(-0.5 * exponent)
        img[mask_bbox] = img[mask_bbox] + (opacity * rgb).view(1, 3) * f_x.unsqueeze(-1)

    return torch.clamp(img, 0.0, 1.0)

def draw_gaussian_ellipses(ax, mus, sigmas, thetas, color="yellow", label=None, alpha=0.7, n_sigma=3.0):
    """Draw n-sigma ellipses for 2D Gaussians in normalized coords [-1, 1]."""
    mus = mus.detach().cpu()
    sigmas = sigmas.detach().cpu()
    thetas = thetas.detach().cpu()
    first = True
    for i in range(len(mus)):
        width = sigmas[i, 0].item() * n_sigma * 2.0
        height = sigmas[i, 1].item() * n_sigma * 2.0
        angle = float(thetas[i].item() * 180.0 / np.pi)
        e = Ellipse(
            (mus[i, 0].item(), mus[i, 1].item()),
            width=width,
            height=height,
            angle=angle,
            edgecolor=color,
            facecolor="none",
            linewidth=2.0,
            alpha=alpha,
            label=label if first and label is not None else None,
        )
        ax.add_patch(e)
        first = False

    ax.scatter(mus[:, 0], mus[:, 1], c=color, s=30, marker="x", linewidths=2, alpha=alpha)

def show_images(images, titles, figsize=None, vmin=0.0, vmax=1.0):
    n = len(images)
    figsize = figsize or (3.6 * n, 3.6)
    fig, axes = plt.subplots(1, n, figsize=figsize)
    axes = [axes] if n == 1 else axes
    for ax, im, title in zip(axes, images, titles):
        if torch.is_tensor(im):
            im = im.detach().cpu().numpy()
        ax.imshow(im, vmin=vmin, vmax=vmax, interpolation="nearest")
        ax.set_title(title)
        ax.axis("off")
    plt.tight_layout()
    plt.show()

def show_image_grid(images, titles, cols=4, cell_size=3.2, vmin=0.0, vmax=1.0):
    n = len(images)
    cols = int(max(1, cols))
    rows = int(np.ceil(n / cols))
    fig, axes = plt.subplots(rows, cols, figsize=(cell_size * cols, cell_size * rows))
    axes = np.array(axes).reshape(rows, cols)
    for i in range(rows * cols):
        r, c = divmod(i, cols)
        ax = axes[r, c]
        if i < n:
            im = images[i]
            if torch.is_tensor(im):
                im = im.detach().cpu().numpy()
            ax.imshow(im, vmin=vmin, vmax=vmax, interpolation="nearest")
            ax.set_title(titles[i])
        ax.axis("off")
    plt.tight_layout()
    plt.show()

def diff_image(a, b):
    d = torch.abs(a - b)
    mag = torch.clamp(torch.norm(d, dim=-1, keepdim=True) / np.sqrt(3.0), 0.0, 1.0)
    return d, mag.repeat(1, 1, 3)

def save_training_video(frames, filename, fps=30, title="Training Progress"):
    if len(frames) == 0:
        print(f"No frames to save for {filename}")
        return

    fig, ax = plt.subplots(figsize=(6, 6))
    ax.set_title(title)
    ax.axis("off")

    im_display = ax.imshow(frames[0], vmin=0.0, vmax=1.0, interpolation="nearest")
    text = ax.text(0.5, -0.05, "Iteration: 0", transform=ax.transAxes, ha="center", fontsize=12)

    def update(frame_idx):
        im_display.set_array(frames[frame_idx])
        text.set_text(f"Iteration: {frame_idx}")
        return [im_display, text]

    anim = FuncAnimation(fig, update, frames=len(frames), interval=1000 / fps, blit=True)
    writer = FFMpegWriter(fps=fps, bitrate=1800)
    anim.save(filename, writer=writer)
    plt.close(fig)
    print(f"Video saved to {filename}")
~~~

<br/>

  - Splitting: 크기가 너무 커졌을 때 쪼개기
    - max_sigma 로 얼마나 커졌을때 쪼갤지 하이퍼파라미터
    - split_gaussians_if_large 함수 안에서 어떻게 쪼갤지 정하기

~~~python
def split_gaussians_if_large(mus, sigmas, thetas, opacities, rgbs, max_sigma=0.35):
    """Split Gaussians whose largest sigma exceeds max_sigma along their major axis."""
    largest = sigmas.max(dim=1).values
    large_mask = largest > max_sigma
    if not torch.any(large_mask):
        return mus, sigmas, thetas, opacities, rgbs
    
    # Clone originals to serve as the "updated parents" (Child 1)
    # This preserves index alignment: index i corresponds to optimizer param i
    new_mus = mus.clone()
    new_sigmas = sigmas.clone()
    new_thetas = thetas.clone()
    new_opacities = opacities.clone()
    new_rgbs = rgbs.clone()
    
    # Collect new children (Child 2) to append at the end
    added_mus, added_sigmas, added_thetas, added_opacities, added_rgbs = [], [], [], [], []
    
    split_indices = torch.nonzero(large_mask).flatten()
    num_splits = len(split_indices)
    if num_splits > 0:
        print(f"Splitting: {num_splits} Gaussians → {num_splits} new points added")
    
    for i in split_indices:
        cos_t, sin_t = torch.cos(thetas[i]), torch.sin(thetas[i])
        R = torch.stack([torch.stack([cos_t, -sin_t]), torch.stack([sin_t, cos_t])])
        major_first = sigmas[i, 0] >= sigmas[i, 1]
        major_dir = R[:, 0] if major_first else R[:, 1]
        
        offset = major_dir * (largest[i] * 0.35)
        child_sigma = torch.clamp(sigmas[i] * 0.7, min=1e-3)
        child_opacity = opacities[i] * 0.5
        
        # Update original slot (Child 1)
        new_mus[i] = mus[i] + offset
        new_sigmas[i] = child_sigma
        new_opacities[i] = child_opacity
        
        # Create new particle (Child 2)
        added_mus.append(mus[i] - offset)
        added_sigmas.append(child_sigma)
        added_thetas.append(thetas[i])
        added_opacities.append(child_opacity)
        added_rgbs.append(rgbs[i])
        
    # Concatenate: [Updated Originals] + [New Children]
    return (
        torch.cat([new_mus, torch.stack(added_mus)], dim=0),
        torch.cat([new_sigmas, torch.stack(added_sigmas)], dim=0),
        torch.cat([new_thetas, torch.stack(added_thetas)], dim=0),
        torch.cat([new_opacities, torch.stack(added_opacities)], dim=0),
        torch.cat([new_rgbs, torch.stack(added_rgbs)], dim=0)
    )

# Demo: one oversized Gaussian gets split into two children
mus_demo = torch.tensor([[0.0, 0.0]], dtype=torch.float32)
sigmas_demo = torch.tensor([[0.7, 0.4]], dtype=torch.float32)
thetas_demo = torch.tensor([0.2], dtype=torch.float32)
opacities_demo = torch.tensor([0.9], dtype=torch.float32)
rgbs_demo = torch.tensor([[1.0, 0.8, 0.2]], dtype=torch.float32)

img_before = render_gaussians_2d(H, W, mus_demo, sigmas_demo, thetas_demo, opacities_demo, rgbs_demo)
split_out = split_gaussians_if_large(mus_demo, sigmas_demo, thetas_demo, opacities_demo, rgbs_demo, max_sigma=0.35)
mus_split, sigmas_split, thetas_split, opacities_split, rgbs_split = split_out
img_after = render_gaussians_2d(H, W, mus_split, sigmas_split, thetas_split, opacities_split, rgbs_split)

print(f"Gaussians before: {len(mus_demo)}, after split: {len(mus_split)}")

# Draw Gaussian boundaries (n-sigma ellipses) on top of the images
fig, axes = plt.subplots(1, 2, figsize=(10, 4))
pairs = [
    (axes[0], img_before, "Before split", mus_demo, sigmas_demo, thetas_demo),
    (axes[1], img_after, "After split", mus_split, sigmas_split, thetas_split),
]
for ax, img, title, mus_v, sigmas_v, thetas_v in pairs:
    ax.imshow(img.detach().cpu().numpy(), extent=[-1, 1, -1, 1], origin="upper", vmin=0.0, vmax=1.0)
    draw_gaussian_ellipses(ax, mus_v, sigmas_v, thetas_v, color="cyan", alpha=0.8, n_sigma=1.5)
    ax.set_xlim(-1, 1)
    ax.set_ylim(-1, 1)
    ax.set_title(title)
    ax.axis("off")
plt.tight_layout()
plt.show()
~~~

<br/>

  - Cloning: 기울기(gradient)가 너무 클때 추가
    - 기울기가 grad_threshold 이상이면 복사함
    - 가우시안의 중심을 조금 움직였을 때, 렌더링 이미지와 목표 이미지의 차이인 loss가 얼마나 변하는지 나타내는 값
      - 대응되는 픽셀은 놔두고, 스플릿의 중심이 옮겨지는것에 따라 loss를 확인했을때 크면 기울기가 크다고 하는것
      - 기울기가 커서 스플릿을 복사한다고 해서 loss가 작아지는것은 아니지만(스플릿되는 영역이 밝아질뿐), 복제하는 이유는 이후 학습에서 두 스플랫을 따로 조정할 수 있게 하기 위해서임

<br/>

~~~python
def clone_gaussians_if_high_grad(mus, sigmas, thetas, opacities, rgbs, mus_grad, grad_threshold=0.1, max_sigma=None):
    """
    Clone Gaussians whose positional gradient norm exceeds grad_threshold.
    If max_sigma is provided, do NOT clone Gaussians larger than this size (they should be split instead).
    """
    if mus_grad is None:
        return mus, sigmas, thetas, opacities, rgbs

    # Compute gradient norms
    grad_norms = torch.norm(mus_grad, dim=-1)
    clone_mask = grad_norms > grad_threshold
    
    # Exclude large Gaussians if requested (they should be split, not cloned)
    if max_sigma is not None:
        largest_sigma = sigmas.max(dim=1).values
        large_mask = largest_sigma > max_sigma
        clone_mask = clone_mask & (~large_mask)
    
    if not torch.any(clone_mask):
        return mus, sigmas, thetas, opacities, rgbs
    
    # Indices to clone
    clone_indices = torch.nonzero(clone_mask).flatten()
    num_clones = len(clone_indices)
    if num_clones > 0:
        print(f"Cloning: {num_clones} Gaussians → {num_clones} new points added")
    
    # Create clones (duplicates)
    added_mus = mus[clone_indices].clone()
    added_sigmas = sigmas[clone_indices].clone()
    added_thetas = thetas[clone_indices].clone()
    added_opacities = opacities[clone_indices].clone()
    added_rgbs = rgbs[clone_indices].clone()
    
    # Concatenate original + clones
    return (
        torch.cat([mus, added_mus], dim=0),
        torch.cat([sigmas, added_sigmas], dim=0),
        torch.cat([thetas, added_thetas], dim=0),
        torch.cat([opacities, added_opacities], dim=0),
        torch.cat([rgbs, added_rgbs], dim=0)
    )

# Demo: Clone a Gaussian with high gradient
mus_demo_c = torch.tensor([[0.0, 0.0]], dtype=torch.float32)
sigmas_demo_c = torch.tensor([[0.2, 0.2]], dtype=torch.float32)
thetas_demo_c = torch.tensor([0.0], dtype=torch.float32)
opacities_demo_c = torch.tensor([0.5], dtype=torch.float32)
rgbs_demo_c = torch.tensor([[0.0, 1.0, 0.0]], dtype=torch.float32) # Green

# Simulate high gradient
rl = torch.tensor([[1.0, 1.0]], dtype=torch.float32)

img_before_c = render_gaussians_2d(H, W, mus_demo_c, sigmas_demo_c, thetas_demo_c, opacities_demo_c, rgbs_demo_c)

clone_out = clone_gaussians_if_high_grad(
    mus_demo_c, sigmas_demo_c, thetas_demo_c, opacities_demo_c, rgbs_demo_c, 
    mus_grad_demo, grad_threshold=0.5
)
mus_clone, sigmas_clone, thetas_clone, opacities_clone, rgbs_clone = clone_out

img_after_c = render_gaussians_2d(H, W, mus_clone, sigmas_clone, thetas_clone, opacities_clone, rgbs_clone)

print(f"Gaussians before: {len(mus_demo_c)}, after clone: {len(mus_clone)}")

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(10, 4))
pairs = [
    (axes[0], img_before_c, "Before clone", mus_demo_c, sigmas_demo_c, thetas_demo_c),
    (axes[1], img_after_c, "After clone", mus_clone, sigmas_clone, thetas_clone),
]
for ax, img, title, mus_v, sigmas_v, thetas_v in pairs:
    ax.imshow(img.detach().cpu().numpy(), extent=[-1, 1, -1, 1], origin="upper", vmin=0.0, vmax=1.0)
    draw_gaussian_ellipses(ax, mus_v, sigmas_v, thetas_v, color="magenta", alpha=0.8, n_sigma=1.5)
    ax.set_xlim(-1, 1)
    ax.set_ylim(-1, 1)
    ax.set_title(title)
    ax.axis("off")
plt.tight_layout()
plt.show()
~~~

<br/>

  - Pruning: 투명해졌을 때 삭제
    - min_opacity 정해놓은 불투명도보다 opacities 크면 제거하기(불투명도가 크다는건 더 불투명 하다는것)

<br/>

~~~python
def prune_gaussians(mus, sigmas, thetas, opacities, rgbs, min_opacity=0.01, max_sigma=None):
    """
    Remove Gaussians with opacity below min_opacity or size exceeding max_sigma.
    Returns filtered tensors and a mask indicating which Gaussians to keep.
    """
    # Create keep mask based on opacity
    keep_mask = opacities >= min_opacity
    
    # Optionally filter by maximum size
    if max_sigma is not None:
        largest_sigma = sigmas.max(dim=1).values
        size_mask = largest_sigma <= max_sigma
        keep_mask = keep_mask & size_mask
    
    num_pruned = (~keep_mask).sum().item()
    if num_pruned > 0:
        print(f"Pruning: {num_pruned} Gaussians removed (kept {keep_mask.sum().item()})")
    
    if not torch.any(keep_mask):
        print("Warning: All Gaussians would be pruned! Keeping all instead.")
        return mus, sigmas, thetas, opacities, rgbs, torch.ones_like(opacities, dtype=torch.bool)
    
    # Filter all parameters
    return (
        mus[keep_mask],
        sigmas[keep_mask],
        thetas[keep_mask],
        opacities[keep_mask],
        rgbs[keep_mask],
        keep_mask
    )

def remove_from_optimizer(opt, old_params, keep_mask):
    """
    Remove pruned points from optimizer state (opposite of extend_optimizer_with_new_points).
    Returns new parameters with only the kept Gaussians.
    """
    mus_old, sigmas_old, thetas_old, opacities_old, rgbs_old = old_params
    
    # Helper to filter a single parameter and its optimizer state
    def _filter_param_and_state(opt, old_param, keep_mask):
        group = opt.param_groups[0]
        idx = None
        for i, p in enumerate(group["params"]):
            if p is old_param:
                idx = i
                break
        if idx is None:
            raise ValueError("Parameter not found in optimizer")
        
        # Filter the parameter
        filtered_data = old_param.data[keep_mask]
        new_param = torch.nn.Parameter(filtered_data)
        group["params"][idx] = new_param
        
        # Filter the optimizer state
        state = opt.state.pop(old_param, {})
        if state:
            step = state.get("step", 0)
            exp_avg = state.get("exp_avg", torch.zeros_like(old_param))
            exp_avg_sq = state.get("exp_avg_sq", torch.zeros_like(old_param))
            opt.state[new_param] = {
                "step": step,
                "exp_avg": exp_avg[keep_mask],
                "exp_avg_sq": exp_avg_sq[keep_mask],
            }
        
        return new_param
    
    # Filter all parameters and their states
    mus_param = _filter_param_and_state(opt, mus_old, keep_mask)
    sigmas_param = _filter_param_and_state(opt, sigmas_old, keep_mask)
    thetas_param = _filter_param_and_state(opt, thetas_old, keep_mask)
    opacities_param = _filter_param_and_state(opt, opacities_old, keep_mask)
    rgbs_param = _filter_param_and_state(opt, rgbs_old, keep_mask)
    
    return mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param

# Demo: Prune low-opacity Gaussians
mus_demo_p = torch.tensor([[0.0, 0.0], [0.5, 0.5], [-0.3, 0.3]], dtype=torch.float32)
sigmas_demo_p = torch.tensor([[0.2, 0.2], [0.15, 0.15], [0.25, 0.2]], dtype=torch.float32)
thetas_demo_p = torch.tensor([0.0, 0.5, -0.3], dtype=torch.float32)
opacities_demo_p = torch.tensor([0.7, 0.005, 0.6], dtype=torch.float32)  # Middle one is nearly transparent
rgbs_demo_p = torch.tensor([[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]], dtype=torch.float32)

img_before_p = render_gaussians_2d(H, W, mus_demo_p, sigmas_demo_p, thetas_demo_p, opacities_demo_p, rgbs_demo_p)

prune_out = prune_gaussians(
    mus_demo_p, sigmas_demo_p, thetas_demo_p, opacities_demo_p, rgbs_demo_p, 
    min_opacity=0.01
)
mus_pruned, sigmas_pruned, thetas_pruned, opacities_pruned, rgbs_pruned, keep_mask = prune_out

img_after_p = render_gaussians_2d(H, W, mus_pruned, sigmas_pruned, thetas_pruned, opacities_pruned, rgbs_pruned)

print(f"Gaussians before: {len(mus_demo_p)}, after pruning: {len(mus_pruned)}")
print(f"Removed opacities: {opacities_demo_p[~keep_mask].tolist()}")

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(10, 4))
pairs = [
    (axes[0], img_before_p, f"Before pruning ({len(mus_demo_p)} points)", mus_demo_p, sigmas_demo_p, thetas_demo_p),
    (axes[1], img_after_p, f"After pruning ({len(mus_pruned)} points)", mus_pruned, sigmas_pruned, thetas_pruned),
]
for ax, img, title, mus_v, sigmas_v, thetas_v in pairs:
    ax.imshow(img.detach().cpu().numpy(), extent=[-1, 1, -1, 1], origin="upper", vmin=0.0, vmax=1.0)
    draw_gaussian_ellipses(ax, mus_v, sigmas_v, thetas_v, color="yellow", alpha=0.8, n_sigma=1.5)
    ax.set_xlim(-1, 1)
    ax.set_ylim(-1, 1)
    ax.set_title(title)
    ax.axis("off")
plt.tight_layout()
plt.show()
~~~

<br/>

  - L1과 D-SSIM 을 LOSS함수로 해서 학습하기

~~~python
// 초기 생성 세팅
# Initialize multiple random Gaussians to fit the triangle
num_gaussians = 3  # Use multiple Gaussians to approximate the triangle

# Random initialization
torch.manual_seed(42)
init_mus = torch.randn(num_gaussians, 2) * 0.5
init_sigmas = torch.rand(num_gaussians, 2) * 0.2 + 0.1  # Random sizes
init_thetas = torch.rand(num_gaussians) * 2 * np.pi  # Random rotations [0, 2π]
init_opacities = torch.rand(num_gaussians) * 0.5 + 0.3  # Random opacities [0.3, 0.8]
init_rgbs = torch.rand(num_gaussians, 3) * 0.6 + 0.2  # Random RGB colors

img_init_tri = render_gaussians_2d(H, W, init_mus, init_sigmas, init_thetas, init_opacities, init_rgbs)
d_rgb_tri, d_mag_tri = diff_image(img_init_tri, img_target_tri)
show_images(
    [img_target_tri, img_init_tri, d_mag_tri],
    ["Target Triangle", f"Initial ({num_gaussians} Gaussians)", "|Target - Initial|"],
    figsize=(12, 4)
)




// ssim 로스 함수
import torch.nn.functional as F

def create_window(window_size, channel):
    def gaussian(window_size, sigma):
        gauss = torch.exp(torch.tensor([-(x - window_size // 2) ** 2 / float(2 * sigma ** 2) for x in range(window_size)]))
        return gauss / gauss.sum()

    _1D_window = gaussian(window_size, 1.5).unsqueeze(1)
    _2D_window = _1D_window.mm(_1D_window.t()).float().unsqueeze(0).unsqueeze(0)
    window = _2D_window.expand(channel, 1, window_size, window_size).contiguous()
    return window

def ssim(img1, img2, window_size=11, size_average=True):
    # Expects [H, W, C] images, converts to [1, C, H, W]
    if img1.ndim == 3:
        img1 = img1.permute(2, 0, 1).unsqueeze(0)
        img2 = img2.permute(2, 0, 1).unsqueeze(0)
    
    channel = img1.size(1)
    window = create_window(window_size, channel)
    
    if img1.is_cuda:
        window = window.cuda(img1.get_device())
    window = window.type_as(img1)

    mu1 = F.conv2d(img1, window, padding=window_size // 2, groups=channel)
    mu2 = F.conv2d(img2, window, padding=window_size // 2, groups=channel)

    mu1_sq = mu1.pow(2)
    mu2_sq = mu2.pow(2)
    mu1_mu2 = mu1 * mu2

    sigma1_sq = F.conv2d(img1 * img1, window, padding=window_size // 2, groups=channel) - mu1_sq
    sigma2_sq = F.conv2d(img2 * img2, window, padding=window_size // 2, groups=channel) - mu2_sq
    sigma12 = F.conv2d(img1 * img2, window, padding=window_size // 2, groups=channel) - mu1_mu2

    C1 = 0.01 ** 2
    C2 = 0.03 ** 2

    ssim_map = ((2 * mu1_mu2 + C1) * (2 * sigma12 + C2)) / ((mu1_sq + mu2_sq + C1) * (sigma1_sq + sigma2_sq + C2))

    if size_average:
        return ssim_map.mean()
    else:
        return ssim_map.mean(1).mean(1).mean(1)




// 학습하기
# Optimize multiple Gaussians to fit the triangle - now with rotation and pruning!
mus_param = init_mus.clone().detach().requires_grad_(True)
sigmas_param = init_sigmas.clone().detach().requires_grad_(True)
thetas_param = init_thetas.clone().detach().requires_grad_(True)
opacities_param = init_opacities.clone().detach().requires_grad_(True)
rgbs_param = init_rgbs.clone().detach().requires_grad_(True)

optimizer_tri = torch.optim.Adam([mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param], lr=0.01)

# Learning rate scheduler: exponential decay
lr_decay_rate = 0.995  # Decay factor per iteration
scheduler = torch.optim.lr_scheduler.ExponentialLR(optimizer_tri, gamma=lr_decay_rate)

history_tri = []
history_lr = []  # Track learning rate
snapshots_tri = []
snapshot_schedule_tri = {0, 1, 2, 5, 10, 20, 40, 80, 120, 160, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000}

# Video frames
video_frames_tri = []
video_sample_rate = 1

# Snapshot initial state
snapshots_tri.append((0, mus_param.detach().clone(), sigmas_param.detach().clone(),
                     thetas_param.detach().clone(), opacities_param.detach().clone(), rgbs_param.detach().clone()))
video_frames_tri.append(img_init_tri.detach().cpu().numpy())

max_iters_tri = 1000
densify_interval = 30
prune_interval = 10  
max_sigma_threshold = 0.3 # Threshold for splitting (and avoiding cloning)
min_opacity_threshold = 0.05  # Minimum opacity to keep a Gaussian

for it in range(max_iters_tri):
    optimizer_tri.zero_grad()
    
    # Clamp parameters to valid ranges
    with torch.no_grad():
        mus_param.clamp_(-1.5, 1.5)
        sigmas_param.clamp_(0.01, 1.0)
        opacities_param.clamp_(0.0, 1.0)
        rgbs_param.clamp_(0.0, 1.0)
        # No clamping for thetas - let them rotate freely
    
    # Render all Gaussians and compute loss
    img = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param)
    
    # L1 + D-SSIM loss
    lambda_dssim = 0.2
    l1_loss = torch.abs(img - img_target_tri).mean()
    ssim_loss = 1.0 - ssim(img, img_target_tri)
    loss = (1.0 - lambda_dssim) * l1_loss + lambda_dssim * ssim_loss
    
    # Backward pass
    loss.backward()
    
    # Save gradients before optimizer step (for cloning decision)
    mus_grad = mus_param.grad.clone() if mus_param.grad is not None else None
    
    optimizer_tri.step()
    
    # Learning rate decay starts from iteration 300
    if it >= 300:
        scheduler.step()
    
    # Density control: Clone, Split, and Prune
    if (it + 1) % densify_interval == 0 or (it + 1) % prune_interval == 0:
        with torch.no_grad():
            # Densification: Clone and Split (only until iter 300)
            if (it + 1) % densify_interval == 0 and it < 300:
                prev_count = mus_param.shape[0]
                
                # 1. Clone high-gradient Gaussians (that are NOT large)
                clone_full = clone_gaussians_if_high_grad(
                    mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param,
                    mus_grad, grad_threshold=0.0002, max_sigma=max_sigma_threshold
                )
                
                # 2. Split large Gaussians
                split_full = split_gaussians_if_large(
                    clone_full[0], clone_full[1], clone_full[2], clone_full[3], clone_full[4], 
                    max_sigma=max_sigma_threshold
                )
                
                # 3. Extend the optimizer with new points
                mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param = extend_optimizer_with_new_points(
                    optimizer_tri,
                    (mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param),
                    split_full,
                    prev_count,
                )
                mus_param.requires_grad_(True)
                sigmas_param.requires_grad_(True)
                thetas_param.requires_grad_(True)
                opacities_param.requires_grad_(True)
                rgbs_param.requires_grad_(True)
            
            # Pruning: Remove low-opacity Gaussians (continues throughout all training)
            if (it + 1) % prune_interval == 0:
                prune_result = prune_gaussians(
                    mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param,
                    min_opacity=min_opacity_threshold, max_sigma=None
                )
                mus_pruned, sigmas_pruned, thetas_pruned, opacities_pruned, rgbs_pruned, keep_mask = prune_result
                
                # Only update if we actually pruned something
                if keep_mask.sum() < len(mus_param):
                    mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param = remove_from_optimizer(
                        optimizer_tri,
                        (mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param),
                        keep_mask
                    )
                    mus_param.requires_grad_(True)
                    sigmas_param.requires_grad_(True)
                    thetas_param.requires_grad_(True)
                    opacities_param.requires_grad_(True)
                    rgbs_param.requires_grad_(True)
    
    # Record history
    history_tri.append(loss.item())
    history_lr.append(scheduler.get_last_lr()[0])
    
    # Take snapshots
    if (it + 1) in snapshot_schedule_tri:
        snapshots_tri.append((it + 1, mus_param.detach().clone(), sigmas_param.detach().clone(),
                             thetas_param.detach().clone(), opacities_param.detach().clone(), rgbs_param.detach().clone()))
    
    # Capture video frames
    if (it + 1) % video_sample_rate == 0:
        frame = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param).detach().cpu().numpy()
        video_frames_tri.append(frame)
    
    if (it + 1) % 50 == 0:
        current_lr = scheduler.get_last_lr()[0]
        print(f"Iteration {it+1}/{max_iters_tri}, Loss: {loss.item():.6f}, LR: {current_lr:.6f}, Gaussians: {mus_param.shape[0]}")

# Add final frame
final_frame = render_gaussians_2d(H, W, mus_param, sigmas_param, thetas_param, opacities_param, rgbs_param).detach().cpu().numpy()
video_frames_tri.append(final_frame)

print(f"Final loss: {history_tri[-1]:.6f}")
print(f"Final learning rate: {history_lr[-1]:.6f}")
print(f"Final number of Gaussians: {mus_param.shape[0]} (started with {num_gaussians})")
~~~

<br/>

  - 학습 하이퍼파라미터

~~~text
## 학습 하이퍼파라미터

1. 시작 러닝레이트 `lr = 0.01`
   학습 초반에 위치, 크기, 색을 얼마나 크게 바꿀지 정한다.

2. 러닝레이트 감소 비율 `lr_decay_rate = 0.995`
   후반에는 매 반복마다 러닝레이트에 `0.995`를 곱한다.

3. 총 학습 횟수 `max_iters_tri = 1000`
   파라미터를 총 몇 번 업데이트할지 정한다.

4. 복제·분할 검사 간격 `densify_interval = 30`
   30회마다 복제와 분할 대상을 찾는다.
   마지막 검사는 300회째에 한다.

5. 복제 기울기 기준 `grad_threshold = 0.0002`
   위치 기울기의 크기가 이 값을 넘으면 복제 후보가 된다.

6. 분할 크기 기준 `max_sigma_threshold = 0.3`
   가장 큰 sigma가 이 값을 넘으면 분할 대상이 된다.
   이 값 이하면 기울기 기준을 통과한 경우 복제할 수 있다.

7. 제거 검사 간격 `prune_interval = 10`
   10회마다 제거 대상을 찾는다.
   1000회 학습이 끝날 때까지 계속 검사한다.

8. 최소 불투명도 `min_opacity_threshold = 0.05`
   불투명도가 이 값보다 낮은 가우시안은 제거 후보가 된다.

9. 구조 손실 비중 `lambda_dssim = 0.2`
   전체 손실에 픽셀 오차(L1)를 80%,
   구조 차이(1 - SSIM)를 20% 반영한다.
~~~

###### [가우시안 밀도 조절 (분할,복제,제거)](#가우시안-밀도-조절-분할복제제거)
###### [Top](#top)

<br/>
<br/>

# 기저 함수와 푸리에 분석, 파동의 중첩에서 이미지 복원까지
  - 기저 함수와 계수
    - 복잡한 신호나 함수를, 미리 정한 기본 함수들의 가중합으로 표현할 수 있다. 이때 표현의 기본 재료가 되는 함수를 기저 함수라고 하고, 각 함수의 기여량을 계수라고 한다
    - 여기서 기본 재료를 삼각함수인 코사인, 사인으로 표현
    - 코사인, 사인함수를 중첩 시킴으로써 여러 모양을 근사시킬수 있다
    - 부드러운 삼각함수들을 여러 주파수로 조합하면, 급격하게 변하는 모양도 근사할 수 있다. 사용하는 항의 개수가 제한되어 있으므로 목표 모양과 완전히 같지는 않을 수 있다

<br/>

~~~text
// 이미지 준비와 RGB 분리

img = img.resize((128, 128))
img_rgb = np.array(img.convert('RGB')) / 255.0
// 계산량을 줄이기 위해 128×128로 크기를 변경한다.
// 각 픽셀을 RGB 세 값으로 표현한다.
// 0~255 값을 0~1 범위로 바꾼다.

// 배열 구조
img_rgb.shape = (128, 128, 3)
                 높이  너비  RGB

img_rgb[y, x, 0] → 해당 픽셀의 빨강 값
img_rgb[y, x, 1] → 해당 픽셀의 초록 값
img_rgb[y, x, 2] → 해당 픽셀의 파랑 값

// 여기서 가로한줄을 꺼냈을때 각각의 픽셀에 RGB값이 각각 0~1로 존재한다


~~~

<br/>

  - FFT, DFT
    - 1차원 신호를 주파수별 계수로 바꾸고, 일부 성분으로 다시 합쳐보는 과정
      - 저주파 : 완만한 밝기 변화, 넓은 명암 구조
      - 고주파 : 급격한 경계, 세밀한 무늬와 질감

<br/>

~~~text
이미지의 RGB 값
    ↓ FFT
주파수별 계수
    ↓ 필요한 계수만 남김
선택된 계수
    ↓ IFFT
근사 이미지

// 한픽셀에 rgb값이 있는데 그것은 원래 0~255로 표현하지만 
// 그것을 일단 0~1의 값으로 바꾸고
// 그것을 그래프로 쭉 그려봤을때 각각의 rgb가 그래프가 나옴

R[y, x] : 각 위치의 빨강 값
G[y, x] : 각 위치의 초록 값
B[y, x] : 각 위치의 파랑 값

R(x,y) = 빨강의 평균 밝기 + 여러 sin·cos 패턴의 기여
-> 이것이 된다, 각각 rgb는 기본으로 가지고 있는 평균 밝기를 두고, 패턴을 만든다

따라서 사진을 복원할때는,어떤 sin·cos를 얼마나 더해야 원본 모양이 되는가? 를 계산해서 가지고 있으면,

어떤 픽셀하나에서 다음과 같다면, 
| 채널 | 공통 평균 밝기 | 그 위치에서 패턴들의 기여 합 | 최종 값 |
| R    | 0.3           | +0.2                      | 0.5 |
| G    | 0.4           | −0.1                      | 0.3 |
| B    | 0.5           | +0.1                      | 0.6 |

그러면 그 픽셀의 색은,
pixel = [0.5, 0.3, 0.6] 값이 된다, 이것을 다시 0~255로 바꾸고 컬러를 보면 된다
~~~

###### [기저 함수와 푸리에 분석, 파동의 중첩에서 이미지 복원까지](#기저-함수와-푸리에-분석-파동의-중첩에서-이미지-복원까지)
###### [Top](#top)

<br/>
<br/>

# 구면 조화 함수
  - 앞에서 푸리에 변환으로 사진을 복원할 때는, 픽셀 위치에 따라 RGB가 어떻게 변하는지 파동의 합으로 표현했다.
  - 3DGS에서는 같은 가우시안을 여러 방향에서 볼 수 있다. 금속 표면처럼 보는 각도에 따라 밝기나 색이 달라지는 경우, 카메라 방향에 따른 색 변화를 구면 조화 함수(SH)로 표현한다.

<br/>

  - 구면조화함수 수식

<img width="311" height="82" alt="image" src="https://github.com/user-attachments/assets/b4a091ae-9cdb-4938-bee4-a17ad61207e1" />

<br/>
<br/>

  - CUDA

<img width="598" height="111" alt="image" src="https://github.com/user-attachments/assets/e33eca06-01a3-479a-a4bd-d31418b9fbaf" />

<br/>
<br/>

  - 각 계수 sh[k]에 곱할 기저 함수의 계산식을, 인덱스 순서대로 나열한 표
    - 예를 들어 index 2를 보면
    - sh[2] * (SH_C1 × z) 가 된다

<img width="912" height="883" alt="image" src="https://github.com/user-attachments/assets/b463ce5c-642c-4ecf-8baa-0ce5d9beef4a" />


~~~text
// 구면 조화 함수 수식과 CUDA 코드 연결

// 구면조화함수
f_real(θ, φ) ≈ Σ[ℓ = 0..L] Σ[m = −ℓ..ℓ] × a[ℓ, m] × Y_real[ℓ, m](θ, φ)

Y_real[ℓ, m](θ, φ) = 기저함수(방향에 따라 계산되는 값)
a[ℓ, m] = 계수
Σ[ℓ = 0..L] Σ[m = −ℓ..ℓ] = 계수 * 기저함수를 한것을 다 더해서
f_real(θ, φ) = 한채널의 값이 나온다, 예를들어 특정방향에서 빨강채널이라면 이거에 값이 0.8이 나온다던지
-> 이 식은 색 채널 하나를 계산하는 식이다.
-> 카메라 방향에서 각 기저 함수의 값을 구하고,
-> 학습된 계수를 곱해서 전부 더한다.

1. 수식의 (θ, φ) → CUDA의 (x, y, z)
(θ, φ)는 보는 방향을 각도로 표현한 것이다.
CUDA에서는 카메라에서 가우시안 중심으로 향하는 벡터를
길이로 나눠, 같은 방향을 단위벡터 (x, y, z)로 표현한다.

glm::vec3 pos = means[idx];
glm::vec3 dir = pos - campos;
dir = dir / glm::length(dir);

float x = dir.x;
float y = dir.y;
float z = dir.z;



2. 수식의 a[ℓ, m] → CUDA의 sh[k]

3DGS에서는 같은 계산을 R, G, B에 각각 하므로, 계수 하나를 RGB용 숫자 3개로 묶어 저장
sh[i] = (a_i^R, a_i^G, a_i^B)

아래 코드는 전체 계수 배열에서 idx번 가우시안의
계수가 시작하는 위치를 찾는다.

예를 들어 (ℓ, m) = (1, 0)의 계수는 sh[2]에 있다.
빨강의 a[1, 0]은 sh[2].x,
초록의 a[1, 0]은 sh[2].y,
파랑의 a[1, 0]은 sh[2].z에 해당한다.

glm::vec3* sh = ((glm::vec3*)shs) + idx * max_coeffs;

shs : 모든 가우시안의 계수가 저장된 메모리.
(glm::vec3*)shs : 숫자 3개씩, 즉 RGB 계수 묶음으로 읽겠다는 뜻.
+ idx * max_coeffs : idx번 가우시안의 계수 시작 위치로 이동.

sh[0] → 현재 가우시안의 (ℓ=0, m=0) RGB 계수
sh[1] → 현재 가우시안의 (ℓ=1, m=-1) RGB 계수



3. 밴드

밴드0일 때는 -> (0, 0) 이거 한개 들어가 있음
glm::vec3 result = SH_C0 * sh[0];  // Band 0

밴드1일때는 m 이 -1 부터 1까지니까 -1, 0, 1 이렇게 3개 (1, 0), (1, 1), (1, 2)
result = result - SH_C1 * y * sh[1] + SH_C1 * z * sh[2] - SH_C1 * x * sh[3];

밴드2일때는 m 이 -2 부터 2까지니까 -2, -1, 0, 1, 2 이렇게 5개 
~~~

<br/>


  - 앞의 2D 실습에서는 스플랫마다 고정된 RGB를 학습했다.
  - 3DGS에서는 카메라 방향을 넣으면 RGB가 나오는 함수의 계수를 학습한다.
  - 차수를 높이면 방향에 따른 더 세밀한 색 변화를 표현할 수 있다.

<br/>

  - SH_C0, SH_C1 같은 상수는 정해져 있음
  - 기저 함수의 형태도 정해져 있음
  - 여기서 학습하는 것은 계수 a[ℓ,m], 즉 sh[k] 안의 RGB 숫자들


###### [구면 조화 함수](#구면-조화-함수)
###### [Top](#top)

<br/>
<br/>

# EWA스플래팅
  - 3차원에 있는것을 2차원으로 원근 투영을 하게 되면, 현실에서 원이 찌그러지게 보이게 된다. 그런데 그렇게 찌그러지게 원을 투영하면 수학적 공식도 쓰기 어렵고 계산이 어려워 지기 때문에 효율도 떨어지게됨
  - 그래서, 이것을 해결 하기 위해서, 3차원에 있는 중심과 축을 가지고 와서, 그걸 통해서 원을 그려주는 방식을 거치게 된다
  - 투영을 할때 현재 모양을 가장잘 포함하는 2차원 도형을 그린다.
  - 3차원의 타원채를 프로젝션 했을때, 적절한 2차원 타원으로 그릴수 있게 도와줌
    - 예를 들어 길쭉한 타원체라면
      - 옆에서 볼 때: 길쭉한 타원으로 보여야 함
      - 긴 축 방향에서 볼 때: 짧고 둥글게 보여야 함
  - 여기서 공부해야 할것은, 3D 가우시안 하나가 화면의 2D 타원이 되는 과정을 설명할 수 있는 정도면 충분
      
<br/>

~~~text
- 원근 투영에서는 깊이에 따라 화면의 확대율이 달라진다.
  그래서 같은 3D 가우시안도 보는 방향과 거리에 따라
  화면에서 퍼지는 크기와 방향이 달라진다.

- EWA는 이 퍼짐을 2D 가우시안으로 근사한다.
  먼저 3D 가우시안의 중심을 화면에 투영한다.
  그 중심에서 구한 야코비안 J를 사용해
  3D 공분산을 화면의 2D 공분산으로 바꾼다.

  Sigma_2D = J @ Sigma_camera @ J.T

- 화면에 투영된 중심은 타원의 위치를 정한다.
  2D 공분산은 타원의 폭과 기울기를 정한다.
  이 두 값을 구하면 픽셀마다 2D 가우시안 식으로
  가중치를 빠르게 계산할 수 있다.

- 예를 들어 길쭉한 3D 타원체를 옆에서 보면
  화면에서도 길쭉한 타원으로 나타난다.
  긴 축 방향에서 보면 그 길이가 화면에 덜 드러난다.
  나머지 두 축의 길이가 비슷하면 둥글게 보인다.

- 이번 공부의 목표는 3D 가우시안 하나가
  화면의 2D 타원이 되는 과정을 설명하는 것이다.
~~~

<br/>

  - 해당 부분의 상세한 것들은 나중에 다시 공부하도록 한다

###### [EWA스플래팅](#ewa스플래팅)
###### [Top](#top)

<br/>
<br/>

# 렌더링 파이프라인,알파 합성과 타일 기반 래스터화
  - EWA로 화면에 투영한 가우시안들을 최종 이미지로 만드는 과정을 다룬다
    - 볼륨 렌더링
      - 픽셀 하나의 최종 색을 어떻게 계산할까?, 겹치는 가우시안을 가까운 것부터 합성. 앞의 가우시안이 불투명할수록 뒤의 가우시안 색은 덜 반영된다
    - 타일 기반 래스터화
      - 그 계산을 화면 전체에서 어떻게 빠르게 할까? 화면을 16×16 픽셀 타일로 나누고, 가우시안을 겹치는 타일에 배정합니다. (타일 ID, 깊이)로 한 번에 정렬한 뒤, 각 타일의 픽셀을 GPU에서 병렬로 합성

<br/>

~~~text
// 볼륨 렌더링

EWA는 3D 가우시안 하나를 화면 위의 2D 가우시안 타원으로 근사한다.
투영된 중심은 타원의 위치를 정하고, 2D 공분산은 타원의 크기와 방향을 정한다.
그다음에는 화면에서 타원 여러 개가 겹친다. 이때 어느 타원이 어떤 픽셀에 영향을 주는지,
그리고 그 색들을 어떤 순서로 합칠지 정해야 한다

→ 바운딩 박스로 겹치는 타일 찾기
→ 타일별로 가우시안을 깊이순으로 정리
→ 픽셀마다 가까운 가우시안부터 색 합성


T = 1.0    # Transmittance -> 앞쪽 스플랫들을 지나고 남은 투과율
C = 0.0    # Accumulated color -> 1픽셀에 반영 되어야 할 컬러, 스플릿의 컬러들을 섞는다

for i in sorted_gaussians:  # Front-to-back
    # Compute opacity α_i from Gaussian falloff
    alpha = compute_alpha(gaussian_i, pixel) // // 현재 스플릿의 불투명도를 구한다
    
    # Volume rendering: C += T * α * c
    C += T * alpha * color[i] // 현재 해당 픽셀에 있는 스플릿들의 컬러 값을 합산
    
    # Update transmittance: T *= (1 - α)
    T *= (1 - alpha) // // 해당 픽셀에서 현재 스플릿에 적용된 불투명도 만큼 제외하고 다음 스플릿에 적용하기 위해 계산한다
    
    if T < 0.0001: break  # Early termination // 픽셀에 더이상 적용할수 있는 정도가 없으면 해당 픽셀은 끝
~~~

<br/>

  - CUDA코드(볼륨 렌더링)

~~~c++
float T = 1.0f;              // Transmittance -> 앞쪽 스플랫들을 지나고 남은 투과율
float C[CHANNELS] = { 0 };   // Accumulated color -> 1픽셀에 반영 되어야 할 컬러, 스플릿의 컬러들을 섞는다

for (int j = 0; !done && j < min(BLOCK_SIZE, toDo); j++)
{
    // Gaussian evaluation using conic matrix
    float2 d = { xy.x - pixf.x, xy.y - pixf.y };
    float power = -0.5f * (con_o.x * d.x * d.x + con_o.z * d.y * d.y) 
                  - con_o.y * d.x * d.y;
    if (power > 0.0f) continue;

    // Opacity = learned_opacity × Gaussian_falloff
    float alpha = min(0.99f, con_o.w * exp(power));  // 현재 스플릿의 불투명도를 구한다
    if (alpha < 1.0f / 255.0f) continue;`
    
    // Early termination check
    float test_T = T * (1 - alpha);
    // 해당 픽셀에서 현재 스플릿에 적용된 불투명도 만큼 제외하고 다음 스플릿에 적용하기 위해 계산한다

    if (test_T < 0.0001f) {  // 픽셀에 더이상 적용할수 있는 정도가 없으면 해당 픽셀은 끝
        done = true;
        continue;
    }

    // Volume rendering equation: C += T * α * c
    for (int ch = 0; ch < CHANNELS; ch++) // RGB 3컬러를 따로따로 계산
        C[ch] += features[...] * alpha * T;

    // Update transmittance: T *= (1 - α)
    T = test_T;
}

~~~

<br/>

~~~text
// 타일 기반 래스터화

1. 타일 ID와 깊이를 하나의 키로 만든다
먼저 화면을 16×16 픽셀 타일로 나눈다.
각 스플랫의 바운딩 박스가 걸치는 타일마다 정렬 키와 스플랫 ID를 하나씩 기록한다

정렬 키의 상위 32비트는 타일 ID, 하위 32비트는 카메라 기준 깊이를 담는다.
이 키로 전체를 한 번 정렬하면, 타일별로 모이면서 각 타일 안에서는 가까운 순이 된다

예를 들어 A는 타일 0과 1에 걸치고,
B는 타일 0, C는 타일 1에만 걸친다고 하자

             (타일 ID, 깊이, 스플랫)
정렬 전:      (0, 4, A)
              (1, 4, A)
              (0, 1, B)
              (1, 2, C)

정렬 후:      (0, 1, B)
              (0, 4, A)
              (1, 2, C)
              (1, 4, A)


2. 각 타일이 읽을 범위를 찾는다
정렬된 스플랫 ID 목록은 `[B, A, C, A]`다.
타일 ID가 바뀌는 지점을 찾아
각 타일의 시작과 끝 인덱스를 저장한다

타일 0: [0, 2) → B, A
타일 1: [2, 4) → C, A


3. 자기 타일의 픽셀만 그린다
타일 하나를 CUDA 블록 하나가 맡는다.
블록의 스레드는 각각 자기 타일의 픽셀 하나를 계산한다

의 중심이 타일 1에 있어도,
A가 타일 0까지 퍼지면 두 블록 모두 중심 좌표가 필요하다.
두 블록은 같은 스플랫 ID로 GPU 전역 메모리(VRAM)를 읽고,
필요한 데이터를 각자의 공유 메모리에 가져온다

공유 메모리에 올린 중심과 모양은
같은 블록 안의 스레드들이 함께 사용한다.
각 스레드는 자기 픽셀에서 그 중심까지의 거리를 구하고,
그 픽셀의 가우시안 가중치와 최종 색을 계산한다
~~~

<br/>

  - key만드는 cuda코드

~~~c++
__global__ void identifyTileRanges(int L, uint64_t* point_list_keys, uint2* ranges)
{
    uint64_t key = point_list_keys[idx];
    uint32_t currtile = key >> 32;  // Extract tile ID
    
    if (idx == 0)
        ranges[currtile].x = 0;  // First entry
    else
    {
        uint32_t prevtile = point_list_keys[idx - 1] >> 32;
        if (currtile != prevtile)  // Tile transition
        {
            ranges[prevtile].y = idx;  // End previous
            ranges[currtile].x = idx;  // Start current
        }
    }
    
    if (idx == L - 1)
        ranges[currtile].y = L;  // Last entry
}
~~~

<br/>

  - CUDA로직

~~~c++
// Shared memory visible to all 256 threads in this tile
__shared__ int collected_id[256];
__shared__ float2 collected_xy[256];
__shared__ float4 collected_conic_opacity[256];

// Process in batches of 256 Gaussians
for (int i = 0; i < rounds; i++, toDo -= 256)
{
    // COLLABORATIVE LOADING: Each thread loads ONE Gaussian
    int progress = i * 256 + block.thread_rank();  // thread_rank = 0..255
    
    if (range.x + progress < range.y)  // Within this tile's range?
    {
        int coll_id = point_list[range.x + progress];
        
        // Thread N loads data into slot N
        collected_id[block.thread_rank()] = coll_id;
        collected_xy[block.thread_rank()] = points_xy_image[coll_id];
        collected_conic_opacity[block.thread_rank()] = conic_opacity[coll_id];
    }
    
    block.sync();  // ⚠️ CRITICAL: Wait for all 256 threads to finish loading
    
    // Now shared memory contains 256 Gaussians, ready for all threads to use
    // ...
}
~~~

###### [렌더링 파이프라인,알파 합성과 타일 기반 래스터화](#렌더링-파이프라인알파-합성과-타일-기반-래스터화)
###### [Top](#top)


















