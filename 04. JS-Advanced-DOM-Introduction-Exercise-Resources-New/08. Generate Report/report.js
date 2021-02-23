function generateReport() {

    const employee = document.querySelector('input[name="employee"]');
    const deparment = document.querySelector('input[name="deparment"]');
    const status = document.querySelector('input[name="status"]');
    const dateHired = document.querySelector('input[name="dateHired"]');
    const benefits = document.querySelector('input[name="benefits"]');
    const salary = document.querySelector('input[name="salary"]');
    const rating = document.querySelector('input[name="rating"]');


    let rows = document.querySelectorAll('tbody tr');

    let resultArr = [];
    let objectToPush = {};

    if (employee.checked) {
        rows.forEach((element, index) => {
            let employeeName = element.children[0].textContent;
            if (resultArr[index] == undefined) {
                Object.assign(objectToPush, { employee: employeeName });
                resultArr.push(objectToPush);
                objectToPush = {};
            } else {
                Object.assign(resultArr[index], { employee: employeeName });

            }
        })

    }
    if (deparment.checked) {
        rows.forEach((element, index) => {
            let deparment = element.children[1].textContent;
            if (resultArr[index] == undefined) {
                Object.assign(objectToPush, { deparment: deparment });
                resultArr.push(objectToPush);
                objectToPush = {};
            } else {
                Object.assign(resultArr[index], { deparment: deparment })
            }

        })

    }
    if (status.checked) {
        rows.forEach((element, index) => {
            let status = element.children[2].textContent;
            if (resultArr[index] == undefined) {
                Object.assign(objectToPush, { status: status });
                resultArr.push(objectToPush);
                objectToPush = {};
            } else {
                Object.assign(resultArr[index], { status: status })
            }

        })
    }
    if (dateHired.checked) {
        rows.forEach((element, index) => {
            let dateHired = element.children[3].textContent;
            if (resultArr[index] == undefined) {
                Object.assign(objectToPush, { dateHired: dateHired });
                resultArr.push(objectToPush);
                objectToPush = {};
            } else {
                Object.assign(resultArr[index], { dateHired: dateHired })
            }

        })
    }
    if (benefits.checked) {
        rows.forEach((element, index) => {
            let benefits = element.children[4].textContent;
            if (resultArr[index] == undefined) {
                Object.assign(objectToPush, { benefits: benefits });
                resultArr.push(objectToPush);
                objectToPush = {};
            } else {
                Object.assign(resultArr[index], { benefits: benefits })
            }

        })
    }
    if (salary.checked) {
        rows.forEach((element, index) => {
            let salary = element.children[5].textContent;
            if (resultArr[index] == undefined) {
                Object.assign(objectToPush, { salary: salary });
                resultArr.push(objectToPush);
                objectToPush = {};
            } else {
                Object.assign(resultArr[index], { salary: salary })
            }

        })
    }
    if (rating.checked) {
        rows.forEach((element, index) => {
            let rating = element.children[6].textContent;
            if (resultArr[index] == undefined) {
                Object.assign(objectToPush, { rating: rating });
                resultArr.push(objectToPush);
                objectToPush = {};
            } else {
                Object.assign(resultArr[index], { rating: rating })
            }

        })
    }
    document.getElementById('output').textContent = JSON.stringify(resultArr, 1, 2);

}