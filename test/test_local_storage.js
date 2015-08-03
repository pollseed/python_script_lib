describe('キャッシュ保存,取得テスト', function() {
  beforeEach(function() {
    console.log("[beforeEach]");
    this.ls = new LocalStorage();
  });
  afterEach(function() {
    console.log("[afterEach]");
  });
  it('#save(arg,arg): データをキャッシュに保存する.', function() {
    this.ls.base.save('save_method_key', 'save_method_value');
    console.log(this.ls.base.get('save_method_key'));
    expect(this.ls.base.get('save_method_key')).toBe('save_method_value');
  });
  it('#saveAll(array,array): 複数のキーで複数のデータをキャッシュに保存する.', function() {
    var key = ["saveAll_method_key_1", "saveAll_method_key_2"];
    var value = ["saveAll_method_value_1", "saveAll_method_value_2"];
    this.ls.ex.saveAll(key, value);
    console.log(this.ls.base.get('saveAll_method_key_1'));
    console.log(this.ls.base.get('saveAll_method_key_2'));
    expect(this.ls.base.get('saveAll_method_key_1')).toBe('saveAll_method_value_1');
    expect(this.ls.base.get('saveAll_method_key_2')).toBe('saveAll_method_value_2');
  });
  it('#saveJson(arg,array): キーによりJsonをキャッシュに保存する.', function() {
    var key = "saveJson_method";
    var value = [
      "saveJson_method_value_1",
      "saveJson_method_value_2",
      "saveJson_method_value_3",
    ];
    this.ls.ex.saveJson(key, value);
    console.log(this.ls.ex.getJson('saveJson_method'));
    var json = "{[\"saveJson_method_value_1\", \"saveJson_method_value_2\", \"saveJson_method_value_3\"]}"
    expect(this.ls.ex.getJson('saveJson_method')).toBe(json);
    expect(this.ls.ex.getJson('saveJson_method')).toEqual(json);
  });
});
