
module.exports = function date() {
var day = new Date();
var options = {
  weekday : 'long', month: 'long', day: 'numeric', year :'numeric'
};

return day.toLocaleDateString("en-US", options);

};
