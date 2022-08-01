
let display = document.querySelector('#display');

let buttons = Array.from(document.getElementsByTagName('button'));

//Maping the clicked values of buttons

buttons.map( button => {
    button.addEventListener('click', (e) => {

        // Switch Case statement to iterate through as buttons are clicked
        
        switch(e.target.innerHTML){
            case 'C':
                display.innerHTML = '';
                break;
            case '=':
                if(display.innerHTML != ""){
                    display.innerHTML = eval(display.innerHTML);
                } 
                else {
                    display.innerHTML = "Error"
                }
                break;
            case '←':
                if (display.innerHTML){
                   display.innerHTML = display.innerHTML.slice(0, -1);
                }
                break;
            default:
                display.innerHTML += e.target.innerHTML;
        }
    });
});