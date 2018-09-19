function takeANumber(katzDeli) {
  if (katzDeli.length < 1 || katzDeli === undefined) {
    katzDeli.push(1);
  } else {
    katzDeli.push(katzDeli.length);
  }
  katzDeli.push(' ');
  return `Welcome!. You are number ${katzDeli.length} in line.`;
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1 || katzDeliLine === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  var tmp = [];
  for (let i = 0; i < line.length; i++) {
    tmp.push(" " + (i + 1) + ". " + line[i]) + " ";
  }
  
  if(line.length < 1 || line === undefined) {
    return "The line is currently empty.";
  } else {
    return "The line is currently:" + tmp;
  }
}