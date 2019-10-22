var katzDeliLine = [];

function takeANumber(katzDeliLine, name){

katzDeliLine.push(`${name}`)
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  }

  function nowServing(katzDeli) {
    if (katzDeli.length > 0) {
      var nowServing = katzDeli[0];
      katzDeli.shift();
      return `Currently serving ${nowServing}.`;
    } else {
      return `There is nobody waiting to be served!`;
    }
  }

  function currentLine(katzDeliLine){
var currently = []
    if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {

     for (var i = 0;i <katzDeliLine.length;i++ ) {
    currently.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
  console.log(currently)
  return ("The line is currently:" + currently)
  }
  }
