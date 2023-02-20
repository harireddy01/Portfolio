$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 250){
            $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
                }

          // Scrolling Button Btn
          if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
            }else{
            $('.scroll-up-btn').removeClass("show");
            }   
    });

    var typed = new Typed(".typing-1",{
        strings: [
            "AWS Developer", "AWS Devops Engineerr"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: [
            "AWS Developer", "AWS Devops Engineer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // owl carousel animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        navigation:true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
 

});

    function sendmessage() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "harireddy01.cv@gmail.com",
        Password: "20r01a05a0_",
        To: 'harireddy01.cv@gmail.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }













