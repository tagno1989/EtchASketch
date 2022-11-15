// Divs for grid style layout for future color and drawings
const sizeOfGrid = 16;
const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++){
            const widthAndHeight = 960 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            row.appendChild(gridBox)

            gridBox.addEventListener('mouseover' , () => {
                gridBox.style.backgroundColor = 'black'
            })
        }


        container.appendChild(row)
    }
}

createGrid(sizeOfGrid)