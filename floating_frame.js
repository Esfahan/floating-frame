/*
* floating-frame
* - It generates floating iframe on the web page.
*
* version 1.0.0
*
* The MIT License (MIT)
* Copyright (c) 2016 Esfahan
*
*/
var floating_frame = {

    action : function(target) {

        $(target).on('click', function() {
            floating_frame.initialize(target, this);

            // generate floating_frame
            floating_frame.open.container();
            floating_frame.open.inners();

            // close event
            floating_frame.close();

            // style for floating_frame
            floating_frame.styles();

            $(floating_frame.elements.modal.outer).fadeIn();
        });

    },

    initialize : function(target, self) {
        this.link = floating_frame.params.link(self);
        this.device = floating_frame.params.device(self);

        this.classes = floating_frame.params.classes();
        this.elements = floating_frame.params.elements();
        this.positions = floating_frame.params.positions();
    },

    open : {

        container : function() {

            var container = $('<div class="' + floating_frame.classes.container + '"></div>')

            if(!$(floating_frame.elements.container).length) {
                $('body').append(container);
            }

        },

        inners : function() {

            // modalbox
            var $modal_box = $('<div class="' + floating_frame.classes.modal.outer + '"><div class="' + floating_frame.classes.modal.inner +'"></div></div>');
            // close button
            var $close_button = $('<a href="javascript:void(0);" class="' + floating_frame.classes.modal.close + '">close</a>');
            // contents
            var $contents = $('<iframe class="' + floating_frame.classes.modal.iframe + '" frameborder="0" hspace="0" allowtransparency="true" scrolling="auto" src="' + floating_frame.link + '"></iframe>');

            // append modal box
            $($modal_box).appendTo(floating_frame.elements.container);
            // append close_button
            $($close_button).appendTo(floating_frame.elements.modal.inner);
            // append contents
            $($contents).appendTo(floating_frame.elements.modal.inner);
        }

    },

    close : function() {

        $(floating_frame.elements.modal.close + ',' + floating_frame.elements.container).click(function(e) {
            if (e.target === this) {
                $(floating_frame.elements.container).fadeOut().remove();
            }
        });

    },

    params : {
        classes : function() {
            var classes = {};
            classes.modal = {};

            classes.container = 'modal_container';
            classes.modal.outer = 'modal_outer';
            classes.modal.inner = 'modal_inner';
            classes.modal.close = 'modal_close';
            classes.modal.iframe = 'modal_iframe';

            return classes;
        },

        elements : function() {
            var elements = {};
            elements.modal = {};

            elements.container = '.' + floating_frame.classes.container;
            elements.modal.outer = '.' + floating_frame. classes.modal.outer;
            elements.modal.inner = '.' + floating_frame.classes.modal.inner;
            elements.modal.close = '.' + floating_frame.classes.modal.close;
            elements.modal.iframe = '.' + floating_frame.classes.modal.iframe;

            return elements;
        },

        link : function(self) {
            return $(self).data('href');
        },

        device : function(self) {
            return $(self).data('device');
        },

        positions : function() {
            var positions = {};
            positions.window = {};
            positions.outer = {};
            positions.close_button = {};

            // window height
            //positions.window.height = $(window).height();
            // for FireFox
            positions.window.height = window.innerHeight;
            // window width
            positions.window.width = $(window).width();

            // modal height
            positions.outer.height = positions.window.height * 0.7;
            // modal width
            positions.outer.width = positions.window.width * 0.5;

            // close_button height
            positions.close_button.height = '50px';

            return positions;
        }
        
    },

    styles : function() {

        // close button
        $(floating_frame.elements.modal.close).css({
            'position' : 'relative',
            'top' : '0px',
            'left' : '0px',
            'float' : 'right',
            'display' : 'block',
            'height' : floating_frame.positions.close_button.height,
            'width' : '50px',
            'z-index' : '20004',
            //'background': 'url(img/close.png) no-repeat',
        });

        // container
        $(floating_frame.elements.container).css({
            'position' : 'fixed',
            'top' : '0',
            'left' : '0',
            'background-color' : 'rgba(0,0,0,0.6)',
            'height' : '100%',
            'width' : '100%',
            'z-index' : '10001',
            'cursor' : 'pointer',
        });

        // outer
        $(floating_frame.elements.modal.outer).css({ 
            'width' : floating_frame.positions.outer.width + 'px',
            'height' : floating_frame.positions.outer.height + 'px',
            'border' : '1px solid #fff',
            'box-shadow': '0px 2px 7px #292929',
            '-moz-box-shadow': '0px 2px 7px #292929',
            '-webkit-box-shadow': '0px 2px 7px #292929',
            'border-radius' : '10px',
            '-moz-border-radius' : '10px',
            '-webkit-border-radius' : '10px',
            'background': '#f2f2f2', 
            'z-index' : '20001',
            'margin' : '100px auto',
            'cursor' : 'default',
        });

        // inner
        $(floating_frame.elements.modal.inner).css({
            'background-color' : '#fff',
            'width' : '95%',
            'height' : '95%',
            'border-radius' : '10px',
            '-moz-border-radius' : '10px',
            '-webkit-border-radius' : '10px',
            'z-index' : '20002',
            'cursor' : 'default',
            'margin' : '10px auto',
        });

        // iframe
        $(floating_frame.elements.modal.iframe).css({
            'position' : 'relative',
            'top' : '-' + floating_frame.positions.close_button.height,
            'width' : '100%',
            'height' : '100%',
            'z-index' : '20003',
        });

    }

};
