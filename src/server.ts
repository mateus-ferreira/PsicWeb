import App from './app';
import logger from './util/logger';

App.init().then(() => {
    logger.info('Starting');
});