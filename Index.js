const SecretDiary = require(`./SecretDiary`);
const Entry = require(`./Entry`);

let diary1 = new SecretDiary();
diary1.unlock();
console.log(diary1.isLocked());

let diary2 = new SecretDiary();
diary2.lock();
console.log(diary2.isLocked());

diary2.addEntry(Entry);
diary2.unlock();
console.log(diary2.isLocked());



//diary2.addEntry(Entry);




// let newEntry = new Entry();
// newEntry.addEntry(diary1.getLock(), `Entry number 1`);
// console.log(newEntry.getEntries(diary1.getLock()));


// diary1.lock();
// console.log(diary1.getLock());
// newEntry.addEntry(diary1.getLock(), `Entry number 2`);
// console.log(newEntry.getEntries(diary1.getLock())); //diary1.getLock - change this to false to force return of the diary is locked.