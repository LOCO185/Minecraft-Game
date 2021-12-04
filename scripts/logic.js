// slected function to highlight selected tool , headline for tools and inventory

// globals
let chosenTool = 10;
let stones = 5;
let wood = 5;
let dirts = 5;
let grass = 5;

const toolsss = [];
const matsss = [];
// buttons
// start button
const startBtn = document.querySelector('.start');
const landingPage = document.querySelector('.landing');

startBtn.addEventListener('click', () => {
  console.log('btn work');
  landing.style.visibility = 'hidden';
  info.style.visibility = 'hidden';
});
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
  clearStage();
  ClearTheInventory();
  console.log('RESET');
});
const quitBtn = document.querySelector('#quit');
quitBtn.addEventListener('click', () => {
  window.location.reload();
});

// functions

function clearSelected(arr) {
  for (const elm of arr) {
    if (elm.classList.contains('selected')) {
      elm.classList.remove('selected');
    }
  }
}

// chose tool
const chose = (e) => {
  chosenTool = parseInt(e.target.innerHTML);
  clearSelected(toolsss);
  game.style.cursor = 'default';
  e.target.classList.add('selected');
  cursor();
};
// chose matiriales
const choseMat = (e) => {
  if (e.target.classList.value === 'cl-0') {
    game.style.cursor = 'default';
    clearSelected(matsss);
    e.target.classList.add('selected');
    chosenTool = 3;
  }
  if (e.target.classList.value === 'cl-1') {
    game.style.cursor = 'default';
    clearSelected(matsss);
    e.target.classList.add('selected');
    chosenTool = 4;
  }
  if (e.target.classList.value === 'cl-2') {
    game.style.cursor = 'default';
    clearSelected(matsss);
    e.target.classList.add('selected');
    chosenTool = 5;
  }
  if (e.target.classList.value === 'cl-3') {
    game.style.cursor = 'default';
    clearSelected(matsss);
    e.target.classList.add('selected');
    chosenTool = 6;
  }
};
function restCursor() {
  game.style.cursor = 'default';
}
function clear() {
  for (const t of toolsss) {
    if (t.classList.contains('curser')) {
      t.classList.remove('curser');
    }
  }
}
function cursor() {
  if (chosenTool === 0) {
    game.style.cursor = 'url(\'./images/shovel1.png\'),auto';
  }
  if (chosenTool === 1) {
    game.style.cursor = 'url(\'./images/axe1.png\'),auto';
  }
  if (chosenTool === 2) {
    game.style.cursor = 'url(\'./images/pickaxe1.png\'),auto';
  }
}

// whats haapen when we chose a tile :
const choseTile = (e) => {
  // dirt and grass
  if (chosenTool === 0) {
    if (e.currentTarget.attributes['data-type'].value === 'dirt' || e.currentTarget.attributes['data-type'].value === 'grass') {
      if (e.currentTarget.attributes['data-type'].value === 'dirt') {
        dirts++;
      } else {
        grass++;
      }
      e.currentTarget.setAttribute('data-type', 'sky');
      tick();
    }
  }
  // tree and leaves
  if (chosenTool === 1) {
    if (e.currentTarget.attributes['data-type'].value === 'tree-base' || e.currentTarget.attributes['data-type'].value === 'tree-lif') {
      if (e.currentTarget.attributes['data-type'].value === 'tree-base') {
        wood++;
      } else {
        grass++;
      }
      e.currentTarget.setAttribute('data-type', 'sky');
      tick();
    }
  }
  // stone
  if (chosenTool === 2) {
    if (e.currentTarget.attributes['data-type'].value === 'stone') {
      stones++;
      e.currentTarget.setAttribute('data-type', 'sky');
      tick();
    }
  }
  // add dirt
  if (chosenTool === 3) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      if (dirts > 0) {
        dirts--;
        e.currentTarget.setAttribute('data-type', 'dirt');
        tick();
      }
    }
  }
  // add wood
  if (chosenTool === 4) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      if (wood > 0) {
        wood--;
        e.currentTarget.setAttribute('data-type', 'tree-base');
        tick();
      }
    }
  }
  // add grass
  if (chosenTool === 5) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      if (grass > 0) {
        grass--;
        e.currentTarget.setAttribute('data-type', 'grass');
        tick();
      }
    }
  }
  // add stone
  if (chosenTool === 6) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      if (stones > 0) {
        stones--;
        e.currentTarget.setAttribute('data-type', 'stone');
        tick();
      }
    }
  }
  console.log(chosenTool);
};

// event listeners
// ev-tools
for (let i = 0; i < 3; i++) {
  const tool = document.querySelector(`[data-type="t${i}"]`);
  tool.addEventListener('click', chose);
  toolsss.push(tool);
}
// ev-mat
for (let i = 0; i < 4; i++) {
  const tooly = document.querySelector(`#mat.cl-${i}`);
  tooly.addEventListener('click', choseMat);
  matsss.push(tooly);
}

// ev-tile
for (const row in matrix) {
  for (const col in matrix) {
    matrix[row][col].addEventListener('click', choseTile);
  }
}
tick();
