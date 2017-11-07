$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
$(document).ready(function() {
  $('.cookie-message').cookieBar({
        closeButton : '.cookie-close'
    });
});

window.BACKEND_URL = 'https://ig4sv77efa.execute-api.eu-west-1.amazonaws.com/Prod';
