// callback

// 1
function sample() {
  $.ajax( {
    type: 'GET',
    url: 'https://raw.githubusercontent.com/pollseed/script_lib/master/lib/js/node.js',
    // dataType: 'jsonp',
    cache: false,
    success: function(event) {
      console.log(event);
    },
    error: function(event) {
      console.log(event);
    }
  });
}
$(document).on("click", "#sample", function() {
  sample();
})

// 2
function sample() {
  $.ajax( {
    type: 'GET',
    url: 'https://raw.githubusercontent.com/pollseed/script_lib/master/lib/js/node.js',
    // dataType: 'jsonp',
    cache: false,
    success: function(event) {
      console.log(event);
    },
    error: function(event) {
      console.log(event);
    }
  });
}
$(document).on("click", "#sample", sample);

// 3
$(document).on("click", "#sample", function() {
  $.ajax( {
    type: 'GET',
    url: 'https://raw.githubusercontent.com/pollseed/script_lib/master/lib/js/node.js',
    // dataType: 'jsonp',
    cache: false,
    success: function(event) {
      console.log(event);
    },
    error: function(event) {
      console.log(event);
    }
  });
});
