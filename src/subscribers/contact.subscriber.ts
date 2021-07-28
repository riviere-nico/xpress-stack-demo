import {EntityName, EventArgs, EventSubscriber, Subscriber} from 'xpress-stack';
import {ContactEntity} from "../entities/contact.entity";

@Subscriber()
export class ContactSubscriber implements EventSubscriber<ContactEntity> {
    getSubscribedEntities(): EntityName<ContactEntity>[] {
        return [ContactEntity];
    }

    async afterCreate(args: EventArgs<ContactEntity>): Promise<void> {

        console.log('AFTER CREATE !')

    }
}