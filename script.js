let calc = document.getElementById('calc');

const val =  document.getElementById('weight');


calc.addEventListener('click', showWeight)

function showWeight () {    

    const newTitle = document.querySelector('.answer');
    newTitle.innerHTML = `<h3>Com ${parseInt(val.value)} kg seu cão deverá comer:</h3>
    <div class="results">
        <p><span class="meat"> ${(30/(val.value)*100).toFixed(2)} </span>g de carnes desossadas</p>
        <p><span class="vegetables">${(30/(val.value)*100).toFixed(2)}</span>g de vegetais</p>
        <p><span class="carbs">${(35/(val.value)*100).toFixed(2)}</span>g de carboidratos</p>
        <p><span class="innards">${(5/(val.value)*100).toFixed(2)}</span>g de vísceras</p>
    </div>`
}


// `seu dog de ${peso}kg come entre ${eats1}kg e ${eats2}kg de comida por dia`)    


const peso = 2

if (peso > 42) {
    eats1 = (3/100)*peso
    eats2 = (4/100)*peso;
} if (peso > 35 || peso <= 42) {
    eats1 = (3/100)*peso
    eats2 = (4/100)*peso
} if (peso > 25 || peso <= 34 ) {
    eats1 = (4/100)*peso
    eats2 = (5/100)*peso
} if (peso > 10 || peso <=25) {
    eats1 = (4/100)*peso
    eats2 = (5/100)*peso
} if (peso >5 || peso <=10) {
    eats1 = (4/100)*peso
    eats2 = (6/100)*peso
} if (peso >3 || peso <=5) {
    eats1 = (5/100)*peso
    eats2 = (6/100)*peso
} if (peso <= 3) 
    eats1 = (7/100)*peso
    eats2 = (10/100)*peso

