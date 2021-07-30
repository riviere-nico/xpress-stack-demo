import {Service, Orm} from "xpress-stack";
import {Contact} from "entities/contact";

@Service()
class AuthorService {
    private repo: any;

    constructor(public orm: Orm) {
        this.repo = this.orm.getRepository(Contact);
    }

    public async find(id: string) {
        // return this.repo.find
    }
}