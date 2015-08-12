function setValueToDOM(conf) {
  // init settings vals.
  var
      end_hour_id = document.getElementById('end_hour_id'),
      end_minutes_id = document.getElementById('end_minutes_id'),
      rest_hour_id = document.getElementById('rest_hour_id'),
      date = new Date(),
      day = date.getDay(),
      work_time,
      rest_hour,
      rest = conf.rest
      ;
  // set work time value.
  work_time = __getWorkTime(conf, day);
  // set rest time value.
  rest_hour = rest.limit <= date.getHours() ? rest.none : rest.hour;
  // set time to DOM.
  end_hour_id.value = work_time.end_hour;
  end_minutes_id.value = work_time.end_minutes;
  rest_hour_id.value = rest_hour;
}

function __getWorkTime(conf, day) {
  var end_hour, end_minutes;
  if (conf.work_days.long.indexOf(day) >= 0) {
    return {
      end_hour: conf.end_hour.long,
      end_minutes: conf.end_minutes.long
    }
  } else if (conf.work_days.short.indexOf(day) >= 0) {
    return {
      end_hour: conf.end_hour.short,
      end_minutes: conf.end_minutes.short
    }
  } else {
      return {
      end_hour: conf.end_hour.none,
      end_minutes: conf.end_minutes.none
    }
  }
}
// init config the data.
(function() {
  var configure = {
      work_days: {
        long: [1,2], // monday, thuesday
        short: [3,4,5], // wednesday, thursday, friday
        none: 0
      },
      end_hour: {
        long: 19,
        short: 15,
        none: 0
      },
      end_minutes: {
        long: 0,
        short: 0,
        none: 0
      },
      rest: {
        hour: 1,
        limit: 14,
        none: 0
      }
  }
  setValueToDOM(configure);
})();
