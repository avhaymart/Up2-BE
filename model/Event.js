const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  first: String,
  last: String,
  date: {
    type: String,
    default: function () {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      
      var yyyy = today.getFullYear();
      if (dd < 10) {
          dd = '0' + dd;
      }
      if (mm < 10) {
          mm = '0' + mm;
      }
      
      var hour = today.getUTCHours() - 7
      var minute = today.getMinutes();

      if (minute < 10) {
        minute = '0' + minute;
      }
      var timeOfDay = function(){
          if (hour < 12){
            
              return "AM"
          } else if (hour >= 12) {
              return "PM"
          }
      }


      return `${mm}/${dd}/${yyyy} @ ${hour > 12 ? hour-12 : hour}:${minute} ${timeOfDay()}`
    }
  },
  title: String,
  description: String,
  image: String,
  value: Number,
  // hashtag: String
  comments: { type: Array, default: void 0 },
  users: { type: Array, default: void 0 }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

