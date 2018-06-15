let btn = document.querySelector('#btn');
let name = document.querySelector('#name');
let mail = document.querySelector('#mail');


let regName = /\w+/;
let regMail = /^\w+@\w+\.[a-z]{2,}[^\d]$/;
// let regPass = /.{4,8}$/;
// console.log(mail);
// console.log(pass);
btn.addEventListener('click', valide);
function valide() {
    console.log(regName.test(name.value));
    console.log(regMail.test(mail.value));
    if(regName.test(name.value)&&(regMail.test(mail.value))) {
        console.log('good');
    } else {
        alert('Invalid Your Name - must contains of [A-Za-z0-9_]');
    }
    if( regMail.test(mail.value)&&(regName.test(pass.value)) ) {
        console.log('valide');
    } else {
        alert('Invalid e-mail - your e-mail must contains symbols [A-Za-z0-9_]@[a-z].[a-z] > example: xxx@yyy.xx');
    }

//================= Text Slider =========================//
    var text_slide_cur=0;
    function showtext_slide(){
        $('#text_slide'+(text_slide_cur+1)).css({opacity: 0}).animate({opacity: 1.0,left: "50px"}, 1000);
        setTimeout(hidetext_slide, 3000);
    }
    function hidetext_slide(){
        $('#text_slide'+(text_slide_cur+1)).css({opacity: 1}).animate({opacity: 0,left: "-50px"}, 1000,function(){showtext_slide();});
        text_slide_cur=(text_slide_cur+1)%5;
    }
    $(document).ready(function() {
        showtext_slide();
    })


}