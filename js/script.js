document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('music');
    var playButton = document.getElementById('playButton');
    var replayButton = document.getElementById('replayButton');
    var pauseButton = document.getElementById('pauseButton');
    var nextButton = document.getElementById('nextButton')
    var timeline = document.getElementById('audio-track');
    var progress = document.getElementById('time');
    var timeInfo = document.getElementById('timeInfo');
    var trackInfo = document.getElementById('trackInfo');


    var playlist = [
        { name: 'CHIPI CHIPI CHAPA CHAPA', source: 'chipa.mp3' },
        { name: 'Rick Song', source: 'rick.mp3' }
    ];

    var numTrack = 0

    // playButton.addEventListener('click', function() {
    //     if (music.paused) {
    //         music.play();
    //         playButton.textContent = 'pause';
    //     } else {
    //         music.pause();
    //         playButton.textContent = 'play';
    //     }
    // });
    
    playButton.addEventListener('click', function() {
        music.play();
    });

    pauseButton.addEventListener('click', function() {
        music.pause();
    });

    // replayButton.addEventListener('click', function() {
    //     music.currentTime=0;
    //     music.play();
    // });

    // nextButton.addEventListener('click', function() {
    //     numTrack = (numTrack + 1) % playlist.length; // Move to the next track in a loop
    //     loadTrack(numTrack)
    // });

    function loadTrack(index) {
        music.src = './music/' + playlist[index].source;
        music.currentTime = 0;

        // start auto play music

        // music.play(); 
        updateTrackInfo(index);
    }

    music.addEventListener('timeupdate', function() {
        var percentage = (music.currentTime / music.duration) * 100;
        progress.style.width = percentage + '%';

        var currentTime =  formatTime(music.currentTime);
        var duration = formatTime(music.duration);

        timeInfo.textContent = currentTime + ' / ' + duration;
    });

    music.addEventListener('ended', function() {
        // When the current track ends, automatically switch to the next track
        numTrack = (numTrack + 1) % playlist.length;
        loadTrack(numTrack);
    });

    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    function updateTrackInfo(index) {
        // now playing
        trackInfo.textContent = '' + playlist[index].name;
    }

    loadTrack(numTrack);

});