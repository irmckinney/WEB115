document.addEventListener("DOMContentLoaded", function () {

    const myDiv = document.getElementById("myDiv");
    const button = document.getElementById("addItemBtn");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to DOM homework";
    heading.classList.add("highlight");

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is your first DOM homework assignment";

    const ul = document.createElement("ul");

    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = "List Item " + i;
        ul.appendChild(li);
    }

    myDiv.appendChild(heading);
    myDiv.appendChild(paragraph);
    myDiv.appendChild(ul);

    let newItemCount = 0;

    function randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    button.addEventListener("click", function () {
        newItemCount++;
        const li = document.createElement("li");
        li.textContent = "New List Item " + newItemCount;
        li.style.color = randomColor();
        ul.appendChild(li);
    });

    myDiv.addEventListener("click", function () {
        myDiv.style.backgroundColor = randomColor();
    });

});