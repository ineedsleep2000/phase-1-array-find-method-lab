// code your solution here

const record = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "2012", result: "N/A" },
  { year: "2011", result: "N/A" },
  { year: "2010", result: "N/A" },
  { year: "2009", result: "N/A" },
  { year: "2008", result: "N/A" },
  { year: "2007", result: "N/A" },
  { year: "2006", result: "N/A" },
  { year: "2005", result: "N/A" },
  { year: "2004", result: "N/A" },
  { year: "2003", result: "N/A" },
  { year: "2002", result: "N/A" },
  { year: "2001", result: "N/A" },
  { year: "2000", result: "N/A" },
  { year: "1999", result: "N/A" },
  { year: "1998", result: "W" },
  { year: "1997", result: "W" },
  { year: "1996", result: "N/A" },
  { year: "1995", result: "N/A" },
  { year: "1994", result: "N/A" },
  { year: "1993", result: "N/A" },
  { year: "1992", result: "N/A" },
  { year: "1991", result: "N/A" },
  { year: "1990", result: "N/A" },
  { year: "1989", result: "L" },
  { year: "1988", result: "N/A" },
  { year: "1987", result: "L" },
  { year: "1986", result: "L" },
  { year: "1985", result: "N/A" },
  { year: "1984", result: "N/A" },
  { year: "1983", result: "N/A" },
  { year: "1982", result: "N/A" },
  { year: "1981", result: "N/A" },
  { year: "1980", result: "N/A" },
  { year: "1979", result: "N/A" },
  { year: "1978", result: "N/A" },
  { year: "1977", result: "N/A" },
  { year: "1976", result: "L" },
  { year: "1975", result: "N/A" },
  { year: "1974", result: "N/A" },
  { year: "1973", result: "N/A" },
  { year: "1972", result: "N/A" },
  { year: "1971", result: "N/A" },
  { year: "1970", result: "N/A" },
  { year: "1969", result: "N/A" },
  { year: "1968", result: "N/A" },
  { year: "1967", result: "N/A" },
  { year: "1966", result: "N/A" },
  { year: "1965", result: "N/A" },
  { year: "1964", result: "N/A" },
  { year: "1963", result: "N/A" },
  { year: "1962", result: "N/A" },
  { year: "1961", result: "N/A" },
  { year: "1960", result: "N/A" },
];
// function superbowlWin(year, result) {
//   if (result === "W") {
//     return year;
//   }
// }

// record[0].find(superbowlWin);
// record[1].find(superbowlWin);
// record[2].find(superbowlWin);
// record[3].find(superbowlWin);

// function isOdd(element, index, array) {
//     return (element % 2 === 1);
//   }

//   [4, 6, 8, 10].find(isOdd); //=> undefined, not found
// [4, 5, 8, 10].find(isOdd); //=> 5
// [4, 5, 7, 8, 10].find(isOdd); //=> 5
// [4, 7, 5,  8, 10].find(isOdd); //=> 7

// function superbowlWin(array) {
//   return year(array === "W");
// }

// record[0].find(winYear);
// record[1].find(winYear);
// record[2].find(winYear);
// record[3].find(winYear);
// record[4].find(winYear);

//const res = record.find(superbowlWin).year;

// function superbowlWin(records) {
//   return records.result === "W";
// }

// //console.log(res);

// record.find(superbowlWin).year;
// record[25].find(superbowlWin).year;

function superbowlWin(record) {
  for (const yearWon of record) {
    if (yearWon.result === "W") {
      return yearWon.year;
    }
  }
  return undefined;
}

record.find(superbowlWin).year;
