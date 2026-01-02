const btn = document.getElementById("showFlowersBtn");
const music = document.getElementById("bgm");

music.volume = 0;

btn.addEventListener("click", () => {
  document.body.classList.add("show-flowers");

  music.play();

  // fade in volume
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.8) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
});
