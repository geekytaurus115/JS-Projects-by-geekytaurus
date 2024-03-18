let screen = document.getElementById('screen');
let screenValue = '';
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        //console.log(buttonText);

        if(buttonText == '×'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }else if(buttonText == '÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '⌫'){
            screenValue = screenValue.substr(0, screenValue.length-1);
            screen.value = screenValue;
        }
        // else if(buttonText == '^'){
        //     let demoText = screenValue + '^'
        //     screen.value = demoText;
        //     screenValue += Math.pow();
        // }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            let result = eval(screenValue);
    
            // screen.value = result;
            // if( ifFloat(result) == true){
            //     result = result.toFixed(3);
            // }

            screen.value = result;
            
        }
        // else if(buttonText == 'x²'){
        //     screenValue += '²';
        //     actualVal =
        //     screen.value = screenValue;
        // }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}


function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
