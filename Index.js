const SecretDiary = require(`./SecretDiary`);
const Entry = require(`./Entry`);

let diary1 = new SecretDiary();
diary1.unlock();
console.log(diary1.isLocked()); //test1 false

let diary2 = new SecretDiary();
diary2.lock();
console.log(diary2.isLocked()); //test2 true
diary2.addEntry(Entry); //test3 cannot add entry: diary is locked

diary2.unlock();
console.log(diary2.isLocked()); //test4 is false

// User story
// As a secret diary user
// I want to prevent/lock it
// So that no one can read/get the entries

console.log(diary2.getEntries()); //test5, returns empty array
diary2.lock();
console.log(diary2.isLocked()); //test6, true
console.log(diary2.getEntries()); // test7, cannot add entries: diary is locked
//'undefined' is returned next, why??







// let newEntry = new Entry();
// newEntry.addEntry(diary1.getLock(), `Entry number 1`);
// console.log(newEntry.getEntries(diary1.getLock()));


// diary1.lock();
// console.log(diary1.getLock());
// newEntry.addEntry(diary1.getLock(), `Entry number 2`);
// console.log(newEntry.getEntries(diary1.getLock())); //diary1.getLock - change this to false to force return of the diary is locked.