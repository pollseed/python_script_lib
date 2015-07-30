// Web Storage
var LocalStorageBase = (function() {
  function LocalStorageBase() {
  }
  // normal method
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
var LocalStorage = (function() {
  function LocalStorage() {
    LocalStorageBase.apply(this);
    LocalStorage.prototype = Object.create(LocalStorageBase.prototype);
    LocalStorage.constructor = LocalStorageBase;
  }

  // special method
  LocalStorage.prototype = {
    saveAll: function(keys, values) {
      if (keys == null || values == null) {
        return false;
      }
      $(keys).each(function(index, key) {
        value = values[index];
        this.save(key, value);
      });
    }
  };
  return LocalStorage;
})();
