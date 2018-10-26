const sorter = docs => {
  let output = [];
  let keys = [
    "Lunch",
    "Dinner",
    "Breakfast",
    "Brunch",
    "Happy_Hour",
    "Alcohol"
  ];
  docs.forEach(e => {
    for (var key in e) {
      if (keys.includes(key) && !output.includes(key) && e[key]) {
        output.push(key);
      }
    }
  });
  return output;
};
module.exports = sorter;
