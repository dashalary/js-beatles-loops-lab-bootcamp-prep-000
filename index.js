var array = []
var musicians
var instruments
function theBeatlesPlay() {

  for (let i = 0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}