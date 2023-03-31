function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue<= 400){
    return 'This one is on me!'
  }
  else if (someValue<=2000 ){
    return 'That will be twenty bucks.'
  }
  else if (someValue>2000 && someValue<=2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
  }
}

function ternaryCheckCity(somewere){
  // Write your code here!
  
  return somewere ==='NYC'? 'Ok, sounds good.': 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
        return 'Thank you so much.';
    case  'not as generous':
      return 'Thank you.' 
    default:
      return  'Bye.'
  }
   
}
console.log(scuberGreetingForFeet(2300)) 
console.log(ternaryCheckCity('NYC')) 