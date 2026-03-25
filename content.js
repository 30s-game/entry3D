// 1. 페이지 접속 시 비공식 블럭 파일(blocks.js)을 콘솔에 입력하듯 실행
const script = document.createElement('script');
script.src = chrome.runtime.getURL('blocks.js');
(document.head || document.documentElement).appendChild(script);

console.log("Entry3D: 저장소 주소에서 비공식 블럭을 성공적으로 첨가했습니다.");

// 2. 팝업창에서 오는 3D 제어 신호 수신
chrome.runtime.onMessage.addListener((request) => {
    const canvas = document.querySelector('canvas') || document.querySelector('.entryCanvasWrapper');
    if (!canvas) return;

    if (request.mode === "3D_ON") {
        canvas.style.transform = "perspective(1000px) rotateX(45deg) rotateY(5deg)";
        canvas.style.transition = "transform 0.5s";
    } else {
        canvas.style.transform = "none";
    }
});
