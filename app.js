$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 200){
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
            "Software Engineer", " Web Developer", " Web Designer",
            "App Designer", "UI/UX Designer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: [
            "Software Engineer", " Web Developer", " Web Designer",
            "App Designer", "UI/UX Designer"
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

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "-500px";
}
function closemenu(){
    sidemeu.style.right = "500px";
}
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');

form.addEventListener('.submit', e => {
   e.preventDefault();
   validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const usernameValue = username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();

    if(usernameValue === ''){
      setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else{
       setSuccess(email); 
    }
};










