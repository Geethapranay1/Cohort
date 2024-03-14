
let globalId = 0;;

function markAsDone(someID) {
    const parent = document.getElementById(someID);
    parent.children[2].innerHTML = "Done"
}

function createChildDiv(title, description, id) {
    const child = document.createElement("div");
    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Mark as done";
    thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    child.setAttribute("id", id);
    return child;
}

// function addTodo() {
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const parent = document.getElementById("todos");

//     //ugly code 
//     // const originalHtml = document.getElementById("todos").innerHTML;
//     // document.getElementById("todos").innerHTML = originalHtml + `
//     //         <div>
//     //             <div>${title}</div>
//     //             <div>${description}</div>
//     //             <button>Mark as done</button>
//     //         </div>`

//     //important things to remember
//     //document.createElement()

//     // const childDiv = document.createElement("div"); //<div></div>
//     // outerDiv.innerHTML = title;
//     // document.getElementById("todos").appendChild(childDiv);
//     parent.appendChild(createChildDiv(title, description, globalId++));

// }


//state will always be an array
//every element of the array would have title, description and id


function updateDomAccToState(state) {
   const parent =  document.getElementById("todos");
   parent.innerHTML = "";
   for (let i = 0; i < state.length; i++) {
    const child = createChildDiv(state[i].title, state[i].description, state[i].id);
    parent.appendChild(child);
   }

}

updateDomAccToState([{
    title : "beee da",
    description : "should complete within today",
    id : 1
}])

