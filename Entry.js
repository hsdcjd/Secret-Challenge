class Entry {


    #entries = [];
    
  constructor() {
    this.#entries = [];
  }

  add(entry) {
    this.#entries.push(entry);
  }

  get() {
    return this.#entries;
  }
}
module.exports = Entry;