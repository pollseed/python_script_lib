describe('ノードライブラリのテスト', function() {
  beforeEach(function() {
    console.log('[beforeEach]');
    var id_name = 'hoge';
    this.p = document.getElementById(id_name)
    this.node = new Node(id_name);
  });
  afterEach(function() {
    console.log('[afterEach]');
  });
  it('#addText', function() {
    var text = 'hogehogehogheo';
    this.node.addText(0, text);
    expect(this.p.childNodes[0].nodeValue).toEqual(text);
  });
  it('#removeChild', function() {
    var size = this.p.children.length;
    this.node.removeChild([1,2])
    expect(this.p.children.length).toEqual(size - 2);
  });
  it('#addNodeReplaceText', function() {
    var text = 'hogeogaejioj';
    this.node.addNodeReplaceText(text, 'p');
    expect(this.p.childNodes[0].innerHTML).toEqual(text);
  });
});
