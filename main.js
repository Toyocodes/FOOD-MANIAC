       
        //PRELOADER
        // document.addEventListener("DOMContentLoaded", function() {
        //     var preloader = document.querySelector(".preloader");
        //     preloader.style.display = "none";
        //   });
          
       
       // for slider
        var slideImg = document.getElementById('slideImg');
        var images = new Array(
            'images/pancakey.png',
            'images/home-img.png',
            'images/newpasta.png',
            'images/drinks.png',
            'images/po-pizza.png'
            
        )
        var len= images.length;
        var i = 0;

        function slider(){
            if (i>len-1){
            i=0
            }
            slideImg.src = images[i];
            i++

            setTimeout('slider()', 3000);
            }
           
        
        // for menubtn
            
        var menubar = document.getElementById('menubar');
        var navbar = document.getElementById('navbar');

        menubar.addEventListener ('click', function(){
           
            navbar.classList.toggle('mobile-menu');
        })
        function closeMenu(){
            navbar.classList.remove('mobile-menu');
        }

    
       
        // for fixed navbar
        window.onscroll = () =>{
            menubar.classList.remove('fa-times');
            navbar.classList.remove('mobile-menu');

    
            if(window.scrollY > 60){
              document.querySelector('#scroll-top').classList.add('mobile-menu');
            }else{
              document.querySelector('#scroll-top').classList.remove('mobile-menu');
            }
          }

          

        // for faq

        var questions = document.querySelectorAll(".faq-question");
        var i;

        for (i = 0; i < questions.length; i++) {
            questions[i].addEventListener("click", function () {

                this.classList.toggle("open-faq");

                var body = this.nextElementSibling;
                if (body.style.display === "block") {
                    body.style.display = "none";
                } 
                else {
                    body.style.display = "block";
                }
            });
        } 


     //EMAIL SUBMIT SECTION BEGINS
       function sendEmail(){
            Email.send({
                // SecureToken: "a9493dfc-30f4-479b-8772-c6e60b3ec83a",
                Host : "smtp.gmail.com",
                Username : "toyjad@gmail.com",
                Password : "57D77B2E1DE2918B559DCF03F0A15DCAAB87",
                To : 'toyjad@gmail.com',
                From : document.getElementById('email').value,
                Subject : "Customers order",
                Body : "Name: " + document.getElementById('name').value 
                + "<br> Email: " + document.getElementById('email').value
                + "<br> Food: " + document.getElementById('food').value
                + "<br> Phone no: " + document.getElementById('phone').value
                + "<br> Address: " + document.getElementById('address').value
            }).then(
            message => alert("Message sent successfully")
            );
       }

                // Host : "smtp.elasticmail.com",
                // Username : "toyjad@gmail.com",
                // Password : "57D77B2E1DE2918B559DCF03F0A15DCAAB87",
     //EMAIL SUBMIT SECTION ENDS
          
    

        