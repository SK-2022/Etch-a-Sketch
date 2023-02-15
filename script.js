const gridMotherBox = document.querySelector('.grid-mother-box')

for(let i = 1; i <= 256; i++){
    let newDiv = document.createElement('div')
    newDiv.className = "grid-box"
    gridMotherBox.appendChild(newDiv)
}
    const boxes = document.querySelectorAll('.grid-box')
    
    boxes.forEach((box) => 
        box.addEventListener('mouseenter', function() {
        box.classList.toggle('grid-box-color-change')
    })
    )
    