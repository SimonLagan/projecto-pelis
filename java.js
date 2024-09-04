const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  console.log("le diste click al boton de play");
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause() {
  $video.pause();
  console.log("le diste click al boton de pausa");
  $play.hidden = false;
  $pause.hidden = true;
}

$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handleBackward() {
  console.log("para atras 10 segundos", $video.currentTime);
  $video.currentTime = $video.currentTime - 10;
}
function handleForward() {
  console.log("para adelante 10 segundos", $video.currentTime);
  $video.currentTime = $video.currentTime + 10;
}

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  console.log("ha cargado el video", $video.duration);
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  console.log("holi", $video.currentTime);
}

$progress.addEventListener("input", handleInput);
function handleInput() {
  $video.currentTime = $progressValue;
  console.log($progress.value);
}
