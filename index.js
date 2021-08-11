const headquarters = 42;

function distanceFromHqInBlocks(a){
    return Math.abs(headquarters - a);
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(a, b){
    return Math.abs(a - b) * 264
}

function calculatesFarePrice(start, destination){
   const tripFeet = distanceTravelledInFeet (start, destination);
   if (tripFeet <= 400){
       return 0;
   } else if (tripFeet > 400 & tripFeet <= 2000){
       return (tripFeet - 400) * 0.02;
   }else if (tripFeet > 2000 && tripFeet <= 2500){
       return 25;
   } else {
       return "cannot travel that far";
   }

}
