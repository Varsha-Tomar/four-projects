const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

  const height = parseInt(document.querySelector('#Height').value)
  const weight = parseInt(document.querySelector('#Weight').value)
  const results = document.querySelector('#result');

  if(height === '' || height <0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height}`;
  } 
   else if(weight === '' || weight <0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight ${weight}`;
  }
  else {
    const bmi = (weight /((height*height)/10000).toFixed(2));
    // show the result
    let wei =0;
    if(bmi < 18.6) {
         wei = "Under Weight"
     } 
    else if(bmi > 18.6 && bmi <= 24.9) {
     wei =  "Normal Weight"
    }
    else {
     wei = "Over Weight"
    }
    results.innerHTML = `<span>${bmi} <br> ${wei}</span> `
     
  }

});