function ChangeImage(gallery, amount) { // amount кол-во картинок в папке images
    gallery = gallery;
    amount = amount;
    slbtNext = gallery.querySelector(".slide-next");
    slbtPrev = gallery.querySelector(".slide-prev");
    imagesArr = gallery.querySelectorAll('img');

    currImg1 = imagesArr[0];
    currImg2 = imagesArr[1];

    var m = 0,
        n = 1;

    slideNext = function (){
        switch(m) {
            case amount - 2:
                m = amount - 1;
                n = 0;

                currImg1.src = "images/img-" + m + ".png";
                currImg2.src = "images/img-" + n + ".png";

                m = -1;
                n = 0;
                break;

            default:
                if(m === (amount - 1) && n === amount) {
                    m = -1;
                    n = 0;
                }

                m++;
                n++;

                currImg1.src = "images/img-" + m + ".png";
                currImg2.src = "images/img-" + n + ".png";
        }
    }
    
    slidePrev = function () {
        switch(m) {
            case 0:            

                currImg1.src = "images/img-" + (amount - 1) + ".png";
                currImg2.src = "images/img-" + 0 + ".png";
    
                m = amount - 1;
                n = amount;
    
                break;

            default:
                if(m === - 1 && n === 0) {
                    m = amount - 1;
                    n = amount;
                }

                m--;
                n--;

                currImg1.src = "images/img-" + m + ".png";
                currImg2.src = "images/img-" + n + ".png";

                break;
        }

    }

    function Handler() {
        slideNext();
    }

    function Handler1() {
        slidePrev();
    }

    slbtNext.addEventListener('click', Handler);
    slbtPrev.addEventListener('click', Handler1);
};

var Regexp = {
    search : /^[а-яА-ЯёЁa-zA-Z0-9/\s/]+$/,
    name : /^[а-яА-ЯёЁa-zA-Z0-9-\ ]{1,20}$/,
    email : /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    message : /^[а-яА-ЯёЁa-zA-Z0-9-_ )(\.,:;""]{1,300}$/
};

function ValidMail(mailForm, submit) {
    mailForm = mailForm;
    submit = submit;
    container = document.querySelector('.mail-container');
    errMess = document.createElement('div');
    errMess.className = "err-message";
    errMess.innerHTML = "Please, enter correct e-mail";

    
    validation = function() {
        if(mailForm.value !== "" && mailForm.value !== mailForm.defaultValue) {
            if(Regexp[mailForm.name].test(mailForm.value)) {
                return "valid";
            } else {
                return "unvalid";
            }
        } else {
            return "unvalid";
        }
    }

    showResult = function() {
        switch(validation()) {
            case "valid":
                if(container.querySelector(".err-message")) {
                    container.removeChild(errMess); 
                    mailForm.style.border = "2px solid #5bc187";
                }

                break;

            case "unvalid":
                mailForm.style.border = "2px solid red";
                container.appendChild(errMess);
                
                break;

            default:
                return "smth wrong";

                break;
        }
    }

    function Handler() {
        showResult();
    }

    submit.addEventListener('click', Handler);

};

function show () {

    document.body.removeChild(document.getElementById('load'));
    document.body.style.background = "#bfbfbf";
    document.querySelector('.wrapper').style.display = "block";
    
};

window.onload = function() { 

    setTimeout("show()", 1000)
    // document.querySelector('.wrapper').style.display = "block";

    var scrollUp = document.getElementById('scrollup'); 

    scrollUp.onmouseover = function() { 
        scrollUp.style.opacity = 0.5;
        scrollUp.style.filter  = 'alpha(opacity=50)';
    };

    scrollUp.onmouseout = function() { 
        scrollUp.style.opacity = 0.3;
        scrollUp.style.filter  = 'alpha(opacity=30)';
    };

    scrollUp.onclick = function() { 
        window.scrollTo(0,0);
    };


    window.onscroll = function () { 
        if ( window.pageYOffset > 0 ) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };
};


var mail = new ValidMail(document.querySelector(".email"), document.querySelector(".submit"));
var changer1 = new ChangeImage(document.querySelector(".gallery"), 6);


