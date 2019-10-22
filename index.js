var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  }

  function nowServing(katzDeliLine) {

if (katzDeliLine.length === 0) {
  return ("There is nobody waiting to be served!")

} else { for (var i = 0; i < katzDeliLine.length; i++) {
var nowServing = katzDeliLine[0]
katzDeliLine.shift()
console.log(`Currently serving ${nowServing}`)
  return(`Currently serving ${nowServing}.`)
}
}

  }

  function currentLine(katzDeliLine){

  }
