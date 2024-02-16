let rows=16
let columns=16

const grid=document.querySelector('.grid')

for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
        const gridItem=document.createElement('div')
        gridItem.className="grids"
        gridItem.textContent=`Cell ${i+1}-${j+1}`

        grid.appendChild(gridItem)
    }
}