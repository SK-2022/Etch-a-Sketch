const gridMotherBox = document.querySelector('.grid-mother-box')

gridMotherBox.style.gridTemplateColumns = `repeat(16, 1fr)`
gridMotherBox.style.gridTemplateRows = `repeat(16, 1fr)`
    //DEFAULT BOX UPON PAGE REFRESH

    //Creates new 16 X 16 Grid with 256 boxes all with the class 'grid box' and appends each of them to the div with the 'grid-mother-box' class
    for(let i = 1; i <= (16) ** 2; i++){
        let square = document.createElement('div')
        square.className = "grid-box"
        gridMotherBox.appendChild(square)
    }
 
   // Select all elements with the class of 'grid-box'
    const boxes = document.querySelectorAll('.grid-box')
    
    //For each item selected(can be any name in () but I have conveniently named it 'box'), add an event
    // listener that causes the background color of any box entered with a mouse to change to a random rgb value
       
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', function() {
       
        let redValue = Math.floor(Math.random() * 255)
        let greenValue = Math.floor(Math.random() * 255)
        let blueValue = Math.floor(Math.random() * 255)
        let rgbValue = `rgb(${redValue},${greenValue},${blueValue})`

        box.style.backgroundColor = rgbValue
         })
        })




let promptButton = document.querySelector('.change-grid-size')

promptButton.addEventListener('click', () => {
    let gridNumber = window.prompt("How many squares on each side of the grid?")
    if(gridNumber < 0 || gridNumber > 100) {
        return window.alert("Your number needs to be between 0 and 100")
    }
    //This adds the styling of gridTemplateColumns and gridTemplateRows to the gridMotherBox
    gridMotherBox.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    gridMotherBox.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`

    //Creates new grid of the size 'gridNumber X gridNumber' boxes all with the class 'grid box' and appends each of them to the div with the 'grid-mother-box' class
    for(let i = 1; i <= (gridNumber) ** 2; i++){
        let square = document.createElement('div')
        square.className = "grid-box"
        gridMotherBox.appendChild(square)
    }
 
   // Select all elements with the class of 'grid-box'
    const boxes = document.querySelectorAll('.grid-box')
    //Removes the color of all the boxes that already have their color changed
    boxes.forEach((box) => {
        box.style.removeProperty("background-color")
    })
    

    //For each item selected(can be any name in () but I have conveniently named it 'box'), add an event
    // listener that causes the background color of any box entered with a mouse to change to a random rgb value
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', function() {
       
        let redValue = Math.floor(Math.random() * 255)
        let greenValue = Math.floor(Math.random() * 255)
        let blueValue = Math.floor(Math.random() * 255)
        let rgbValue = `rgb(${redValue},${greenValue},${blueValue})`

        box.style.backgroundColor = rgbValue
         })
        })
     });