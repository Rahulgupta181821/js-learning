const form = document.querySelector('form');
//This usecase will give you empty value because when refresh the page it take empty value but we want to take value when enter the calculate button.
//const height= parseInt(document.querySelector('#height').value);
// we don't want to send data on the server. So we use this method e.preventDefault()
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');
    const guide= document.querySelector('#guide');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
      const bmi=  (weight /((height*height)/10000)).toFixed(2);
      // show the result
      results.innerHTML = `<span>${bmi}</span>`
      if(bmi < 18.6){
        guide.innerHTML = `<span>You are Under Weight</span>`
      }else if(bmi >= 18.6 && bmi <= 24.9){
        guide.innerHTML = `<span>Your weight is normal</span>`
      }else{
        guide.innerHTML = `<span>You are OverWeight</span>`
      }

    }
});