//From https://codepen.io/cathydutton/pen/GBcvo



window.onload = function () {
  
  var seconds = 00; 
  var tens = 00;
  let mins = 00;
  var appendTens = document.getElementById("mseconds")
  var appendSeconds = document.getElementById("seconds")
  var appendMins = document.getElementById("mins")
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');
  var Interval ;

  buttonStart.onclick = function() { 
    clearInterval(Interval);
     console.time();
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
      clearInterval(Interval);
      console.timeEnd();
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
    seconds = "00";
    mins = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMins.innerHTML=mins;
  }
  
   
  
  function startTimer() {
   
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      seconds = 0;
      console.log("minutes");
      
      mins++;
      
      appendMins.innerHTML = "0" + mins;
      
      appendTens.innerHTML = "0" + 0;
    }

  
  
  }
  

}