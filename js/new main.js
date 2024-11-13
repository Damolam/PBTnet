!function(e) {
    "use strict";
    var a = e(window);
    a.on("load", function() {
        var t = e(document)
          , n = e("html, body")
          , o = e("body");
        e(".loader").delay("500").fadeOut(2e3),
        t.on("click", ".off-canvas-open", function(a) {
            a.preventDefault(),
            e(".off-canvas").addClass("active")
        }),
        t.on("click", ".off-canvas-close", function(a) {
            a.preventDefault(),
            e(".off-canvas").removeClass("active")
        }),
        e(".off-canvas-dropdown").parent("li").children("a").append(function() {
            return '<button class="off-canvas-dropdown-toggle icon-element icon-element-sm" type="button"><i class="fal fa-angle-down"></i></button>'
        }),
        e(".off-canvas-dropdown-toggle").on("click", function() {
            var a = e(this);
            return a.toggleClass("active"),
            a.parent().parent().siblings().children("a").find(".off-canvas-dropdown-toggle").removeClass("active"),
            a.parent().parent().children(".off-canvas-dropdown").slideToggle(),
            a.parent().parent().siblings().children(".off-canvas-dropdown").slideUp(),
            !1
        }),
        a.on("scroll", function() {
            var t = e(".header-area")
              , n = e(".header--area");
            a.scrollTop() ? (t.addClass("fixed-top"),
            o.css("padding-top", n.outerHeight() + "px")) : (t.removeClass("fixed-top"),
            o.css("padding-top", "0"));
            var s = e("#back-to-top");
            a.scrollTop() > 300 ? s.addClass("active") : s.removeClass("active")
        }),
        t.on("click", "#back-to-top", function() {
            n.animate({
                scrollTop: 0
            }, 1e3)
        });
        var s = e(".hero-slider");
        s.length && s.owlCarousel({
            items: 1,
            nav: !1,
            dots: !0,
            autoplay: !1,
            loop: !0,
            smartSpeed: 1e3,
            animateOut: "animate__slideOutDown",
            animateIn: "animate__fadeIn"
        }),
        s.on("translate.owl.carousel", function() {
            e(".hero-slider .sec-title, .hero-slider .list-item").removeClass("animate__animated animate__pulse").css("opacity", "0"),
            e(".hero-slider .sec-desc").removeClass("animate__animated animate__fadeInUp").css("opacity", "0"),
            e(".hero-slider .btn").removeClass("animate__animated animate__fadeInUp").css("opacity", "0")
        }),
        s.on("translated.owl.carousel", function() {
            e(".hero-slider .sec-title, .hero-slider .list-item").addClass("animate__animated animate__pulse").css("opacity", "1"),
            e(".hero-slider .sec-desc").addClass("animate__animated animate__fadeInUp").css("opacity", "1"),
            e(".hero-slider .btn").addClass("animate__animated animate__fadeInUp").css("opacity", "1")
        });
        var i = e("#countdown");
        i.length && i.countdown({
            year: 2022,
            month: 9,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            timezone: -6
        });
        var l = e(".counter");
        l.length && l.counterUp({
            delay: 20,
            time: 2e3
        });
        var r = e(".lazy");
        r.length && r.lazy();
        var d = e(".testimonial-slider");
        d.length && d.owlCarousel({
            loop: !0,
            items: 5,
            nav: !1,
            dots: !0,
            smartSpeed: 500,
            autoplay: !1,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1025: {
                    items: 4
                },
                1440: {
                    items: 5
                }
            }
        });
        var c = e('[data-fancybox="event-gallery"]');
        c.length && c.fancybox({
            buttons: ["zoom", "share", "fullScreen", "download", "close"]
        });
        var p = e('[data-fancybox="preview-video"]');
        p.length && p.fancybox();
        var f, m = document.querySelector("#send-message-btn"), u = e(".contact-form"), v = e(".alert-message");
        function g(e) {
            m.innerHTML = "Send Message",
            v.fadeIn().removeClass("alert-danger").addClass("alert-success"),
            v.text(e),
            setTimeout(function() {
                v.fadeOut()
            }, 3e3),
            u.find('input:not([type="submit"]), textarea').val("")
        }
        function h(e) {
            m.innerHTML = "Send Message",
            v.fadeIn().removeClass("alert-success").addClass("alert-danger"),
            v.text(e.responseText),
            setTimeout(function() {
                v.fadeOut()
            }, 3e3)
        }
        u.submit(function(a) {
            a.preventDefault(),
            f = e(this).serialize(),
            m.innerHTML = "Sending...",
            setTimeout(function() {
                e.ajax({
                    type: "POST",
                    url: u.attr("action"),
                    data: f
                }).done(g).fail(h)
            }, 2e3)
        }),
        e(".toggle-password").on("click", function() {
            e(this).toggleClass("active");
            var a = e(".password-field");
            "password" === a.attr("type") ? a.attr("type", "text") : a.attr("type", "password")
        })
    })
}(jQuery);
