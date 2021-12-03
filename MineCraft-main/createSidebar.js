const sidebar = document.querySelector('#sidebar');
const tools = document.querySelector('#tools');

// creating tools -3
for (let i = 0; i < 3; i++) {
  const div = document.createElement('div');
  div.classList.add('tool');
  div.setAttribute('data-type', `t${i}`);
  div.innerHTML = i;
  const span = document.createElement('span');
  span.classList.add('tooltiptext');
  if (i === 0) {
    span.innerHTML = 'Shovel - dirt & grass';
  } else if (i === 1) {
    span.innerHTML = 'Axe - wood';
  } else {
    span.innerHTML = 'Pickaxe - stone';
  }
  div.appendChild(span);
  tools.appendChild(div);
}

