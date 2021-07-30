import {Get, JsonController, Service, AnyEntity, Post, Body} from "xpress-stack";
import {ContactService} from "@services/contact.service";
import {Contact} from "entities/contact";

@Service()
@JsonController('/factorland')
export class ContactController {

    constructor(public contactService: ContactService) {}

    @Get('/contacts')
    async list(): Promise<AnyEntity<Contact>[]> {
        return await this.contactService.getAll();
    }

    @Post("/contact")
    async saveContact(@Body() contact: Contact) {
        return await this.contactService.save(contact);
    }
}