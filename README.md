# Secret-Challenge

User Stories

As a secret diary user
I want to prevent/lock it
So that no one can add an entry

As a secret diary user
I want to prevent/lock it
So that no one can read/get the entries

As a secret diary user
I want to be able to unlock is
So that I can add an entry and read/get entries

# As a secret diary user

# I want to prevent/lock it

# So that no one can add an entry or read/get the entries

| Object      | Properties         | Messages     | Outputs    |
| ----------- | ------------------ | ------------ | ---------- | ------------------------------------------------------------ |
| secretDiary | entries@[entry]    | addEntry()   | @void      |
|             |                    | getEntries() | @[entries] |
|             | lock(@Boolean)     | lockOn()     | @Boolean   | //if lock is True, diary is locked and no access             |
|             | //unlock(@Boolean) |              |            | //if lock is False, diary is unlocked and can get entries or |
|             |                    |              |            | // add entry                                                 |
|             |                    |              |            |
| entry       | post@String        | addEntry()   | @void      |

\*\*should lock be a message not parameter
SecretDiary

- lock()
- unlock()
- addEntry()
- getEntries()
  Diagram the secret diary example, and then implement the following requirements:

Initially the SecretDiary class is locked, meaning addEntry(str) and getEntries() should throw an error.
When the user calls unlock(), addEntry() and getEntries() should work as desired.
When the user calls lock() again addEntry() and getEntries() throw errors.
First organise it into one class only.

Then, reorganise it into classes with high cohesion.
