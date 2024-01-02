import express, { Express } from 'express';
import apiRouter from './routes';
import http from 'node:http';
import Database from './database/Database';
import { Server } from 'node:net';
import * as bodyParser from 'body-parser';
import WebServerObserver from './util/observers/WebServerObserver';
import Config from "./util/config/config";

export default class App {
    public static instance: App;

    private readonly app: Express;

    private server: Server;

    private constructor() {
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: '500mb' }));
        this.app.use(bodyParser.raw({ limit: '500mb' }));
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

        this.app.use('/api', apiRouter);

        this.server = http.createServer(this.app);

        this.server.on('listening', WebServerObserver.listening);
        this.server.on('close', WebServerObserver.close);
        this.server.on('error', WebServerObserver.error);

        this.server.listen(Config.server.port, Config.server.address);
    }

    public static async init(): Promise<App> {
        if (!this.instance) {
            this.instance = new this();

            await Database.init();
        }

        return this.instance;
    }

    public stop(): Promise<(void | Server)[]> {
        return Promise.all([
            this.server.close(),
            Database.init().then((db) => db.raw.disconnect())
        ]);
    }

    public get raw(): Express {
        return this.app;
    }
}