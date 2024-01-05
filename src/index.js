document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleJob(e.target.new_task_description.value)
    form.reset()
  })
});

function handleJob (newList) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleX);
  btn.textContent = 'x';
  p.textContent = newList + ' ';
  p.appendChild(btn);
  if (newList != "" && newList != " " && newList != "  ") {
      document.querySelector('#tasks').appendChild(p);
  }
}

function handleX (e) {
  e.target.parentNode.remove();
}
