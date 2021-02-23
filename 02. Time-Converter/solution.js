function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type=button]'));
    const inputs = Array.from(document.querySelectorAll('input[type=text]'));


    console.log(inputs);
    let valueToConvert = 0;
    //tostoreTheInitialValue;
    let eventTarget = '';
    //to store the First Value to convert.

    console.log(buttons);
    document.body.addEventListener('click', function (e) {

        if (e.target.type === 'button') {
            for (let i = 0; i < inputs.length; i++) {
                const element = inputs[i].value;
                console.log(element);
                if (element.length > 0) {
                    valueToConvert = Number(element);
                    eventTarget = buttons[i].id;
                    break;
                }

            }
            console.log(valueToConvert, eventTarget);

            let daysV = inputs[0].value;
            let hoursV = inputs[1].value;
            let minutesV = inputs[2].value;
            let secondsV = inputs[3].value;

            if (eventTarget === 'daysBtn') {
                daysV = valueToConvert;
                hoursV = daysV * 24;
                minutesV = daysV * 24 * 60;
                secondsV = daysV * 24 * 60 * 60;

                inputs[0].value = daysV;
                inputs[1].value = hoursV;
                inputs[2].value = minutesV;
                inputs[3].value = secondsV;

            } else if (eventTarget === 'hoursBtn') {

                hoursV = valueToConvert;
                daysV = hoursV / 24;
                minutesV = hoursV * 60;
                secondsV = hoursV * 60 * 60;

                inputs[0].value = daysV;
                inputs[1].value = hoursV;
                inputs[2].value = minutesV;
                inputs[3].value = secondsV;

            } else if (eventTarget === 'minutesBtn') {


                minutesV = valueToConvert;
                hoursV = minutesV / 60;
                daysV = hoursV / 24;
                secondsV = minutesV * 60;

                inputs[0].value = daysV;
                inputs[1].value = hoursV;
                inputs[2].value = minutesV;
                inputs[3].value = secondsV;

            } else if (eventTarget === 'secondsBtn') {

                secondsV = valueToConvert;
                minutesV = secondsV / 60;
                hoursV = minutesV / 60;
                daysV = hoursV / 24;

                inputs[0].value = daysV;
                inputs[1].value = hoursV;
                inputs[2].value = minutesV;
                inputs[3].value = secondsV;

            }

        }
    })
    console.log('TODO:...');
}