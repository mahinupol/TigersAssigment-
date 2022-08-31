
const cart = [];

if (cart.length>5) {
    alert('you can not add more than five')
}
// products-cart
function displayPlayers(){
    
    const totalPlayers = document.getElementById("total-players");
    totalPlayers.innerText = cart.length;

     const cartContainer = document.getElementById("selected-players");
      cartContainer.textContent = '';

      for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
           const li = document.createElement("li");
           li.innerHTML = ` <span> ${cart[i]} </span>`;
            cartContainer.appendChild(li);
      }
}


function addToCart(element) {
    // console.log(element.parentNode.parentNode.children[0].children[1].innerText);
    const playerName = element.parentNode.parentNode.children[0].children[1].innerText;
 
    if (cart.includes(playerName)) {
        alert('already added')
    }else{
        cart.push(playerName);
        console.log(cart);
        displayPlayers();
        element.disabled= true;
    }

}


// const selectButton = document.querySelectorAll('.card button');
// console.log(selectButton);
// for(const button of selectButton){
//     console.log(button.innerText);
    
    
// }




document.getElementById('players-cost').addEventListener('click',function(){
   
    playersExpense(cart.length);
})
let selectedPlayersNumber = cart.length;
function playersExpense(selectedPlayersNumber){
    const perPlayerCostField = document.getElementById('per-player-cost');
    const perPlayerCostAmountString = perPlayerCostField.value;
    const perPlayerCostAmount = parseFloat(perPlayerCostAmountString);
   
    const playerExpenseField = document.getElementById('players-expenses');
    const playerExpenseAmountString = playerExpenseField.innerText;
    const playerExpenseAmount = parseFloat(perPlayerCostAmountString);
    const playersExpenses = perPlayerCostAmount*selectedPlayersNumber;
    playerExpenseField.innerText = playersExpenses;
    return playersExpenses;
}



// total cost calculation 
document.getElementById('calculate-total').addEventListener('click',function(){
    console.log('clicked');
    const managerCostField = document.getElementById('manager-cost');
    const managerCostAmountString = managerCostField.value;
    const managerCostAmount = parseFloat(managerCostAmountString);
    console.log(managerCostAmount);

    const coachCostField = document.getElementById('coach-cost');
    const coachCostAmountString = coachCostField.value;
    const coachCostAmount = parseFloat(coachCostAmountString);
    const coachManagerexpense = managerCostAmount + coachCostAmount;
    const playersExpenses =   playersExpense(cart.length);
   const totalExpense = playersExpenses + coachManagerexpense;

   const totalCostField = document.getElementById('total-cost');
    totalCostField.innerText = totalExpense;
    

})