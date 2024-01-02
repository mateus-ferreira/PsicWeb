import { config } from 'dotenv';
import { merge } from 'lodash';
import { relative, normalize } from 'path';
import { existsSync, readFileSync } from 'fs';
import IConfig from '../../types/interfaces/models/IConfig';

/**
 * Helper function for reading JSON files. Path argument
 * is relative to the current working directory.
 *
 * @param   { string }  path  String representing the file path.
 * @returns { object }  JSON object.
 */
function readJson(path: string): object {
    const filepath = relative(process.cwd(), normalize(path));
    if (!existsSync(filepath)) throw new Error(`Configuration file is missing at: ${filepath}`);
    return JSON.parse(readFileSync(filepath).toString());
}

const parsed = config();

// If no .env file exists it should NOT throw and error.
if (parsed.error && !parsed.error.message.match(/no such file or directory/)) throw parsed.error;

const cfg: object = readJson(process.env.CONFIG ?? 'config/config.json');

/**
 * Configuration object with environment
 * variables and user defined preferences
 * for read-only access.
 *
 * IMPORTANT: Any key/value pair
 * changes must be reflected in
 * the IConfig interface in order
 * for the object to remain
 * strongly typed.
 *
 * @member { Readonly<IConfig> }
 */
const Config: Readonly<IConfig> = merge(
    {
        database: {
            mongo: {
                host: 'localhost',
                port: 27017,
                options: {
                    dbName: 'PsicDB',
                    auth: {
                        username: '',
                        password: '',
                    },
                },
            },
        },
        server: {
            address: 'localhost',
            port: 3000,
        },
    },
    cfg
);

export default Config;