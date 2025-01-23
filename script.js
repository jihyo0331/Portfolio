let isThrottled = false;

const focusEl = document.querySelector("#focus");

if (!focusEl) {
    console.error("#focus element not found in the DOM.");
} else {
    const handleMouseMove = (event) => {
        if (!isThrottled) {
            isThrottled = true;
            requestAnimationFrame(() => {
                updateFocus(event);
                isThrottled = false;
            });
        }
    };

    document.addEventListener("mousemove", handleMouseMove);

    function updateFocus(event) {
        const focusElX = event.clientX + "px";
        const focusElY = event.clientY + "px";
        focusEl.style.background = `radial-gradient(
            circle ${getScreenAvg() * 0.15}px at ${focusElX} ${focusElY}, /* 크기 증가 */
            rgba(0, 0, 0, 0.01) 20%,
            rgba(0, 0, 0, 0.5) 70%,
            rgba(0, 0, 0, 0.8) 100%)`;
    }

    function getScreenAvg() {
        return Math.floor((window.innerWidth + window.innerHeight) * 0.5);
    }
}
// 페이지 클릭 이벤트 추가
document.addEventListener("click", () => {
    // 다음 페이지 URL로 이동
    window.location.href = "https://sites.google.com/view/jihyojeong/portfolio"; // 다음 페이지 경로를 여기에 작성
});

