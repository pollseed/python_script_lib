describe('Work Time テスト', function() {
  beforeEach(function() {
    console.log('[beforeEach]');
    this.t = new Time($("input[name='rest_hour']").val(), $("input[name='rest_minutes']").val());
  });
  afterEach(function() {
    console.log('[afterEach]');
  });
  it('retainingテスト', function() {
    var retain = this.t.remaining($("input[name='end_hour']").val(), $("input[name='end_minutes']").val());
    expect(retain.remaining_hour).not.toBeNull();
    expect(retain.remaining_hour).toBeDefined();
    expect(retain.remaining_minutes).not.toBeNull();
    expect(retain.remaining_minutes).toBeDefined();
  });
});
