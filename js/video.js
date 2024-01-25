  
  $(document).ready(function() {
      
    $('#exampleModal').on('shown.bs.modal', function () {
      $('#video')[0].play();
    });
  
    $('#exampleModal').on('hidden.bs.modal', function () {
      $('#video')[0].pause();
      video.load();
    });      
      
    });
