const landing = document.querySelector('.landing');


// instructions
const info = document.querySelector('.info');
const instructionsBtn = document.querySelector('.instructions');
instructionsBtn.addEventListener('click', () => {
  console.log('btn work');
  info.style.visibility = 'visible';
})


