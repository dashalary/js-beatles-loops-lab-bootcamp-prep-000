var array = []

function theBeatlesPlay(musicians, instruments) {

  for (let i = 0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  while (facts<4) {
    facts.push(`!!!`)
  }
  return facts;
}