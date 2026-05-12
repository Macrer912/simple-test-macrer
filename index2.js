function toggleView() {
    const frontView = document.querySelector('.bonecofrente');
    const backView = document.querySelector('.bonecocosta');
    
    if (frontView.classList.contains('visible')) {
        frontView.classList.remove('visible');
        frontView.classList.add('hidden');
        backView.classList.remove('hidden');
        backView.classList.add('visible');
    } else {
        backView.classList.remove('visible');
        backView.classList.add('hidden');
        frontView.classList.remove('hidden');
        frontView.classList.add('visible');
    }
}

// Get the input element with class "numero"
const inputNumero = document.querySelector('.numero');

// Get the div element with class "numerocosta"
const divNumeroCosta = document.querySelector('.numerocosta');

// Add an input event listener to detect changes in the input
inputNumero.addEventListener('input', function() {
    // Copy the input value to the div's content
    divNumeroCosta.textContent = this.value;
});

const divNumeroCalc = document.querySelector('.numerocalc');

// Add an input event listener to detect changes in the input
inputNumero.addEventListener('input', function() {
    // Copy the input value to the div's content
    divNumeroCalc.textContent = this.value;
});

// Get the input element with class "numero"
const inputNome = document.querySelector('.nome');

// Get the div element with class "numerocosta"
const divNomeCosta = document.querySelector('.nomecosta');

// Add an input event listener to detect changes in the input
inputNome.addEventListener('input', function() {
    // Copy the input value to the div's content
    divNomeCosta.textContent = this.value;
});


document.addEventListener('DOMContentLoaded', function() {
    // Get references to all required elements 
    const btnCamisa = document.getElementById('btnCamisa');
    const btnCalcao = document.getElementById('btnCalcao');
    const mostrarcamisa = document.getElementById('mostrarcamisa');
    const mostrarcalcao = document.getElementById('mostrarcalcao');
    const divcamisas = document.querySelector('.camisas');
    const divcalcoes = document.querySelector('.calcoes');
    const areaequipamentomenu = document.querySelector('.areaequipamentomenu');

    // Hide menu area by default
    areaequipamentomenu.style.display = 'none';

    // Function to show camisas
    function showCamisas() {
        if (areaequipamentomenu.style.display === 'none') {
            areaequipamentomenu.style.display = 'block';
            divcamisas.style.display = 'block';
            divcalcoes.style.display = 'none';
        } else {
            areaequipamentomenu.style.display = 'none';
        }
    }

    // Function to show calcoes
    function showCalcoes() {
        if (areaequipamentomenu.style.display === 'none') {
            areaequipamentomenu.style.display = 'block';
            divcamisas.style.display = 'none';
            divcalcoes.style.display = 'block';
        } else {
            areaequipamentomenu.style.display = 'none';
        }
    }

    // Add click event listeners to all buttons
    mostrarcamisa.addEventListener('click', showCamisas);
    btnCamisa.addEventListener('click', function() {
        divcamisas.style.display = 'block';
        divcalcoes.style.display = 'none';
    });
    btnCalcao.addEventListener('click', function() {
        divcamisas.style.display = 'none';
        divcalcoes.style.display = 'block';
    });
});