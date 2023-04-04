const gridMotherBox = document.querySelector('.grid-mother-box')

let promptButton = document.querySelector('.change-grid-size')

promptButton.addEventListener('click', () => {
    let gridNumber = window.prompt("How many squares on each side of the grid?")
    if(gridNumber < 0 || gridNumber > 100) {
        return window.alert("Your number needs to be between 0 and 100")
    }

    //This adds the styling of gridTemplateColumns and gridTemplateRows to the gridMotherBox
    gridMotherBox.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    gridMotherBox.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`

    //Creates 256(16 X 16) boxes all with the class 'grid box' and appends each of them to the div with the 'grid-mother-box' class
    for(let i = 1; i <= (gridNumber) ** 2; i++){
        let square = document.createElement('div')
        square.className = "grid-box"
        gridMotherBox.appendChild(square)
    }
 
   // Select all elements with the class of 'grid-box'
    const boxes = document.querySelectorAll('.grid-box')
    
    //For each item selected(can be any name in () but I have conveniently named it 'box'), add an event
    // listener that causes a new class 'grid-box-color-change' to be added.
    boxes.forEach((box) => 
        box.addEventListener('mouseenter', function() {
        box.classList.add('grid-box-color-change')
    }))

})

