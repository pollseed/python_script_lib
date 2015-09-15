/*
ex.)
<p>
  <textarea id="make_markdown_id" name="make_markdown" placeholder="please input markdown" value=""></textarea>
  <input type="button" id="make_markdown_button_id" name="make markdown" value="make markdown">
</p>
*/
var
  Markdown = (function(conf) {
    var
      text,
      REGEX,
      LN;
    function Markdown(conf) {
      text = conf.text;
      REGEX = new RegExp('');
      REGEX.compile('^[|]{1}[^|]*[|]{1}$');
      LN = /\r\n|\r|\n/;
    }
    Markdown.prototype = {
      makeTable: function() {
        var
          arr = [],
          table_element = [];
        arr = text.split(LN);
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

function make_markdown() {
  var
    $markdown = $("#make_markdown_id").val(),
    conf = {
      text: $markdown,
    }
    md = new Markdown(conf);
  md.makeTable();
}

function load() {
  var el = document.getElementById("make_markdown_button_id");
  el.addEventListener('click', make_markdown, false);
}

// onloadより早くしとくか
document.addEventListener('DOMContentLoaded', load, false);
