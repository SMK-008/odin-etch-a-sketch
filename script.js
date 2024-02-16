const container=document.querySelector('.container')
//creating the grid squares
let rows=16
let columns=16
const grid=document.querySelector('.grid')
for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
        const gridItem=document.createElement('div')
        gridItem.className="grids"

        grid.appendChild(gridItem)
    }
}


//new game functionality

const newgame=document.querySelector('#new')
newgame.addEventListener('click',()=>{
    let newGrid=document.createElement('div')
    newGrid.className='new'

    let width=prompt("What width would you like?")
    let length=prompt("What length would you like")
    if(width<=100 && length<=100 || width>0 && length>0){
        for(let i=0;i<width;i++){
            for(let j=0;j<length;j++){
                const gridItem=document.createElement('div')
                gridItem.className="new-grids"
                
                newGrid.appendChild(gridItem)
            }
        }
        container.append(newGrid)
    }else{
        alert('Please enter values less than 101 or that are not negative')
    }
})


//delete game functionality
const del=document.querySelector('#delete')
del.addEventListener('click',()=>{
    let newGrid=document.querySelector('.new')
    let grid=document.querySelector('.grid')
    if(grid!=null){
        container.removeChild(grid)
    }else{
        container.removeChild(newGrid)
    }
})

//hover functionality
const grids=document.querySelectorAll('.grids')
grids.forEach((item)=>{
    item.addEventListener('mouseover',function(e){
        e.target.style.background="red"
        console.log(e)
    })
})


//hover functionality for the new grids
