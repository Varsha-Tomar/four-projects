const buttons = document.querySelectorAll('.btn')
const body = document.querySelector("body")

buttons.forEach(function(btn){
    // console.log(button);
    btn.addEventListener('click',function(e){
        console.log(e.target);

        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
});