const NodeCache = require("node-cache");

class Cache {
  constructor(ttlSeconds = 60 * 60 * 12) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false
    });
  }

  /**
   * Get a value of specific key in the store.
   * If key exists, return the cached value.
   * Else, get a new value from the store function,
   * and set a new value in the cache service.
   * @param {string} key
   * @param {function} storeFunction
   */
  get(key, storeFunction) {
    const value = this.cache.get(key);
    if (value) {
      return Promise.resolve(value);
    }

    return storeFunction().then((result) => {
      this.cache.set(key, result);
      return result;
    });
  }

  /**
   * Delete keys from the cache
   * @param {array} keys
   */
  del(keys) {
    this.cache.del(keys);
  }

  /**
   * Look for all keys starting with X,
   * and delete them from cache
   * @param {string} startStr
   */
  delStartWith(startStr = "") {
    if (!startStr) {
      return;
    }

    const keys = this.cache.keys();
    for (const key of keys) {
      if (key.indexOf(startStr) === 0) {
        this.del(key);
      }
    }
  }

  /**
   * Delete all keys, and flush the cache
   */
  flush() {
    this.cache.flushAll();
  }
}

module.exports = Cache;
