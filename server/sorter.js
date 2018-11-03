const sorter = docs => {
  let output = new Set();
  let keys = [
    "Lunch",
    "Dinner",
    "Breakfast",
    "Brunch",
    "Happy_Hour",
    "Alcohol",
    "Kids"
  ];
  let obj = {
    Breakfast: 0,
    Lunch: 1,
    Dinner: 2,
    Brunch: 3,
    Happy_Hour: 4,
    Kids: 5,
    Alcohol: 6
  };
  docs.forEach(e => {
    for (var key in e) {
      if (keys.includes(key) && e[key]) {
        output.add(key);
      }
    }
  });
  output = Array.from(output).sort((a, b) => obj[a] - obj[b]);
  return output;
};
module.exports = sorter;
