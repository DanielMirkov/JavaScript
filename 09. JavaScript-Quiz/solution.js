function solve() {

  const section = Array.from(document.getElementById('quizzie').children).slice(1, 4);

  const firstQuestion = section[0];
  const secondQuestion = section[1];
  const thirdQuestion = section[2];

  const question = Array.from(firstQuestion.querySelectorAll('p'));
  
  const rightOne = question[0];
  const wrongOne = question[1];

  
  document.addEventListener('click', function(ev) {
    
    if (ev.target.className === rightOne.className) {
      console.log(rightOne)
      console.log(ev.target);
    } 
    if( ev.target === wrongOne) {
    console.log(wrongOne)
    }
  })
 
  firstQuestion.children = secondQuestion.children;
  
}
