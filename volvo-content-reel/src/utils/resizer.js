//RESIZER FUNCTIONS
const corner = document.getElementById("corner");
function resizeWindow(e) {
  const size = {
    w: Math.max(50, Math.floor(e.clientX + 5)),
    h: Math.max(50, Math.floor(e.clientY + 5)),
  };
  parent.postMessage({ pluginMessage: { type: "resize", size: size } }, "*");
}
corner.onpointerdown = (e) => {
  corner.onpointermove = resizeWindow;
  corner.setPointerCapture(e.pointerId);
};
corner.onpointerup = (e) => {
  corner.onpointermove = null;
  corner.releasePointerCapture(e.pointerId);
};