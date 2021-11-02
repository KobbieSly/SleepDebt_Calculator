
function getSleepHours(day){
  let hoursOfSleep;
  day = day.toLowerCase();

  if (day == 'monday') {
    hoursOfSleep = 5 ;
    return hoursOfSleep;
    }  else if(day == 'tuesday') {
    hoursOfSleep = 6 ;
    return hoursOfSleep;
    }  else if(day == 'wednesday') {
    hoursOfSleep = 7.5 ;
    return hoursOfSleep;
    }  else if(day == 'thursday') {
    hoursOfSleep = 5.6 ;
    return hoursOfSleep;
    }  else if(day == 'friday') {
    hoursOfSleep = 6 ;
    return hoursOfSleep;
    }  else if(day == 'saturday') {
    hoursOfSleep = 8 ;
    return hoursOfSleep;
    }  else if(day == 'sunday') {
    hoursOfSleep = 7 ;
    return hoursOfSleep;
    }  else {
      debug.log('Error! Input is not a day of the week');
    }
    
}

const getActualSleepHours =()=> (
  getSleepHours('monday')+ 
  getSleepHours('tuesday')+
  getSleepHours('wednesday')+
  getSleepHours('thursday')+  
  getSleepHours('friday')+
  getSleepHours('saturday')+
  getSleepHours('sunday')
  )

  function getIdealSleepHours(hrs){
    let idealHours = hrs ;
    return idealHours*7;
  }

 function calculateSleepDebt (){
   let actualSleepHours = getActualSleepHours();
   let idealSleepHours = getIdealSleepHours(8);

   actualSleepHours == idealSleepHours? 
   console.log('perfect amount of sleep this week') : 

   actualSleepHours > idealSleepHours? 
   console.log('You got more sleep than needed this week.\n Some extra '+ (actualSleepHours - idealSleepHours) + 'hrs of sleep actually'):

   console.log('You need some extra rest.\nLie down for '+ (idealSleepHours - actualSleepHours) + 'hrs in the coming week')

   
 }

calculateSleepDebt ();
