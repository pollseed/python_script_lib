var
  Markdown = (function(conf) {
    var text;
    function Markdown(conf) {
      text = conf.text;
    }
    Markdown.prototype = {
      makeTable: function() {
        var
          arr = [],
          result,
          re = new RegExp('');
        re.compile('^[|]{1}[^|]*[|]{1}$');
        arr = text.split(/\r\n|\r|\n/);
        $.each(arr, function(j, val) {
          if (val.match(re)) {
            console.log(val);
          }
        });
      }
    };
    return Markdown;
  }());

$(document).on('click', "#make_markdown_button_id", function() {
  var
    $markdown = $("#make_markdown_id").val(),
    conf = {
      text: $markdown,
    }
    md = new Markdown(conf);
  md.makeTable();
});
