function toggle (checked, id, onValue) {
  console.log('onValue', onValue)
  const node = document.getElementById(id);
  node.value = checked ? onValue : '';
}

const optionsDiv = document.getElementById('options');

for (let i = 1; i <= 5; i++) {
  const span = document.createElement('span');
  span.setAttribute('class', 'badge badge-info');
  span.innerHTML = 'Water ' + i;
  optionsDiv.appendChild(span);

  const toggledInput = document.createElement('input');
  toggledInput.setAttribute('type', 'text');
  toggledInput.setAttribute('id', 'water' + i);
  toggledInput.setAttribute('class', 'form-control');
  toggledInput.setAttribute('aria-label', 'Text input with checkbox');
  toggledInput.setAttribute('style', 'width: 100%');


  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const toggleText = "toggle(this.checked, 'water" + i + "', 'Water " + i + "')";
  checkbox.setAttribute('onclick', toggleText);

  const slider = document.createElement('span');
  slider.setAttribute('class', 'slider round');

  const label = document.createElement('label');
  label.setAttribute('class', 'switch');
  label.appendChild(checkbox);
  label.appendChild(slider);

  const div1 = document.createElement('span');
  div1.setAttribute('class', 'input-group-text');
  div1.appendChild(label);

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'input-group-prepend');
  div2.appendChild(div1);

  const div3 = document.createElement('div');
  div3.setAttribute('class', 'input-group mb-3');
  div3.setAttribute('style', 'width: 100%');
  div3.appendChild(div2);
  div3.appendChild(toggledInput);

  optionsDiv.appendChild(div3);
}
