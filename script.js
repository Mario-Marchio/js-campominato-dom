const button = document.getElementById(`play`);
const table = document.getElementById(`table`);

const rows = 10;
const cols = 10;
const allCells = rows * cols;

let totalScore = 0;

const createCell = () => {
    const cell = document.createElement(`div`);
    cell.className = `cell`;

    return cell;
}

function randomNumber (){
    const bombs = [];
    for(let i =0; i < 16; i++ ){
        let bomb;
        do{
            bomb = Math.floor(Math.random() * allCells + 1);
        }while (bombs.includes(randomNumber));

        bombs.push(bomb);
    }
    return bombs
}

const bombs = randomNumber();
console.log(bombs)


button.addEventListener(`click`, ()=>{
    
    for(let i= 0; i < allCells; i++){
        const cell = createCell();
        cell.innerText = i + 1;
        
        cell.addEventListener(`click` , ()=>{
            cell.classList.add(`clicked`);
            console.log(cell.innerText);
            ++totalScore;
            console.log(totalScore);
        })
        table.appendChild(cell);
    }

});
