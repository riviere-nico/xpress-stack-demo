import {BaseEntity,
    PrimaryKey,
    Property,
    v4,
    IsDefined,
    IsString,
    IsUUID,
    Entity,
    Field,
    ObjectType
} from "xpress-stack"

@Entity({tableName: 'author'})
@ObjectType()
export class Author extends BaseEntity<Author, 'id'> {
    @PrimaryKey()
    @IsUUID("4")
    @Field()
    id: string = v4();

    @Property()
    @IsDefined()
    @IsString()
    @Field()
    name: string
}