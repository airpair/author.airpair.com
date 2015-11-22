[meanair](https://www.airpair.com/meanair) (pronouced "MEAN-er" or "MEAN-air")
is a framework for building **+ testing** node.js apps.

# author.airpair

**Install dependencies**

1. [node v4+](https://nodejs.org/download/)
2. [mongodb v3+](https://www.mongodb.org/downloads)
3. bower `npm i bower -g`
4. gulp `npm i gulp -g`

**Setup project**

`cmd/dev/setup` downloads npm & bower packages, links git hooks and seeds the db.

**Run it!**

Test: `cmd/test`

Development (static) mode: `cmd/build/dev` + `cmd/start`

Development (watch) mode: `cmd/dev/run`

### Quick overview

The publishing functionality that powers the [airpair.com community software blog](https://www.airpair.com/software-experts)