let password = document.querySelector('#pass');
let progress_bar = document.querySelector('#bar');
let lists = document.querySelectorAll('.fas');

password.addEventListener('keyup',()=>{
    let pass = password.value;
    checkStrength(pass);
});

function showPassword(show){
    show.className = (show.classList.contains('fa-eye-slash'))?'fa fa-solid fa-eye':'fa fa-solid fa-eye-slash';
    // show.classList.add('fa-eye-slash');
    password.type = (password.type == 'text')?'password':'text';

}

let checkStrength = (pass) =>{
    let lowerupper = 0;
    let strength = 0;
let numbers = 0;
let specialcharacters = 0;
let len = 0;
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        lists[0].classList.remove('fa-circle');
        lists[0].classList.add('fa-check');
        lowerupper++;

    }
    else{
        lists[0].classList.add('fa-circle');
        lists[0].classList.remove('fa-check');
        lowerupper = (lowerupper==0)?lowerupper:lowerupper--;
    }
    if(pass.match(/([0-9])/)){
        lists[1].classList.remove('fa-circle');
        lists[1].classList.add('fa-check');
        numbers++;
    }
    else{
        lists[1].classList.add('fa-circle');
        lists[1].classList.remove('fa-check');
        numbers = (numbers==0)?numbers:numbers--;
    }
    if(pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
        lists[2].classList.remove('fa-circle');
        lists[2].classList.add('fa-check');
        specialcharacters++;
    }
    else{
        lists[2].classList.add('fa-circle');
        lists[2].classList.remove('fa-check');
        specialcharacters = (specialcharacters==0)?specialcharacters:specialcharacters--;
        }
    if(pass.length >=8){
        lists[3].classList.remove('fa-circle');
        lists[3].classList.add('fa-check');
        len++;
    }
    else{
        lists[3].classList.add('fa-circle');
        lists[3].classList.remove('fa-check');
        len = (len==0)?len:len--;
        }
        strength = len+specialcharacters+numbers+lowerupper;
    switch(strength){
        case 0:
            progress_bar.className = 'p';
            break;
        case 1:
            progress_bar.className = 'progress-bar-danger';
            console.log(strength);
            break;
        case 2:
            progress_bar.className = 'progress-bar-danger';
            console.log(strength);
            break;
        case 3:
            progress_bar.className = 'progress-bar-warning';
            console.log(strength);
            break;
        case 4:
            progress_bar.className = 'progress-bar-success';
            console.log(strength);
            break;

            default:
                break;

    }
}

