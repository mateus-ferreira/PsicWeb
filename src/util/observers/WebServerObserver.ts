import { Server } from 'node:net';
import config from '../config/config';
import logger from '../logger';

export default class WebServerObserver {
    private static readonly tags: string[] = ['Server'];

    public static listening(): void {
        const { address, port } = config.server;
        logger.info(`Running in ${address} using port ${port}!`);
    }

    public static close(server: Server): void {
        logger.info('Server closed!');
    }

    public static error(err: Error): void {
        logger.info('Something went wrong!');
        throw err;
    }
}