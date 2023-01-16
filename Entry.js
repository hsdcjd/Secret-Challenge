class Entry {

    #entries = [];
    // constructor() {
    //     this.#entries = [];
    // }
    addEntry(lockStatus, post) {
        if (lockStatus === false) {
            this.#entries.push(post);
        }
        else {
            console.log(`The diary is locked`);
        }
    }
    getEntries(lockStatus) {
        
        if (lockStatus === false) {
            return this.#entries;
        }
        else {
            console.log(`The diary is locked`); //removed return prefix
        }
    }
    //setEntries(post) {
       // this.#entries.push(post);
    //} not sure what is going on here, don't need?
}
module.exports = Entry;

//entry         |post@String           |addEntry()        |@void     |

//when it is locked it is returning unefined because the method doesn't return anything it is only logging it to the console, it doesn't give the calling method anything back