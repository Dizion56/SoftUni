function timeToWalk(distance, steps, speed){
    const distanceMeters = distance * steps;
    const rest = Math.floor(distanceMeters/500) * 60;
    const speedPerSec = speed * 1000 / 3600;
    const timeInSec = (distanceMeters / speedPerSec) + rest;

    const hours = Math.floor(timeInSec/3600).toFixed(0).padStart(2,'0');
    const mins = Math.floor(timeInSec/60).toFixed(0).padStart(2,'0');
    const sec = (timeInSec % 60).toFixed(0).padStart(2,'0');
    console.log(`${hours}:${mins}:${sec}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);