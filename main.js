 $(document).ready(function() {
            // Smooth scrolling for anchor links
            $('a[href*="#"]').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate(
                    {
                        scrollTop: $($(this).attr('href')).offset().top,
                    },
                    500,
                    'linear'
                );
            });
            
            // Animation on scroll
            function animateOnScroll() {
                $('.animate-up, .animate-left, .animate-right').each(function() {
                    var position = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    
                    if (scroll + windowHeight > position) {
                        $(this).addClass('animate__animated animate__fadeInUp');
                    }
                });
            }
            
            // Run once on page load
            animateOnScroll();
            
            // Run on scroll
            $(window).scroll(function() {
                animateOnScroll();
            });
            
            // Testimonial carousel animation
            $('#testimonialCarousel').on('slide.bs.carousel', function () {
                $('.testimonial-card').removeClass('animate__animated animate__fadeIn');
                setTimeout(function() {
                    $('.carousel-item.active .testimonial-card').addClass('animate__animated animate__fadeIn');
                }, 50);
            });
            
            // Initialize first testimonial animation
            $('.carousel-item.active .testimonial-card').addClass('animate__animated animate__fadeIn');
        });