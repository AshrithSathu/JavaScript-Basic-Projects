const Calculate = document.querySelector('.Calculate');

Calculate.addEventListener('click',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if ( isNaN(height) || height <= 0) {
        results.innerHTML = `please give a vaild height ${height}`;
    }
    else if ( isNaN(weight) || weight <= 0) {
        results.innerHTML = `please give a vaild weight ${weight}`
    } else {
        const bmi = (weight /((height*height)/10000) ).toFixed(2);
        MsgPrinting(bmi);
    }
    function MsgPrinting(bmi) {
        if (bmi >= 24.9) {
            results.innerHTML = `<span> BMI is ${bmi}</span> and overweight`
        }
        else if(bmi <= 18.6){
            results.innerHTML = `<span> BMI is ${bmi}</span> and underweight`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span> BMI is ${bmi}</span> and Normal`
        }
    }
})
const Reset = document.querySelector('.Reset');
Reset.addEventListener('click',Reset.reset());