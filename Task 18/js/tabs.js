$('.tab-list').each(function() {
    var $this = $(this);
    var $tab = $this.find('a');
    var $Link = $tab.find('a');
    var $panel = $($Link.attr('href'));

    $this.on('click', '.tab-control', function (e) {
        e.preventDefault();
        var $link = $(this);
        id = this.hash;

        if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });
});