// Web Storage base
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
    saveAll: function(keys, values) {
      if (keys == null || values == null) {
        return false;
      }
      $(keys).each(function(index, key) {
        value = values[index];
        LocalStorage.prototype.base.save(key, value);
      });
    }
  };
  return LocalStorage;
})();
