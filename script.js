document.addEventListener('DOMContentLoaded', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    var playButton = document.getElementById('playButton');
    var stopButton = document.getElementById('stopButton');
    var pauseButton = document.getElementById('pauseButton');

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

    var img = document.getElementById('img');
    img.addEventListener('mouseover', function() {
        chipa.play();
    });
    img.addEventListener('mouseout', function() {
        chipa.pause();
        // chipa.currentTime = 0; // Reset playback to the beginning
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