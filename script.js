const createCell = () => {
    const cell = document.createElement(`div`);
    cell.className = `cell`;

    return cell;
}

const button = document.getElementById(`play`);
const table = document.getElementById(`table`);

const rows = 10;
const cols = 10;
const allCells = rows * cols;

button.addEventListener(`click`, ()=>{
    
    for(let i= 0; i < allCells; i++){
        const cell = createCell();
        cell.innerText = i + 1;
    
        cell.addEventListener(`click` , ()=>{
            cell.classList.add(`clicked`);
            console.log(cell);
        })
    
        table.appendChild(cell);
    }
});
