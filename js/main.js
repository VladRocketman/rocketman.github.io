// FOR ATTACC

var Cfg = {
    fileLegalTypes: ["pdf", "jpeg", "jpg", "png"]
}

var Regexp = {
    search : /^[а-яА-ЯёЁa-zA-Z0-9/\s/]+$/,
    name : /^[а-яА-ЯёЁa-zA-Z0-9-\ ]{1,20}$/,
    email : /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    message : /^[а-яА-ЯёЁa-zA-Z0-9-_ )(\.,:;""]{1,300}$/
};

function Slider (container, amount, widthImg) {
    var self = this;
    this.amount = amount;

    gallery = container.querySelector(".img-container");
    btnNext = container.querySelector(".slide-next");
    btnPrev = container.querySelector(".slide-prev");
    imagesArr = container.querySelectorAll("img");

    position = 0;

    function goPrev () {
        position = Math.max(position - widthImg * amount, - widthImg * (imagesArr.length - amount));
        gallery.style.marginLeft = position + "px";
    };

    function goNext () {
        position = Math.min(position + widthImg * amount, 0);
        gallery.style.marginLeft = position + "px";
    }

    function handler () {
        goNext();
    }

    function handler1 () {
        goPrev();
    }

    btnNext.addEventListener("click", handler);
    btnPrev.addEventListener("click", handler1);
}

function ValidMail(mailForm, submit) {
    mailForm = mailForm;
    submit = submit;
    container = document.querySelector('.mail-container');
    mailContainer = document.querySelector('.email');
    errMess = document.createElement('div');
    errMess.className = "err-message";
    errMess.innerHTML = "Please, enter correct e-mail";
    
    validation = function() {
        if(mailForm.value !== mailForm.defaultValue) {
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
                    // mailForm.style.border = "2px solid #5bc187";
                    // errMess.style.color = "#5bc187"; 
                } else {
                    mailForm.style.border = "2px solid #5bc187"; 
                }

                break;

            case "unvalid":
                mailForm.style.border = "2px solid red";
                container.appendChild(errMess);
                
                break;

            default:
                console.log("smth wrong")
                return "smth wrong";

                break;
        }
    }

    function clearDefaultValue () {
        mailContainer.defaultValue = "";
    }

    function Handler () {
        showResult();
    }

    function Handler1 () {
        clearDefaultValue();
    }

    submit.addEventListener('click', Handler);
    container.addEventListener('click', Handler1);

};

function AttechModule (input) {

    this.container = input;
    this.button = this.container.querySelector(".file");
    this.fileName = document.createElement("div");
    this.fileName.className = "file-name";

    this.fileTypes = Cfg.fileLegalTypes;
    this.errorMessage = "File format only: pdf, jpeg/jpg, png";

    this.checkFileType = function(fileName) {
        
        this.typeOfFile = "";
        this.dot = fileName.indexOf(".") + 1;

        for (var i = this.dot; i < fileName.length; i++) {
            this.typeOfFile += "" + fileName[i];
        }
        for (var j = 0; j < this.fileTypes.length; j++) {
            if (this.typeOfFile != this.fileTypes[j]) {
            } else {
                return true;
            }
        }
    }


    this.getFileName = function (value) {

        this.onlyName = "";

        var numb = this.button.value.lastIndexOf("\\") + 1;

        for (var i = numb; i < value.length; i++) {
            this.onlyName += "" + value[i];
        }
        return this.onlyName;
    }

    this.showFileName = function () {

        if (this.fileName.innerHTML == this.button.value || this.fileName.innerHTML == this.fileName.defaultValue) {
            return;

        } if (this.button.value != "") {

            this.fileName.innerHTML = this.button.value;

            switch (this.checkFileType(this.button.value)) {
                case true:
                    this.fileName.style.color = "#5bc187";
                    this.fileName.innerHTML = this.getFileName(this.button.value);
                    break;

                default:
                    this.button.value = "";
                    delete this.button.files;
                    this.fileName.style.color = "#b3d4fc";
                    this.fileName.innerHTML = this.errorMessage;
                    break;
            }

            this.container.parentNode.appendChild(this.fileName);
        }
    }

    var self = this;

    function handler () {
        self.showFileName();
    }

    this.container.addEventListener("change", handler);
};


// SCROLLUP

window.onload = function() { 

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

    window.onresize = function () {

    }
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };
};

// ACTIVE

window.addEventListener("load", function(){

    var myLinks = document.querySelectorAll("a");

    for(var i=0; i < myLinks.length; i++) {
        if(location.href == myLinks[i].href) {
            myLinks[i].className = "active";
        }
    }
});

var attech1 = new AttechModule(document.querySelector(".attech-container"));
var mail = new ValidMail(document.querySelector(".email"), document.querySelector(".submit"));
var slider1 = new Slider(document.querySelector(".gallery-container"), 3, 295);

