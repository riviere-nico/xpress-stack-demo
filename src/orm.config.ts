import dotenv from "dotenv";
// import {ContactSubscriber} from "@subscribers/contact.subscriber";
import {AppOptions} from "xpress-stack";

dotenv.config();

export default {
    controllers: [__dirname + '/**/*.controller.ts'],
    entities: [__dirname + '/entities/*.entity.js'],
    entitiesTs: [__dirname + '/entities/*.entity.ts'],
    tsNode: process.env.NODE_ENV !== 'production',
    clientUrl: process.env.DATABASE_URL,
    type: 'postgresql',
    // subscribers: [new ContactSubscriber()],
    subscribers: [__dirname + '/subscribers/*.subscriber.ts'],
    resolvers: [__dirname + '/resolvers/*{.ts,.js}'],
    wrap: false,
    migrations: {
        path: './src/migrations',
        disableForeignKeys: false,
        wrap: false
    }
} as AppOptions