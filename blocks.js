// 비공식 블럭(x, y, z) 정의 및 주입 함수
(function injectEntryBlocks() {
    if (typeof Entry === 'undefined' || !variableContainer) {
        setTimeout(injectEntryBlocks, 500); // 엔트리가 로드될 때까지 재시도
        return;
    }

    console.log("Entry3D: 비공식 블럭 저장소에서 데이터를 불러옵니다...");
    Entry.variableContainer.getVariableByName('@3D')?.setValue(1)//"@3D"라는 변수를 찾아 그 변수 값을 1로 변경

    // 예시: x, y, z 관련 비공식 블럭 추가 로직
    // 실제 엔트리 블럭 구조에 맞게 데이터를 구성하세요.
    const customBlocks = [
        { name: 'get_x_pos', text: 'x 좌표값' },
        { name: 'get_y_pos', text: 'y 좌표값' },
        { name: 'get_z_pos', text: 'z 좌표값' }
    ];

    console.log("비공식 블럭 로드 완료: ", customBlocks);
    // 실제 주입 코드: Entry.staticBlocks.push(...);
})();
