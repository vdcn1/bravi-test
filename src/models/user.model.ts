import { Schema, model, connect } from 'mongoose';

import { Contacts } from '../common/constants'

interface IUser {
    name: string;
    gender: string;
    avatar?: string;
    contacts: Contacts;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    gender: String,
    avatar: String,
    contacts: Contacts,
});

export const User = model<IUser>('User', userSchema);