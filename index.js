var array = []

function theBeatlesPlay(musicians, instruments) {

  for (let i = 0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i<4) {
    facts.push(`!!!`)
    i++
  }
  return facts;
}