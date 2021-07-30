import dotenv from "dotenv";
import {AppOptions} from "xpress-stack";

dotenv.config();

export default {
    controllers: [__dirname + '/**/*.controller{.ts,.js}'],
    entities: [__dirname + '/entities/*.js'],
    entitiesTs: [__dirname + '/entities/*.ts'],
    tsNode: process.env.NODE_ENV !== 'production',
    debug: process.env.NODE_ENV !== 'production',
    clientUrl: process.env.DATABASE_URL,
    type: 'postgresql',
    subscribers: [__dirname + '/subscribers/*.subscriber.ts'],
    resolvers: [__dirname + '/resolvers/*{.ts,.js}'],
    migrations: {
        path: './src/migrations',
        disableForeignKeys: false,
    }
} as AppOptions