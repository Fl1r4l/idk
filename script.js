let textinput = document.querySelector(".input-field__input")
let button = document.querySelector(".input-field__button")
let apptodo = document.querySelector(".app-todo")
let conttask = 1

function deleteTask (nymberTask) {
    console.log(nymberTask);
    let task = document.querySelectorAll(".app-todo__task")[nymberTask-1]
    task.classList.add("delete_task") 
    
}
function createElement () {
    const task = document.createElement("div")
    task.className = "app-todo__task"
    
    const checkbox = document.createElement("input")
    checkbox.className = "app-todo__checkbox"
    checkbox.type = "checkbox"
    checkbox.addEventListener("click",(function(localCount) {
    return function() {
        deleteTask(localCount)
    };
    })(conttask))

    const p = document.createElement("p")
    p.className = "app-todo__text"
    p.innerHTML = textinput.value
    const div_musorochka = document.createElement("div")
    div_musorochka.addEventListener("click",(function(localCount) {
    return function() {
        deleteTask(localCount)
    };
})(conttask))
    const musorka = document.createElement("img")
    musorka.src = "https://foxkodland.github.io/react-todo/icons/icon-basket.png"
    div_musorochka.className = "app-todo__task-icon"
    div_musorochka.append(musorka)

    const div_pencil = document.createElement("div")
    const pencil = document.createElement("img")
    pencil.src = "https://foxkodland.github.io/react-todo/icons/icon-pencil.png"
    div_pencil.className = "app-todo__task-icon"
    div_pencil.append(pencil)



    task.append(checkbox)
    task.append(p)
    task.append(div_musorochka)
    task.append(div_pencil)
    apptodo.append(task)

}

button.addEventListener("click", function() {
    console.log(textinput.value);
    if (textinput.value == "") {
        alert("你不能讓它空")
        return
    }
    conttask+=1
    createElement()
    textinput.value = ""



})






































