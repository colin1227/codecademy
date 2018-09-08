const getSleepHours = day => {
  /*change the hours to what you currently sleep and run it. */
 switch(day){
   case 'monday':
   return 8;
     
   case 'tuesday':
   return 6;
     
   case 'wednesday':
   return 6;
     
   case 'thursday':
   return 6
     
   case 'friday':
   return 6;
     
   case 'saturday':
   return 6;
     
   case 'sunday':
   return 6;
   default:
     return "error";
 }
 const dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']; 
  
};
const getActualSleepHours = () => 
getSleepHours('monday') + 
      getSleepHours('tuesday') + getSleepHours('wednesday') + 
      getSleepHours('thursday') + 
      getSleepHours('friday') + 
      getSleepHours('saturday') +
      getSleepHours('sunday');

const getIdealSleepHours = () => {
 const idealHours = 6;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const difference = idealSleepHours - actualSleepHours;
  if(actualSleepHours === idealSleepHours) {
    console.log("you got the perfect amount of sleep! keep it up.");
  }
  else if(actualSleepHours < idealSleepHours){
    console.log(" you need to sleep " + difference + " more hours.")
  }
  else{
    console.log("wow your sleeping too much! " + difference  + " off your sleep schedule.")
  }
}
console.log(getIdealSleepHours());
console.log(getActualSleepHours());
console.log(calculateSleepDebt());