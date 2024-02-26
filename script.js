const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIA = document.getElementById('dia');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento2 = (flujo/24) *1.5;
        DIA.innerHTML = flujo + ' cc Diarios';
        FLU.innerHTML = (flujo / 24) + ' cc/hr';
        MAN.innerHTML = 'm+m/2 = ' + mantenimiento2 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        DIA.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIA.style.display = 'none';
    }
})

function calcFlujo(peso){
    let flujo = 0;
    if (peso<=30){
        if (peso<11){
            flujo = peso * 100;
        }
        else{
            if (peso<21){
                flujo = 1000 + ((peso - 10) * 50);
            }
            else{
                flujo = 1500 + ((peso - 20) * 20);
            }
        }
        
    }
    else{
        flujo = ( (peso * 4) + 7) / (peso + 90);
    }
    return (flujo);
}

