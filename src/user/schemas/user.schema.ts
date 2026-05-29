import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../interfaces/user.interface';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name!: string;

    @Prop({ unique: true, required: true })
    email!: string;

    @Prop({ required: true })
    password!: string;

    @Prop({ min: 18, max: 50 })
    age!: number;

    @Prop({ required: true, enum: Object.values(Role), default: Role.USER })
    role!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
