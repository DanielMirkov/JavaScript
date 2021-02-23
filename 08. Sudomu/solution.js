function solve() {

    const buttons = Array.from(document.querySelectorAll('button'));
    const fields = Array.from(document.querySelectorAll('input'));
    const tableBorder = document.querySelector('table');
    const tableFooter = document.getElementById('check');
    const check = buttons[0];
    const clear = buttons[1];
   
    clear.addEventListener('click', function (ev) {
        for (const field of fields) {
            field.value = '';
            tableBorder.style.border = '';
            tableFooter.querySelector('p').textContent = '';
            tableFooter.querySelector('p').style.color = '';
        }
    })

    check.addEventListener('click', function (ev) {
        let listOfNums = [];
        for (const field of fields) {
            listOfNums.push(field.value);
        }
        //num[0] num[1] num[2]
        //num[3] num[4] num[5]
        //num[6] num[7] num[8]
        let isSolvedCols = false;
        let isSolvedRows = false;
        let firstRow = [];
        let secondRow = [];
        let thirdRow = [];

        for (let i = 0; i < listOfNums.length; i++) {
            const element = listOfNums[i];
            if (i < 3) {
                firstRow.push(Number(element));
            } else if (i < 6) {
                secondRow.push(Number(element));
            } else {
                thirdRow.push(Number(element));
            }

        }

        if (firstRow[0] !== secondRow[0] && secondRow[0] !== thirdRow[0] && thirdRow[0] !== firstRow[0]) {
            isSolvedCols = true; console.log('FirstCol');
        } else {
            isSolvedCols = false;
        }
        if (firstRow[1] !== secondRow[1] && secondRow[1] !== thirdRow[1] && thirdRow[1] !== firstRow[1]) {
            isSolvedCols = true; console.log('FirstCol');
        } else {
            isSolvedCols = false;
        }
        if (firstRow[2] !== secondRow[2] && secondRow[2] !== thirdRow[2] && thirdRow[2] !== firstRow[2]) {
            isSolvedCols = true; console.log('FirstCol');
        } else {
            isSolvedCols = false;
        }

        if (firstRow[0] !== firstRow[1] && firstRow[1] !== firstRow[2] && firstRow[2] !== firstRow[0]) { isSolvedRows = true; console.log(firstRow); } else { isSolvedRows = false; }
        if (secondRow[0] !== secondRow[1] && secondRow[1] !== secondRow[2] && secondRow[2] !== secondRow[0]) { isSolvedRows = true; console.log(secondRow); } else { isSolvedRows = false; }
        if (thirdRow[0] !== thirdRow[1] && thirdRow[1] !== thirdRow[2] && thirdRow[2] !== thirdRow[0]) { isSolvedRows = true; console.log(thirdRow); } else { isSolvedRows = false; }


        if (isSolvedCols && isSolvedRows) {
            tableBorder.style.border = '2px solid green';
            tableFooter.querySelector('p').textContent = 'You solve it! Congratulations!';
            tableFooter.querySelector('p').style.color = 'green';
            console.log(isSolvedCols);
        } else {
            tableBorder.style.border = '2px solid red';

            tableFooter.querySelector('p').textContent = 'NOP! You are not done yet...';
            tableFooter.querySelector('p').style.color = 'red';


        }

    })
    //check if border clears ofter CLICK CLEAR
}