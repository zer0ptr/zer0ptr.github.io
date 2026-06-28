if (typeof $ === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js';
    document.head.appendChild(script);
}


$(document).on('pjax:complete', function() {
    if (window.aplayers) {
        window.aplayers.forEach(function(ap) {
            ap.play();
        });
    }
});