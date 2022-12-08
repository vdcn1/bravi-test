import { Schema, model, connect } from 'mongoose';
interface IUser {
    name: string;
    gender: string;
    avatar?: string;
    email: string;
    contacts: {
        email: string;
        phone?: string;
        whatsapp?: string;
    }
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    gender: String,
    avatar: String,
    email: { type: String, required: true, unique: true },
    contacts: {
        email: String,
        phone: String,
        whatsapp: String
    },
});

export const User = model<IUser>('User', userSchema);