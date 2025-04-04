import mongoose, { Mongoose, Connection } from 'mongoose';
import DatabaseObserver from '../util/observers/DatabaseObserver';
import config from '../util/config/config';

/**
 * Database classes
 * @module database
 */
export default class Database {

    /**
     * Stores the Database object instance.
     *
     * @static
     * @member { Database }
     */
    private static instance: Database;

    /**
     * Stores the Mongoose ODM instance.
     *
     * @member { Mongoose }
     */
    private db: Mongoose;

    /**
     * Database class constructor.
     */
    protected constructor() {
        mongoose.set('strictQuery', false);

        // Set up event listeners and their respective observers
        mongoose.connection.on('connecting', DatabaseObserver.connecting);
        mongoose.connection.on('connected', DatabaseObserver.connected);
        mongoose.connection.on('open', DatabaseObserver.open);
        mongoose.connection.on('disconnecting', DatabaseObserver.disconnecting);
        mongoose.connection.on('disconnected', DatabaseObserver.disconnected);
        mongoose.connection.on('close', DatabaseObserver.close);
        mongoose.connection.on('reconnected', DatabaseObserver.reconnected);
        mongoose.connection.on('error', DatabaseObserver.error);
        mongoose.connection.on('fullsetup', DatabaseObserver.fullsetup);
        mongoose.connection.on('all', DatabaseObserver.all);

        // Store the underlying database connection
        this.db = mongoose;
    }

    /**
     * Getter method for accessing URI string
     * used to connect to the database.
     *
     * @returns { string }  URI connection string.
     */
    protected get uri(): string {
        const { host, port } = config.database.mongo;

        return `mongodb://${host}:${port}`;
    }

    /**
     * Getter method for accessing underlying
     * ODM instance.
     *
     * @returns { Mongoose }  Mongoose object instance.
     */
    public get raw(): Mongoose {
        return this.db;
    }

    /**
     * Initializer method for singleton pattern.
     *
     * @static
     * @returns { Database }  Database object instance.
     */
    public static async init(): Promise<Database> {
        if (!this.instance) {
            this.instance = new this();

            await this.instance.db.connect(
                this.instance.uri,
                config.database.mongo.options
            );
        }

        return this.instance;
    }

    /**
     * Retrieve underlying Mongo connection information.
     *
     * @static
     * @returns { Connection | void }  Database connection.
     */
    public static connection(): Connection {
        if (!this.instance) throw new Error(`Database was not initialized`);

        return this.instance.raw.connection;
    }
}