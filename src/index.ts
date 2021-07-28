import 'reflect-metadata';
import dotenv from "dotenv";
import {Application, AppOptions} from "xpress-stack";
import {ContactSubscriber} from "@subscribers/contact.subscriber";

dotenv.config();

(async () => {


    const appOption: AppOptions = {
        controllers: [__dirname + '/**/*.controller.ts'],
        entities: [__dirname + '/entities/*.entity.js'],
        entitiesTs: [__dirname + '/entities/*.entity.ts'],
        tsNode: process.env.NODE_ENV !== 'production',
        clientUrl: process.env.DATABASE_URL,
        type: 'postgresql',
        subscribers: [new ContactSubscriber()],
        resolvers: [__dirname + '/resolvers/*{.ts,.js}']
    }

    const application = new Application(appOption);
    await application.connect();
    await application.init();
})();