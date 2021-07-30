import {Resolver, Query, Mutation, Service, FieldResolver, Root, Ctx, Arg} from "xpress-stack"
import {ContactService} from "@services/contact.service";
import {Contact, ContactInput} from "@entities/contact";
import {Author} from "@entities/author";

@Service()
@Resolver((of) => Contact)
export class ContactResolver {

    constructor(private readonly contactService: ContactService) {    }

    @Query(() => [Contact], { nullable: true })
    async Contacts(@Ctx() ctx): Promise<Contact[]> {
        return await this.contactService.getAll();
    }

    @Mutation(() => Contact)
    async addContact(@Arg("data") newContact: ContactInput): Promise<Contact> {
        console.log(newContact)
        const list = await this.contactService.getAll()
        return list[0]
    }

    @FieldResolver(type => Author)
    async author(@Root() contact: Contact) {
        return await contact.author.load()
    }

}