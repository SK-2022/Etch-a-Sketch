const gridMotherBox = document.querySelector('.grid-mother-box')
//Creates 256 boxes all with the class 'grid box' and appends them to the div with the 'grid-mother-box' class
for(let i = 1; i <= 256; i++){
    let newDiv = document.createElement('div')
    newDiv.className = "grid-box"
    gridMotherBox.appendChild(newDiv)
}
    // Select all elements with the class of 'grid-box'
    const boxes = document.querySelectorAll('.grid-box')
    
    //For each item selected(can be any name in () but I have conveniently named it 'box'), add an event
    // listener that causes a new class 'grid-box-color-change' to be added.
    boxes.forEach((box) => 
        box.addEventListener('mouseenter', function() {
        box.classList.add('grid-box-color-change')
    })
    )
    