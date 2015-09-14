/*
 * [how to use]
 *  <p>
 *    <textarea id="make_markdown_id" name="make_markdown" placeholder="please input markdown" value=""></textarea>
 *    <input type="button" id="make_markdown_button_id" name="make markdown" value="make markdown">
 *  </p>
 */
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
          result;
        arr = text.split(/\r\n|\r|\n/);
        $.each(arr, function(j, val) {
          if (val.match(REGEX)) {
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
