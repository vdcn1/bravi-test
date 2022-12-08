import { isNullOrUndefined } from '../common/constants';
import { User } from '../models/user.model';

export class UserService {
    public createUser = async (user: any) => {
        try {
            const newUser = new User(user);
            await newUser.save();
            console.log("User created");
        } catch (error: any) {
            console.log("User creation failed " + error);
            throw new Error("User creation failed " + error.errmsg);
        }
    }

    public getUser = async (email: string) => {
        try {
            const foundUser = await User.findOne({'email': email}).exec();
            if(!isNullOrUndefined(foundUser)){
                return foundUser;
            } else return new User("");
        } catch(error) {
            console.log("User not found");
            throw new Error("User not found " + error);
        }
    }

    public updateUser = async (newUser: any) => {
        try{
            const foundUser = await User.findOneAndUpdate({ email: newUser.email }, newUser).exec();

            if(!isNullOrUndefined(foundUser)) {
                return foundUser;
            } else return new User("");
        } catch(error) {
            throw new Error("User not found " + error);
        }
    }

    public removeUser = async (email: string) => {
        try{
            await User.findOneAndRemove({email: email}).exec();
        } 
        catch(error) {
            throw new Error("User not removed " + error);
        }
    }

    public removeWhatsapp = async (email: string) => {
        try {
            await User.findOne({ email }).updateOne({ $unset: { contacts: {whatsapp: "" } } }).exec();
        } catch(error) {
            console.log("Could not remove Whatsapp number");
            throw new Error("Could not remove Whatsapp number " + error);
        }
    }

    public removePhone = async (email: string) => {
        try {
            await User.findOne({ email }).updateOne({ $unset: { contacts: {telephone: "" } } }).exec();
        } catch(error) {
            throw new Error("Could not remove phoneNumber " + error);
        }
    }    
}