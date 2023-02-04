// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = 'green'

// console.log(itemList.parentNode.style.backgroundColor);

// var itemList = document.querySelector('#items');
//  console.log(itemList.parentElement);

//  itemList.parentElement.style.backgroundColor = 'green'

// console.log(itemList.parentElement.style.backgroundColor);


//childNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

//  FirstChild

// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello'


// //lastChild 

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

//nextsiblingsiblings
// console.log(itemList.nextSibling);

// console.log(itemList.nexElementSibling);

// //previousSibling

// console.log(itemList.previousElementSibling);


// itemList.previousElementSibling.style.color = 'green';

//createElement

var newDiv = document.createElement('div');
newDiv.className = 'hello'

newDiv.id = 'hello'

newDiv.setAttribute('title', 'hello Div')

var newDivtext = document.createTextNode('Hello world');

newDiv.appendChild(newDivtext);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

newDiv.style.fontSize = '30px'

container.insertBefore(newDiv, h1)





























