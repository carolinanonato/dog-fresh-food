let calc = document.getElementById('calc');

const val =  document.getElementById('weight');


calc.addEventListener('click', showWeight)

function showWeight () {    

if (val.value >= 42) {
    eats1 = (3/100)*val.value
    eats2 = (4/100)*val.value;

} if (val.value > 35 && val.value <= 42) {
    eats1 = (3/100)*val.value
    eats2 = (4/100)*val.value
}
 if (val.value > 25 && val.value <=35) {
     eats1 = (4/100)*val.value
     eats2 = (5/100)*val.value
 }
  if (val.value > 10 && val.value <=25) {
    eats1 = (4/100)*val.value
    eats2 = (5/100)*val.value
  } if (val.value > 5 && val.value <=10) {
  eats1 = (4/100)*val.value
   eats2 = (6/100)*val.value

  } if (val.value >=3 && val.value <=5) {
      eats1 = (5/100)*val.value
     eats2 = (6/100)*val.value 

  } if (val.value < 3) {
    eats1 = (7/100)*val.value
    eats2 = (10/100)*val.value
  }

    const newTitle = document.querySelector('.answer');
    newTitle.innerHTML = 
    `<h3>Com ${parseInt(val.value)} kg seu cão deverá comer
     entre ${eats1.toFixed(2)}kg e ${eats2.toFixed(2)}kg de comida por dia</h3>
    <div class="results">
        <p><span class="meat"> ${Math.round(30/100*eats1*1000)} a ${Math.round(30/100*eats2*1000)}g </span> de carnes desossadas</p>
        <p><span class="vegetables">${Math.round(30/100*eats1*1000)}g a ${Math.round(30/100*eats2*1000)}g</span> de vegetais</p>
        <p><span class="carbs">${Math.round(35/100*eats1*1000)}g a ${Math.round(35/100*eats2*1000)}g</span> de carboidratos</p>
        <p><span class="innards">${Math.round(5/100*eats1*1000)}g a ${Math.round(5/100*eats2*1000)}g</span> de vísceras</p> 
    </div>`
}
