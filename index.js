// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter( possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase()
  )
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  function matchName(drivers, string)  {
    return drivers.filter( possibleMatch =>
        possibleMatch.name === string )
  }