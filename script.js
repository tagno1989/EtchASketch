const sizeOfGrid = 16;
const reset = document.querySelector('button')
const container = document.querySelector('.container')
// 256 random color values for rainbow color
const createRandomRgb = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return {r , g , b}
}


// Divs for grid style layout for future color and drawings
const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++){
            const {r , g , b} = createRandomRgb()
            const widthAndHeight = 250 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            
// adding event listener to change the color in our div boxes //  opacity effect
            gridBox.addEventListener('mouseover' , () => {
                const bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                // gridBox.style.backgroundColor = bgColor
                const currentOpacity  = Number( gridBox.style.opacity)
                gridBox.style.backgroundColor = bgColor
                gridBox.style.opacity =Number(currentOpacity) + .3
            })
            row.appendChild(gridBox)
        }
        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

// up to 100X grid user input allows for custom grid// resets grid also

reset.addEventListener('click', () => {
    let userSize = Number(prompt('how big for new grid (must be less than 100)'))
    while (userSize > 100) {
        userSize = Number( prompt('how big for new grid (remember 100 or less)'))
    }
    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        createGrid(userSize)
    } else {
        wrapper.remove()
        createGrid(userSize)
    }
    
})

