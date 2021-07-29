import {BaseEntity, Entity, PrimaryKey, Property, v4} from "xpress-stack"

@Entity({tableName: 'contact'})
export class ContactEntity extends BaseEntity<ContactEntity, 'id'>{

    @PrimaryKey()
    id: string = v4();

    @Property()
    nom: string;

    @Property()
    entreprise: string;

    @Property()
    telephone: string;

    @Property()
    email: string;

    @Property()
    createdAt: Date;

}