const inventory = document.querySelector('#inventory');

const inventorySum = document.createElement('div');
inventory.setAttribute('id', 'matiriales-container');

// create inventory -4
function creatTheInventory() {
  for (let i = 0; i < 4; i++) {
    const boxy = document.createElement('div');
    boxy.setAttribute('id', 'mat');
    boxy.classList.add(`cl-${i}`);
    inventory.append(boxy);
    inventory.append(inventorySum);
  }
}
creatTheInventory(); // call the function

// refresh inventory function
const tick = () => {
  for (let i = 0; i < 4; i++) {
    maty = document.querySelector(`#mat.cl-${i}`);
    if (i === 0) {
      maty.innerHTML = `${dirts}`;
    }
    if (i === 1) {
      maty.innerHTML = `${wood}`;
    }
    if (i === 2) {
      maty.innerHTML = `${grass}`;
    }
    if (i === 3) {
      maty.innerHTML = `${stones}`;
    }
  }
};
// clear inventory function
function ClearTheInventory() {
  inventory.innerHTML = '';
  creatTheInventory();
}
