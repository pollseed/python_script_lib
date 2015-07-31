/**
 * Web Storage base
 * 
 * @author pollseed
 */
var LocalStorageBase = (function() {
  function LocalStorageBase() {
  }
  LocalStorageBase.prototype = {
    save: function(key, value) {
      if (key == null || value == null) {
        return false;
      }
      localStorage.setItem(key, value);
    },
    get: function(key) {
      var value = localStorage.getItem(key);
      if (key == null || value == null) {
        return false;
      }
      return value;
    },
    remove: function(key) {
      if (key == null) {
        return false;
      }
      localStorage.removeItem(key);
    },
    removeAll: function() {
      localStorage.clear();
    }
  };
  return LocalStorageBase;
})();

// Web Storage Extension
var LocalStorage = (function() {
  function LocalStorage() {
    LocalStorageBase.apply(this);
    LocalStorage.prototype.base = Object.create(LocalStorageBase.prototype);
    LocalStorage.prototype.constructor = LocalStorage;
  }
  LocalStorage.prototype.ex = {

    // 指定したキーに対して指定した値をキャッシュに格納.
    saveAll: function(keys, values) {
      if (keys == null || values == null) {
        return false;
      }
      $(keys).each(function(index, key) {
        var value = values[index];
        if (!LocalStorage.prototype.base.save(key, value)) {
          return false;
        }
      });
    },

    // 指定したキーに対して指定した値をJSON型として格納.
    saveJson: function(key, values) {
      if (key == null || values == null) {
        return false;
      }
      var json = '{[';
      $(values).each(function(index, value) {
        if (index != 0) {
          json += ', '
        }
        json += '"' + value + '"';
      })
      json += ']}';
      LocalStorage.prototype.base.save(key, JSON.stringify(json));
    },

    // 指定したキーをJSON型として取得(JSON型で保存されていないものは通常の文字列として取得).
    getJson: function(key) {
      var _json = LocalStorage.prototype.base.get(key);
      return JSON.parse(_json);
    }
  };
  return LocalStorage;
})();
