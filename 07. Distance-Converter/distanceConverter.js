function attachEventsListeners() {

    //get the input and the value that we convert from
    //get the output and change it value.
    //check if seleceted value is diferent form Converted
    //if is different ENABLE else DISABLE unitl selcetion is chnged
    const kmToM = 1000;

    const meters = 1;

    const cmToM = 0.01;

    const mmToM = 0.001;

    const mileToM = 1609.34;

    const yrdToM = 0.9144;

    const footToM = 0.3048;
    const inchToM = 0.0254;

    const button = document.getElementById('convert');
    button.addEventListener('click', function (ev) {

        const inputText = document.getElementById('inputDistance');
        let valueToConvert = inputText.value;

        const inputUnits = Array.from(document.getElementById('inputUnits').children);

        const outputUnits = Array.from(document.getElementById('outputUnits').children);
        let selection;
        let convertToUnit;
        for (let i = 0; i < inputUnits.length; i++) {
            if (inputUnits[i].selected) {
                selection = inputUnits[i].value;
            }
            if (outputUnits[i].selected) {
                convertToUnit = outputUnits[i].value;
            }
        }
        const parser = {
            km() { valueToConvert *= kmToM },
            m() { valueToConvert *= meters },
            cm() { valueToConvert *= cmToM },
            mm() { valueToConvert *= mmToM },
            mi() { valueToConvert *= mileToM },
            yrd() { valueToConvert *= yrdToM },
            ft() { valueToConvert *= footToM },
            in() { valueToConvert *= inchToM }
        }



        document.getElementById('outputDistance').disabled = false;
        parser[selection]();
        if (convertToUnit === 'km') { valueToConvert /= kmToM; }
        else if (convertToUnit === 'm') { valueToConvert /= meters; }
        else if (convertToUnit === 'cm') { valueToConvert /= cmToM; }
        else if (convertToUnit === 'mm') { valueToConvert /= mmToM; }
        else if (convertToUnit === 'mi') { valueToConvert /= mileToM; }
        else if (convertToUnit === 'yrd') { valueToConvert /= yrdToM; }
        else if (convertToUnit === 'ft') { valueToConvert /= footToM; }
        else if (convertToUnit === 'in') { valueToConvert /= inchToM; }

        document.getElementById('outputDistance').value = valueToConvert;

    })


}

// //  if (convertToUnit === 'km') { valueToConvert /= 0.001; }
// else if (convertToUnit === 'm') { valueToConvert *= 1; }
// else if (convertToUnit === 'cm') { valueToConvert *= 100; }
// else if (convertToUnit === 'mm') { valueToConvert *= 1000; }
// else if (convertToUnit === 'mi') { valueToConvert *= 0.000621371192; }
// else if (convertToUnit === 'yrd') { valueToConvert *= 1.0936133; }
// else if (convertToUnit === 'ft') { valueToConvert *= 3.2808399; }
// else if (convertToUnit === 'in') { valueToConvert *= 39.3700787; }

