// document.addEventListener('load', onLoad)
// function onLoad() {
//     document.querySelector('html'.classList.add('smooth'));
// }

const clock = document.querySelector(".clock");
//24год формат
const option = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}; //
const showClock = () => (clock.innerText = new Date().toLocaleTimeString());
setInterval(showClock, 1000);

document.addEventListener('load', onLoad);
function onLoad() {
  document.querySelector('html').classList.add("smooth");
}