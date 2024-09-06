document.addEventListener("DOMContentLoaded", () => {
  const $video = document.querySelector("#video");
  const $play = document.querySelector("#play");
  const $pause = document.querySelector("#pause");
  const $backward = document.querySelector("#backward");
  const $forward = document.querySelector("#forward");
  const $progress = document.querySelector("#progress");
  const $volumeUp = document.querySelector("#volumeUp");
  const $volumeDown = document.querySelector("#volumeDown");
  const $volumeMute = document.querySelector("#volumeMute");

  // Funciones de reproducción y pausa
  $play.addEventListener("click", () => {
    $video.play();
    console.log("Le diste clic al botón de play");
    $play.hidden = true;
    $pause.hidden = false;
  });

  $pause.addEventListener("click", () => {
    $video.pause();
    console.log("Le diste clic al botón de pausa");
    $play.hidden = false;
    $pause.hidden = true;
  });

  // Funciones de avance y retroceso
  $backward.addEventListener("click", () => {
    $video.currentTime = Math.max($video.currentTime - 10, 0);
    console.log("Retrocediendo 10 segundos", $video.currentTime);
  });

  $forward.addEventListener("click", () => {
    $video.currentTime = Math.min($video.currentTime + 10, $video.duration);
    console.log("Avanzando 10 segundos", $video.currentTime);
  });

  // Funciones de progreso
  $video.addEventListener("loadedmetadata", () => {
    console.log("Ha cargado el video", $video.duration);
    $progress.max = $video.duration; // Establece el valor máximo de la barra de progreso
  });

  $video.addEventListener("timeupdate", () => {
    // Solo actualiza la barra de progreso si el video tiene un tiempo actual válido
    if (!isNaN($video.currentTime)) {
      $progress.value = $video.currentTime;
      console.log("Tiempo actual", $video.currentTime);
    }
  });

  $progress.addEventListener("input", () => {
    // Asegúrate de que la barra de progreso no se establezca fuera del rango del video
    if (
      !isNaN($progress.value) &&
      $progress.value >= 0 &&
      $progress.value <= $video.duration
    ) {
      $video.currentTime = $progress.value;
      console.log("Progreso actualizado", $progress.value);
    }
  });

  // Funciones de control de volumen
  $volumeUp.addEventListener("click", () => {
    $video.volume = Math.min($video.volume + 0.1, 1); // Aumenta el volumen en 0.1, máximo 1
    console.log("Volumen aumentado", $video.volume);
  });

  $volumeDown.addEventListener("click", () => {
    $video.volume = Math.max($video.volume - 0.1, 0); // Disminuye el volumen en 0.1, mínimo 0
    console.log("Volumen disminuido", $video.volume);
  });

  $volumeMute.addEventListener("click", () => {
    $video.volume = 0; // Silencia el video
    console.log("Volumen silenciado");
  });
});
