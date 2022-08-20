let labelNumber = document.getElementById('labelNumber');
let sideBar = document.getElementById('sidebar');
let display = document.getElementById('display');

let optionLetraMaiúscula = document.getElementById('lMai');
let optionLetraMinuscula = document.getElementById('lMin');
let optionCaractereEspecial = document.getElementById('cEsp');
let optionNumeros = document.getElementById('number');

let arrOptions;

function mudarLabel(){



    labelNumber.innerText = sideBar.value;
    let options = {
        numbers: optionNumeros.checked ? '0123456789' : false,
        specialsCharacteres: optionCaractereEspecial.checked ? '@/-=+`^~´{[}]>.<,:;?' : false,
        upperCase: optionLetraMaiúscula.checked ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : false,
        lowerCase: optionLetraMinuscula.checked ? 'abcdefghijklmnopqrstuvwxyz' : false,
    }

    
    let arr = Object.keys(options).map((optionType)=>{
        if(options[optionType]){
            return options[optionType]
        }
    })

    arrOptions = arr.filter(option => {return option != undefined}).join()

    display.value = generatePassword(labelNumber.innerText)
}

function generatePassword(length){
    return length == 0 ? '' : arrOptions.charAt(Math.floor(Math.random() * arrOptions.length)) + generatePassword(length - 1)
}

sideBar.oninput = () => {
    mudarLabel()
}

mudarLabel()