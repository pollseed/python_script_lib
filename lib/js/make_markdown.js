var
  Markdown = (function(conf) {
    var
      text,
      REGEX;
    function Markdown(conf) {
      text = conf.text;
      REGEX = new RegExp('');
      REGEX.compile('^[|]{1}[^|]*[|]{1}$');
    }
    Markdown.prototype = {
      makeTable: function() {
        var
          arr = [],
          table_element = [];
        arr = text.split(/\r\n|\r|\n/);
        table_element = this.__extract_table(arr);
        console.log(table_element);
      },
      __extract_table: function(arr) {
        var
          result = [];
        $.each(arr, function(i, val) {
          if (val.match(REGEX)) {
            result.push(val);
          }
        });
        return result;
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
