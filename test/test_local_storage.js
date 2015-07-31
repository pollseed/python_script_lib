describe('キャッシュ保存,取得テスト', function() {
  var ls = new LocalStorage();
  ls.base.save('hoge', 'hoge');
  if('hogeキーでhogeデータを保存する', function() {
    expect(ls.base.get('hoge')).toBe('hoge');
  });
});
