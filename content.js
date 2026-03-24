// 1. 비공식 블럭(x, y, z) 로드 (주소 확인 후 자동 실행)
console.log("Entry3D: 블럭을 준비합니다.");

// 2. 팝업 메시지 수신 시 화면 변환
chrome.runtime.onMessage.addListener((request) => {
  const canvas = document.querySelector('canvas') || document.querySelector('.entryCanvasWrapper');
  
  if (canvas) {
    if (request.mode === "3D_ON") {
      canvas.style.transform = "perspective(800px) rotateX(45deg)";
      canvas.style.transition = "0.5s";
    } else {
      canvas.style.transform = "none";
    }
  }
});
