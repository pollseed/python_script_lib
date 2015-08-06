var Node = function(id) {
  var p;
  function Node(id) {
    this.p = document.getElementById(id);
    console.log(this.p);
  }
  Node.prototype = {
    addText: function(index, replace) {
      var textnode = this.p.childNodes.item(index);
      textnode.nodeValue = replace;
    },
    removeChild: function(indexes) {
      var i, textnode;
      for (i = 0; i < indexes.length; i += 1) {
        textnode = this.p.childNodes.item(indexes[i]);
        this.p.removeChild(textnode);
      }
    },
    addNodeReplaceText: function(replace, tagName) {
      var childNodes = this.p.childNodes;
      while (this.p.hasChildNodes()) {
        this.p.removeChild(childNodes.item(0));
      }
      var element = document.createElement(tagName),
          textnode = document.createTextNode(replace);
      element.appendChild(textnode);
      this.p.appendChild(element);
    }
  };
  return Node;
}();
