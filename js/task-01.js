const list = document.querySelector('#categories');
// console.dir(list);

const listLength = list.children.length;
console.log("Number of categories:", listLength);

[...list.children].forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
    
});