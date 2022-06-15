let titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center';
console.log(titleEl);

let titleOther = document.querySelector('#title');
console.log(titleOther);

let myChoice = document.querySelector('h1');
console.log(myChoice);

let pEl = document.querySelector('.cool');
pEl.style.color = 'blue';
console.log(pEl);

pEl.innerHTML = "Comments for <strong>Today";

let aEl = document.querySelector('#google-link');
aEl.setAttribute('href', "https://www.google.com");
console.log(aEl);

let commentEls = document.querySelectorAll('.comment');
console.log(commentEls);

for(commentEl of commentEls) {
  console.log(commentEl);
}

for(commentEl of commentEls) {
  commentEl.style.fontSize = '30px';
}