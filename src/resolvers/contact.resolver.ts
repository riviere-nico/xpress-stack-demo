import {Resolver, Query, Service} from "xpress-stack"
import {ContactService} from "@services/contact.service";
import {ContactSchema} from "@schema/contact.schema";

@Service()
@Resolver((of) => ContactSchema)
export class ContactResolver {

    constructor(private readonly contactService: ContactService) {    }

    @Query(() => [ContactSchema], { nullable: true })
    async Contacts(): Promise<ContactSchema[]> {
        return await this.contactService.getAll();
    }
}