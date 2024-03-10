export default interface IConfig {
    database: {
        mongo: {
            host: string,
            port: number,
            options: {
                dbName: string,
                auth: {
                    username: string,
                    password: string,
                },
            },
        },
    },
    server: {
        address: string,
        port: number,
    },
}