const ROCK='Rock'
const PAPER='Paper'
const SCISSORS='Scissors'
const options=document.querySelectorAll('button')
//console.log(options[0])
const arr=['Rock','Paper','Scissors']
let selectedText,winnerText
let score=[0,0]
const divScore=document.getElementById('score')
const selectedItems=document.getElementById('selectedItems')
const winner=document.getElementById('winnerText')

/*options.forEach((el)=>{
   console.log(el.firstElementChild)
})
*/
//console.log(options)

options.forEach(el=>{
   // console.log(el)
    el.addEventListener('click',(e)=>{
        console.log(e.currentTarget.value)
        const playerSelected=e.currentTarget.value
        console.log(`palyer selected: ${playerSelected}`)
        const computer=Math.floor(Math.random()*3)
        let computerSelected=arr[computer]
        console.log(`Compute selected :${computerSelected}`)
        
        selectedText=`${playerSelected}(Player Selected ) vs  ${computerSelected} (Computer Selected)`
        //console.log(selectedText)
        if(playerSelected===ROCK && computerSelected===SCISSORS){
           
            score[0]++
            winnerText=`Player wins`
        }
        else if(playerSelected===SCISSORS && computerSelected===ROCK){
            score[1]++
            winnerText=`Computer wins`
        }
        else if(playerSelected===PAPER && computerSelected===SCISSORS){
            score[1]++
            winnerText=`Computer wins`
        }
        else if(playerSelected===SCISSORS && computerSelected===PAPER){
            score[0]++
            winnerText=`Player wins`
        }
        else if(playerSelected===PAPER && computerSelected===ROCK){
            score[0]++
            winnerText=`Player wins`
        }
        else if(playerSelected===ROCK && computerSelected===PAPER){
            score[1]++
            winnerText=`Computer wins`
        }
       else{
        winnerText=`Its a draw`
       }
       
      // debugger
      
       /*if(playerSelected===computerSelected){
        winnerText=`Its a draw`
       
       
       }
       
       if(playerSelected===ROCK){

           if(computerSelected===PAPER){
            score[1]++
            winnerText=`Computer wins`
            
           }
           else{
            score[0]++
            winnerText=`Player wins`
            
           }
       }
       if(playerSelected===PAPER){
           if(computerSelected===SCISSORS){
            score[1]++
            winnerText=`Computer wins`
           
           }
           else{
            score[0]++
            winnerText=`Player wins`
           
           }
           
            
       }
       */

       divScore.innerText=`Player ${score[0]} Computer ${score[1]}`
       selectedItems.innerText=selectedText
       winner.innerText=winnerText
       
   
    })
   
})
