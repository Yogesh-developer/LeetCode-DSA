var RandomizedSet = function () {
  this.randomizedSet = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.randomizedSet.has(val)) {
    return false;
  }
  this.randomizedSet.add(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.randomizedSet.has(val)) {
    this.randomizedSet.delete(val);
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let items = Array.from(this.randomizedSet);
  return items[Math.floor(Math.random() * items.length)];
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
