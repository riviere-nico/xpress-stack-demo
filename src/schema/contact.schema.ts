import {v4, Field, ObjectType} from "xpress-stack"

@ObjectType()
export class ContactSchema {
    @Field()
    id: string

    @Field({nullable: true})
    nom: string
}