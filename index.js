let sports = [
  ["skier", "⛷"],
  ["snowboarder", "🏂"],
  ["apple", "🍎"],
  ["hockey", "🏒"],
  ["ice skate", "⛸"],
  ["swimmer", "🏊"],
  ["surfer", "🏄‍"],
  ["watermelon", "🍉"],
  ["lemon", "🍋"],
  ["rowboat", "🚣"],
  ["bicyclist", "🚴‍"],
];

let summer_sports = ["swimmer", "surfer", "rowboat", "bicyclist"];

let winter_sports = ["skier", "snowboarder", "hockey", "ice skate"];

let resultSummer_sports = [];
let resultWinter_sports = [];
let resultaFruits = [];

for (let i = 0; i < sports.length; i++) {
  if (summer_sports.includes(sports[i][0])) {
    let sportsElements = sports.slice(i, i + 1);
    resultSummer_sports.push(...sportsElements);
  }
  if (winter_sports.includes(sports[i][0])) {
    let sportsElements = sports.slice(i, i + 1);
    resultWinter_sports.push(...sportsElements);
  }
  if (
    !summer_sports.includes(sports[i][0]) &&
    !winter_sports.includes(sports[i][0])
  ) {
    let sportsElements = sports.slice(i, i + 1);
    resultaFruits.push(...sportsElements);
  }
}

function logger(array, title) {
  console.log(
    `
***${title}***`
  );
  array.map(sport => console.log(sport.join(":")));
}

logger(resultSummer_sports, "Summer sports");
logger(resultWinter_sports, "Winter sports");
logger(resultaFruits, "Fruits");
