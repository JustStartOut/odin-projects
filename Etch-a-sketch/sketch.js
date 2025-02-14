const grid = document.querySelector("#grid");
for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.id = i.toString();
    grid.appendChild(square)
    square.addEventListener("mousemove", (e) => {
        e.target.style.background = "red";
    });
};





