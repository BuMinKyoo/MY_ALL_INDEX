<br/>

###### Top

- [Computer Graphics 기초이론](#computer-graphics-기초이론)
- [Computer Vision 기초이론](#computer-vision-기초이론)
- [가우시안 함수](#가우시안-함수)
- [미분 가능한 렌더링](#미분-가능한-렌더링)

 

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





























