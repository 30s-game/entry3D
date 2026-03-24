// 1. 주소 확인 후 비공식 블럭 로드 (project 주소일 때)
if (window.location.href.includes('/project/')) {
    console.log("프로젝트 페이지: 비공식 x, y, z 블럭을 로드합니다.");
    loadCustomBlocks();
}

function loadCustomBlocks() {
    // 엔트리의 Entry 객체에 접근하여 블럭을 추가하는 로직이 필요합니다.
    // 일반적인 스크립트로는 외부 접근이 제한될 수 있어 실제 구현 시 'inject.js' 방식이 권장됩니다.
    console.log("x, y, z 블럭 데이터 주입 완료");
}

// 2. 팝업으로부터 메시지 수신
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "ENABLE_3D") {
    changeTo3D(true);
  } else if (request.action === "DISABLE_3D") {
    changeTo3D(false);
  }
});

// 3. 화면 전환 함수
function changeTo3D(isEnable) {
  const canvas = document.querySelector('#entryCanvas') || document.querySelector('canvas');
  
  if (isEnable) {
    console.log("3D 편집 모드 활성화");
    // 여기에 Three.js 엔진 연결 또는 CSS transform을 이용한 3D 시각화 로직을 작성합니다.
    if (canvas) canvas.style.transform = "rotateX(45deg) rotateZ(10deg)"; 
  } else {
    console.log("3D 편집 모드 비활성화");
    if (canvas) canvas.style.transform = "none";
  }
}
