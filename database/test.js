var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  var kittySchema = new mongoose.Schema({
    name: String
  });
  var Kitten = mongoose.model("Kitten", kittySchema);
  var silence = new Kitten({ name: "Silence" });
  silence.save(function(err, fluffy) {
    if (err) return console.error(err);
  });
});
