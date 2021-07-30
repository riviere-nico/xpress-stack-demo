import {EntityName, EventArgs, EventSubscriber, Subscriber} from 'xpress-stack';
import {Contact} from "entities/contact";

@Subscriber()
export class ContactSubscriber implements EventSubscriber<Contact> {
    getSubscribedEntities(): EntityName<Contact>[] {
        return [Contact];
    }

    async afterCreate(args: EventArgs<Contact>): Promise<void> {

        console.log('AFTER CREATE !')

    }
}