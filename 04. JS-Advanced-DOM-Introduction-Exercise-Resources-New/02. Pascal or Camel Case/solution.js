function solve() {
  let text = document.getElementById('text').value.toLowerCase();

  let tokens = [...text.split(' ')];
  const namingConvention = document.getElementById('naming-convention').value;

  if (namingConvention == 'Camel Case') {

    tokens.forEach((element, index) => {
      let current = element.toString().split('');
      if (index == 0) {
        current[0] = current[0].toLowerCase();
      } else {
        current[0] = current[0].toUpperCase();
      }
      let final = current.join('');
      tokens[index] = final;
    });

    text = tokens.join('');

  } else if (namingConvention == 'Pascal Case') {
    tokens.forEach((element, index) => {
      let current = element.toString().split('');

      current[0] = current[0].toUpperCase();

      let final = current.join('');
      tokens[index] = final;
    });
    text = tokens.join('');
  } else {
    text = "Error!"
  }
  document.getElementById('result').textContent = text;
}