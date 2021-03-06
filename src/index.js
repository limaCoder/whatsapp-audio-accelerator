const interval = setInterval(() => {
  const header = document.querySelector("._1QUKR");
  if (header) {
    console.log(header);
    clearInterval(interval)
  }

  const button = document.createElement('button');
  button.innerHTML = "2x";

  button.classList.add("twoTimesButton");

  button.addEventListener('click', () => {
    button.classList.toggle('active-button');

    const audios = document.querySelectorAll('audio');
    console.log(audios);

    if (button.classList.contains('active-button')) {
      audios.forEach((audio) => {
        console.log(audio);
        audio.playbackRate = 2;
        audio.defaultPlaybackRate = 2;
      })
    } else {
      audios.forEach(audio => {
        audio.playbackRate = 1;
        audio.defaultPlaybackRate = 1;
      })
    }
  })

  header.appendChild(button);

}, 3000)
