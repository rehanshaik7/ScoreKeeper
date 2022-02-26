const p1={
 
     score:0,
     button:document.querySelector("#p1Button"),
     display: document.querySelector("#p1Display")


}

const p2={
    score:0,
    button:document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")

}




const reset= document.querySelector("#rButton")

const selectWin=document.querySelector("#selectWinning");



let winningScore=3;

let isGameOver=false;


function updateScores(player,opponent){
    if(!isGameOver){
        player.score+=1;
        }
        if(winningScore===player.score){
           isGameOver=true
           player.display.classList.add("winner")
           opponent.display.classList.add("loser")
           player.button.disabled=true;
           opponent.button.disabled=true;
        
        }
        player.display.innerHTML=player.score;

}


p1.button.addEventListener('click',function(){
    updateScores(p1,p2)

})


p2.button.addEventListener('click',function(){
   
    updateScores(p2,p1)
})


selectWin.addEventListener("change",function(){
    winningScore=parseInt(this.value);
    reset1();

})



reset.addEventListener("click",reset1)




function reset1(){
    isGameOver=false;

    for(let p of [p1,p2]){
        p.score=0
        p.display.innerHTML=0;
        p.display.classList.remove("winner","loser")
        p.button.disabled=false;
    }
    
}


