let { Client } = require('eris');
let { greenBright, blueBright } = require('chalk');

class Solaris extends Client {
    constructor() {
        super(process.env.TOKEN);

        this.startUP();
    }

    onStartUp() {
        let now = new Date();

        this.editStatus(
            'online', {
                type: 3,
                name: `${this.guilds.size} Guilds | ${process.env.PREFIX}help`
            }
        )

        console.info(greenBright('Started Bot at:'), blueBright(`${now}`))
    }

    startUP() {
        this.onStartUp();
        this.connect()
            .catch(err => console.error(err));
    }
}

module.exports = new Solaris();