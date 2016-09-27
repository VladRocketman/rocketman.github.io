$(document).ready(function() {

    // var j$ = jQuery.noConflict(); // фикс конфликта

    $('.fancybox').fancybox();

    $('.fancybox-buttons').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
            title : {
                type : 'inside'
            },
            buttons : {}
        },

        afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });

    $('.fancybox-thumbs').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,
        arrows    : false,
        nextClick : true,

        helpers : {
            thumbs : {
                width  : 50,
                height : 50
            }
        }
    });

    $(window).on('load', function () {
    var $preloader = $('#preload'),
        $anim_item   = $preloader.find('.item');
    $anim_item.delay(200).fadeOut();
    $preloader.delay(200).fadeOut('slow');
});
});