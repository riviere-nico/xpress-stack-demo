import {Service, Orm} from "xpress-stack";
import {Contact} from "@entities/contact";
import {Author} from "@entities/author";

@Service()
export class ContactService {
    private repo: any;

    constructor(public orm: Orm) {
        this.repo = this.orm.getRepository(Contact);
    }

    async save(newConstact: Contact) {
        await this.orm.em().persistAndFlush(newConstact);
        return newConstact;
    }

    async getAll(): Promise<Contact[]> {
        return await this.repo.findAll();
    }
}