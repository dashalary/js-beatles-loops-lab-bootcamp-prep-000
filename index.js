var array = []

function theBeatlesPlay(musicians, instruments) {

  for (let i = 0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i<facts.length) {
    let fact = facts[i]
    let updatedFact = fact + "!!!"
    facts[i] = updatedFact;
    i++

  }
  return facts;
}

function iLoveTheBeatles(num) {
  var empty = [];
  let i = 0;
  function incrementVariable() {
    i = i - 15;
    return i;
  }
  do {
    empty.push(`"I love the Beatles!"`);
  } while (incrementVariable()<15)
  }
}