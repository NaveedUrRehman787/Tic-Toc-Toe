let cells = ["","","","","","","","",""]
// for (let index = 0; index < 9; index++) {
//     cells.push(0)
// }

function updateArr(){
    let ps = document.querySelectorAll("p")
    let counter = 0
    ps.forEach(e=>{
        e.textContent = cells[counter]
        counter++;
    })
    
}

function structure(){
    let container = document.querySelector(".container")
    let counter = 0
    for(let i = 0; i<9;i++){  
       let p = document.createElement("p")
       p.setAttribute("class",counter)
       p.textContent = ""
       container.append(p)
       counter++;
    }

}
structure();

function updateData(index,item){
    cells[index] = item;
}

function playerWin(cells,ele1,ele2,ele3){
    let result = document.querySelector(".result")
    if(cells[ele1] == "X" && cells[ele2] == 'X' && cells[ele3] == 'X'){
        result.textContent = '1st Player win'
    }else if(cells[ele1] == 'O' && cells[ele2] == "O" && cells[ele3] == "O"){
        result.textContent = '2nd Player win'
    }
}
function checkWin(){
    
    if(cells[0] == cells[1] && cells[1] == cells[2]){
        playerWin(cells,0,1,2);
    }else if(cells[3] == cells[4] && cells[3] == cells[5] && cells[4] == cells[5]){
        playerWin(cells,3,4,5);
    }else if(cells[6] == cells[7] && cells[7] == cells[8]){
        playerWin(cells,6,7,8);
    }else if(cells[0] == cells[3] && cells[0] == cells[6] && cells[3] == cells[6]){
        playerWin(cells,0,3,6);
    }else if(cells[1] == cells[4] && cells[1] == cells[7] && cells[4] == cells[7]){
        playerWin(cells,1,4,7);
    }else if(cells[2] == cells[5] && cells[5] == cells[8]){
        playerWin(cells,2,5,8);
    }else if(cells[0] == cells[4] && cells[0] == cells[8] && cells[4] == cells[8]){
        playerWin(cells,0,4,8);
    }else if(cells[2] == cells[4] && cells[2] == cells[6] && cells[4] == cells[6]){
        playerWin(cells,2,4,6);
    }else if(cells[0] != 0 && cells[1] != 1 && cells[2] != 2 && cells[3] != 3 && cells[4] != 4 && cells[5] != 5 && cells[6] != 6 && cells[7] != 7 && cells[8] != 8){
        let result = document.querySelector(".result")
        result.textContent = 'Match is drawn';
    }

}

function events(){
    let btns = document.querySelectorAll("p")

    let turn = true;
    // let counter = 0;
    btns.forEach(btn=>{
        btn.addEventListener('click',e=>{
            if(turn == true){
                if(btn.className != "X" && btn.className != "O"){
                    updateData(btn.className,'X')
                    updateArr();
                    checkWin();
                    turn = false
                }
                
            }else if(turn == false){
                if(btn.className != "X" && btn.className != "O"){
                    updateData(btn.className,"O")
                    updateArr();
                    checkWin();
                    turn = true
                }
                
            }

            console.log(btn.className);
        })
    })
}
events();
