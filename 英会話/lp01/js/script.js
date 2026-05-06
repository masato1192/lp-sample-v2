$(function() {
    initializeHeaderState();
    initializeVoiceSlider();
    initializeFaqAccordion();
    initializeSmoothScroll();

    function initializeHeaderState() {
        var $window = $(window);
        var $header = $(".js-header");

        updateHeader();
        $window.on("scroll", updateHeader);

        function updateHeader() {
            $header.toggleClass("is-scrolled", $window.scrollTop() > 8);
        }
    }

    function initializeVoiceSlider() {
        if (typeof Swiper === "undefined") {
            return;
        }

        new Swiper(".js-voice-swiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            pagination: {
                el: ".js-voice-pagination",
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 14
                },
                760: {
                    slidesPerView: 2,
                    spaceBetween: 18
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }

    function initializeFaqAccordion() {
        $(".js-faq-button").on("click", function() {
            var $button = $(this);
            var $item = $button.closest(".js-faq-item");
            var $answer = $item.find(".js-faq-answer");
            var isOpen = $item.hasClass("is-open");

            $item.toggleClass("is-open", !isOpen);
            $button.attr("aria-expanded", String(!isOpen));
            $answer.stop(true, true).slideToggle(180);
        });
    }

    function initializeSmoothScroll() {
        $(".js-scroll-link").on("click", function(event) {
            var targetId = $(this).attr("href");
            var targetElement;

            if (!targetId || targetId.charAt(0) !== "#") {
                return;
            }

            targetElement = document.getElementById(targetId.slice(1));
            if (!targetElement) {
                return;
            }

            event.preventDefault();
            $("html, body").animate({
                scrollTop: $(targetElement).offset().top
            }, 450);
        });
    }
});
