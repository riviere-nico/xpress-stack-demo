import {BaseEntity,
    Entity,
    PrimaryKey,
    Property,
    v4,
    IsDefined,
    IsString,
    IsUUID,
    IsPhoneNumber,
    IsDateString,
    IsEmail,
    BeforeCreate,
    ManyToOne,
    Field,
    ID,
    ObjectType,
    IdentifiedReference,
    InputType,
    WrappedEntity
} from "xpress-stack"
import {Author} from "@entities/author";


@Entity({tableName: 'contact'})
@ObjectType()
export class Contact extends BaseEntity<Contact, 'id'>{

    @PrimaryKey()
    @IsUUID("4")
    @Field(type => ID)
    id: string = v4();

    @Property()
    @IsDefined()
    @IsString()
    @Field({nullable: true})
    nom: string;

    @Property()
    @IsString()
    @Field({nullable: true})
    entreprise: string;

    @Property()
    @IsPhoneNumber('US')
    @Field({nullable: true})
    telephone: string;

    @Property()
    @IsDefined()
    @IsEmail()
    @Field()
    email: string;

    @Property()
    @IsDateString()
    createdAt: Date = new Date();

    @Field(type => Author)
    @ManyToOne(type => Author, { wrappedReference: true })
    author: IdentifiedReference<Author, 'id'>;

    @BeforeCreate()
    async doStuffBeforeCreate() {
        this.createdAt = new Date() // To be sure the user don't pass value
    }
}

@InputType()
class AuthorInput {
    @Field()
    id: string;

    @Field()
    name: string;
}

@InputType()
export class ContactInput {
    @Field()
    id?: string;

    @Field()
    nom: string;

    @Field()
    email: string;

    @Field(type => AuthorInput)
    author: WrappedEntity<Author, 'id'>
}

