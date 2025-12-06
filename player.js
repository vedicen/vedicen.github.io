const players = document.querySelectorAll('.audio-player');
let currentAudio = null;

players.forEach(player => {
    const audio = document.createElement('audio');
    audio.src = player.dataset.src;
    player.appendChild(audio);

    const playBtn = player.querySelector('.playBtn');
    const seekBar = player.querySelector('.seekBar');
    const volumeControl = player.querySelector('.volumeControl');

    // Воспроизведение/пауза
    playBtn.addEventListener('click', () => {
        // Остановить предыдущий, если он есть и это не тот же трек
        if(currentAudio && currentAudio !== audio){
            currentAudio.pause();
            currentAudio.parentElement.querySelector('.playBtn').textContent = '▶️';
        }

        if(audio.paused){
            audio.play();
            playBtn.textContent = '⏸️';
            currentAudio = audio;
        } else {
            audio.pause();
            playBtn.textContent = '▶️';
        }
    });

    // Громкость
    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });

    // Перемотка
    seekBar.addEventListener('input', () => {
        audio.currentTime = (seekBar.value / 100) * audio.duration;
    });

    audio.addEventListener('timeupdate', () => {
        if(audio.duration) seekBar.value = (audio.currentTime / audio.duration) * 100;
    });

    audio.addEventListener('ended', () => {
        playBtn.textContent = '▶️';
    });
});

function main() {
    window.location.href = "index.html";
}