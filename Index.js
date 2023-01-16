const SecretDiary = require(`./SecretDiary`);
const Entry = require(`./Entry`);

let diary1 = new SecretDiary();

diary1.unlock();

let newEntry = new Entry();
newEntry.addEntry(diary1.getLock(), `Entry number 1`);
console.log(newEntry.getEntries(diary1.getLock()));


diary1.lock();
console.log(diary1.getLock());
newEntry.addEntry(diary1.getLock(), `Entry number 2`);
console.log(newEntry.getEntries(diary1.getLock()));