//get elements from html;

var fname = document.getElementById('fname');
var fnameErr = document.getElementById('fnameErr');

var lname = document.getElementById('lname');
var lnameErr = document.getElementById('lnameErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var repass = document.getElementById('repass');
var repassErr = document.getElementById('repassErr');


function subm(){
    if(fname.value == ''){
        fname.style.border = "1px solid red";
        fname.focus();
        fnameErr.innerHTML ="Babu first Name Dao";
        return false;
    }

    if(lname.value == ''){
        lname.style.border = "1px solid red";
        lname.focus();
        lnameErr.innerHTML ="Babu Last Name Dao";
        return false;
    }

    if(pass.value == ''){
        pass.style.border = "1px solid red";
        pass.focus();
        passErr.innerHTML ="Babu Password Dao age";
        return false;
    }

    if(pass.value.length <=5){
        pass.style.border = "1px solid red";
        pass.focus();
        passErr.innerHTML ="Password must be contain 6 characters";
        return false;
    }

    if(repass.value == ''){
        repass.style.border = "1px solid red";
        repass.focus();
        repassErr.innerHTML ="Babu confirm Password Dao";
        return false;
    }

    if(repass.value !=pass.value){
        repass.style.border = "1px solid red";
        repass.focus();
        repassErr.innerHTML ="Babu confirm Password match kore ni";
        return false;
    }  
}

function errRemove(){
    if(fname.value !=''){
        fname.style.border ="1px solid #fff";
        fnameErr.innerHTML ="";
    }

    if(lname.value !=''){
        lname.style.border ="1px solid #fff";
        lnameErr.innerHTML ="";
    }

    if(pass.value !=''){
        pass.style.border ="1px solid #fff";
        passErr.innerHTML ="";
    }

    if(repass.value !=''){
        repass.style.border ="1px solid #fff";
        repassErr.innerHTML ="";
    }
}

fname.addEventListener('blur',errRemove);
lname.addEventListener('blur',errRemove);
pass.addEventListener('blur',errRemove);
repass.addEventListener('blur',errRemove);

//menu icon

var open =document.getElementById('open');
var close =document.getElementById('close');
var sidenav = document.getElementById('sidenav');

open.addEventListener('click',function(){
    open.style.display ='none';
    close.style.display ='block';
    sidenav.classList.add('sidenav-pos');

});

close.addEventListener('click',function(){
    close.style.display ='none';
    open.style.display ='block';
    sidenav.classList.remove('sidenav-pos');
});


