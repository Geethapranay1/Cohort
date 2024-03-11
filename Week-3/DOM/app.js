//getElementById()

// const heading = document.getElementById("main-heading");
// console.log(heading);

//getElementByClassname()

// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

//getElementByTagname()


//querySelector()

// const container = document.querySelector('div');
// console.log(container);

//document.querySelectorAll('div');
// const ul = document.querySelector('ul');
// const li = document.createElement("li");
// ul.append(li);
// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// li.innerText = "X-men";

// // li.classList.add("list-items");
// li.classList.remove('list-items');


// //remove element
// li.remove()


/* APNA COLLEGE*/
// console.log("hello");
// alert("hello");


//Selecting with id
// let heading1 = document.getElementById("heading");
// console.log(heading1);

//Selecting with class
// let h4 = document.getElementsByClassName("heading4");
// console.log(h4);


//Selecting with tagname
// let tag = document.getElementsByTagName('p');
// console.log(tag);


//Query selector(id, class, tagname)//any thing returns first element,  .class for using class, #id for using id


// let elements = document.querySelector("p");
// console.log(elements);
//querySelectorAll(returns all elements)

//properties
//.tagName, returns tag name
//.innerText, can access the text inside element
//.innerHTML
//.textContent


// let value = document.getElementsByTagName('p').innerText;
// console.log(value);

// let div = document.querySelector("div");
// console.dir(div);

// let val = document.querySelector("h2");
// val.append(" from apna college students")val.innerText = val.innerText + "from apan college students"
// console.log(val);


//DOM Manipulation

//Attributes
//.getAttribute(attr)//to get the attribute value

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

//.setAttribute(attr, val);

let div = document.querySelector("div");
div.style.backgroundColor = "purple";

//node.append(el);
//node.prepond(el);
//node.prepond(al);
//node.after(el);
//node.remove(el);