function solve() {
  let inputText = document.getElementById('input').value;

  let arrSentances = inputText.split('.');

  let element = document.getElementById('output');

  let sentanceCounter = 0;
  let arrGrouped = [];
  let sentancesString = '';

  for (let i = 0; i < arrSentances.length; i++) {

    arrSentances[i] = arrSentances[i].toString().trim();
    if (arrSentances[i].length >= 1) {
      if (sentanceCounter == 3) {

        arrGrouped.push(sentancesString);

        sentancesString = '';
        sentanceCounter = 0;
      }

      sentancesString += arrSentances[i] + '.';
      sentanceCounter++;
    }
  }


  if (sentancesString.length > 1) {
    arrGrouped.push(sentancesString);
    sentancesString = '';
  }


  for (let p = 0; p < arrGrouped.length; p++) {
    let para = document.createElement('p');
    let node = document.createTextNode(arrGrouped[p]);
    para.appendChild(node);
    element.appendChild(para);
  }

}