class SecretDiary {

    #lock = true;

    getLock() {
        return this.#lock;
    }
    //call it isLocked?
    unlock() {
        this.#lock = false;
    }
    lock() {
        this.#lock = true;
    }
}

module.exports = SecretDiary;

/*
This code defines a class in JavaScript called SecretDiary that contains methods for locking and unlocking a diary. The getLock() method returns the current lock status, the unlock() method unlocks the diary, and the lock() method locks the diary. These methods are useful for protecting the contents of the diary from being accessed by unauthorized users. */

//our diary does not encapsulate an entry so no cohesion.