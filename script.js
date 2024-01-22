document.addEventListener('DOMContentLoaded', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    var playButton = document.getElementById('playButton');
    var stopButton = document.getElementById('stopButton');
    var pauseButton = document.getElementById('pauseButton');
    var img = document.getElementById('img');
    img.addEventListener('mouseover', function() {
        backgroundMusic.play();
    });

    playButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    // stopButton.addEventListener('click', function() {
    //     backgroundMusic.pause();
    //     backgroundMusic.currentTime = 0; // Reset playback to the beginning
    // });

    pauseButton.addEventListener('click', function() {
        backgroundMusic.pause();
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     var backgroundMusic = document.getElementById('backgroundMusic');
//     var playButton = document.getElementById('playButton');
//     var stopButton = document.getElementById('stopButton');
//     var img = document.getElementById('img');

//     img.addEventListener('mouseover', function() {
//         backgroundMusic.play();
//     });

    // img.addEventListener('mouseout', function() {
    //     backgroundMusic.pause();
    //     backgroundMusic.currentTime = 0; // Reset playback to the beginning
    // });
// });