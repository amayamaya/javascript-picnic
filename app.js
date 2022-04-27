const soda = document.getElementById('soda');
// console.log(soda);
const cheese = document.getElementById('cheese');
// console.log(cheese);
const grapes = document.getElementById('grapes');
// console.log(grapes);
const bread = document.getElementById('bread');
// console.log(bread);
const watermelon = document.getElementById('watermelon');
// console.log(watermelon);
const choose = document.getElementById('choose')
// console.log(choose)

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
});

bread.addEventListener('click', () => {
    bread.classList.toggle('picked');   
});

watermelon.addEventListener('click', () => {
    watermelon.classList.toggle('picked');   
});

choose.addEventListener('click', () => {
    const item = [soda, cheese, grapes, bread, watermelon];
    item[Math.floor(Math.random() *5)].classList.toggle('picked');
})