function theBeatlesPlay() {
  var array = [];
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  for (let i = 0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}