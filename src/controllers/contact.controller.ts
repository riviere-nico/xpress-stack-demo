import {Get, JsonController, Service, AnyEntity} from "xpress-stack";
import {ContactService} from "@services/contact.service";
import {ContactEntity} from "@entities/contact.entity";

@Service()
@JsonController('/factorland')
export class ContactController {

    constructor(public contactService: ContactService) {}

    @Get('/contacts')
    async list(): Promise<AnyEntity<ContactEntity>[]> {
        return await this.contactService.getAll();
    }
}