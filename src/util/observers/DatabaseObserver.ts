import logger from "../logger";

/**
 * Database observer class.
 *
 * @class
 */
export default class DatabaseObserver {
    /**
     * Connecting event listener.
     *
     * @static
     * @returns { void }
     */
    public static connecting(): void {
        logger.info('Connecting to database server...');
    }

    /**
     * Connected event listener.
     *
     * @static
     * @returns { void }
     */
    public static connected(): void {
        logger.info('Connected to database server.');
    }

    /**
     * Open event listener.
     *
     * @static
     * @returns { void }
     */
    public static open(): void {
        logger.info('Connection to database is open!');
    }

    /**
     * Disconnecting event listener.
     *
     * @static
     * @returns { void }
     */
    public static disconnecting(): void {
        logger.warn('Disconnecting from database server...');
    }

    /**
     * Disconnected event listener.
     *
     * @static
     * @returns { void }
     */
    public static disconnected(): void {
        logger.error('Disconnected from database server.');
    }

    /**
     * Close event listener.
     *
     * @static
     * @returns { void }
     */
    public static close(): void {
        logger.warn('Connection to database is closed!');
    }

    /**
     * Reconnected event listener.
     *
     * @static
     * @returns { void }
     */
    public static reconnected(): void {
        logger.info('Reconnected to database server!');
    }

    /**
     * Error event listener.
     *
     * @static
     * @returns { void }
     */
    public static error(): void {
        logger.error('Something went wrong when interacting with the database.');
    }

    /**
     * Fullsetup event listener.
     *
     * @static
     * @returns { void }
     */
    public static fullsetup(): void {
        logger.info('Completed database full setup.');
    }

    /**
     * All event listener.
     *
     * @static
     * @returns { void }
     */
    public static all(): void {
        logger.info('Connected to all database servers!');
    }
}
