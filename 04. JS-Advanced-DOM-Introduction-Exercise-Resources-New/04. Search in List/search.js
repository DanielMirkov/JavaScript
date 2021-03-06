function search() {
   const listOfElements = [...document.querySelectorAll('#towns>li')].slice();

   let input = document.querySelector('input').value;
   let result = document.getElementById('result');

   let sum = 0;
   for (const li of listOfElements) {
      if (li.textContent.toLowerCase().includes(input.toLowerCase())) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }

   result.textContent = `${sum} matches found`
   
}
