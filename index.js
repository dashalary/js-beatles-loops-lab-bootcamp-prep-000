function theBeatlesPlay() {
  var array = [];
 var musicians
 var instruments
  for (let i = 0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}