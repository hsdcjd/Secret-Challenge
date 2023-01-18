const Entry = require(`./Entry`);

class SecretDiary {

  #locked = false;
  entry = new Entry();

  addEntry(entry) {
    if (this.#locked === false) { 
      this.entry.add(entry);
    } else {
      console.log('Cannot add entry: diary is locked');
    }
  }
  getEntries() {
    if (this.#locked === false) {
      return this.entry.get();
    } else {
      console.log('Cannot get entries: diary is locked');
    }
  }
  lock() {
    this.#locked = true;
  }
  unlock() {
    this.#locked = false;
  }
  isLocked() {
    return this.#locked;
  }
}
module.exports = SecretDiary;