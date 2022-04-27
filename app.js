const soda = document.getElementById('soda');
console.log(soda);
const cheese = document.getElementById('cheese');
console.log(cheese);
const grapes = document.getElementById('grapes');
console.log(grapes)

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
})