import knex from 'knex';
import { resolve } from 'path';
import { remote } from 'electron';
import { v4 as uuidv4 } from 'uuid';

class DatabaseManager {
    init () {
        const environment = process.env.NODE_ENV || 'development';
        let configuration = require('./../../knexfile')[environment];
        configuration.connection.filename = resolve(remote.app.getAppPath(), `../${configuration.connection.filename}`);
        console.log(configuration);

        this.knexManager = knex(configuration);
    }

    migrate () {
        // TODO
    }

    select (fields) {
        return this.knexManager.select(fields);
    }

    async insert (table, fields) {
        fields['uuid'] = uuidv4();

        await this.knexManager(table).insert(fields);

        return fields['uuid'];
    }

    getInstance (parameters) {
        return this.knexManager(parameters);
    }
}

export default new DatabaseManager
