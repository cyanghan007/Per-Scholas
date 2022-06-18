console.log('js loaded')

const btn = document.querySelector('button');

btn.addEventListener('click', function(e) {
  // console.log(e);
  const li = document.createElement('li');
  const inp = document.querySelector('input');
  console.log(li);
  li.textContent = inp.value;
  document.querySelector('ul').appendChild(li)
  inp.value = '';
});

document.querySelector('ul').addEventListener('click', handleClick);

function handleClick(e) {
  console.log(e);
  e.target.style.color = "blue";
  document.querySelector('ul').removeEventListener('click', handleClick);
};

// document.querySelector('ul').removeEventListener('click', handleClick);