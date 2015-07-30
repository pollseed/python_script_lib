var Time = (function(rest) {
  function Time(rest_hour,rest_minutes) {
    this.now = new Date();
    this.now.setHours(this.now.getHours() + parseInt(rest_hour));
    this.now.setMinutes(this.now.getMinutes() + parseInt(rest_minutes));
  }
  Time.prototype.remaining = function(hour, minutes) {
    var re_h = hour - this.now.getHours();
    var re_m = minutes - this.now.getMinutes();
    if (re_m < 0) {
      re_h = re_h - 1;
      re_m = re_m + 60;
    }
    return {remaining_hour: re_h, remaining_minutes: re_m};
  };
  return Time;
})();
