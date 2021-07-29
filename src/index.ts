import 'reflect-metadata';
import {Application} from "xpress-stack";
import appOption from "./orm.config"

(async () => {
    const application = new Application(appOption);
    await application.connect();
    await application.init();
})();