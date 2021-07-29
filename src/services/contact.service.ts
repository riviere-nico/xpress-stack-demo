import {Service, Orm} from "xpress-stack";
import {ContactEntity} from "@entities/contact.entity";

@Service()
export class ContactService {
    private repo: any;

    constructor(public orm: Orm) {
        this.repo = this.orm.getRepository(ContactEntity);
    }

    async getAll(): Promise<ContactEntity[]> {

        // const testCreated = new ContactEntity();
        // testCreated.id = v4();
        // testCreated.nom = 'yo !';
        // testCreated.entreprise = 'LDV';
        // testCreated.telephone = '123';
        // testCreated.email = 'coucou';
        // testCreated.createdAt = new Date();
        // await this.orm.em().persistAndFlush(testCreated)

        return await this.repo.findAll();
    }
}