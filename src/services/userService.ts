import { isNullOrUndefined } from '../common/constants';
import { User } from '../models/user.model';

export class UserService {
    public createUser = async (user: any) => {
        try {
            const newUser = new User(user);
            await newUser.save();
            console.log("User created");
        } catch (error) {
            console.log("User creation failed");
        }
    }

    public getUser = async (email: string) => {
        try {
            const foundUser = await User.findOne({ email }).exec();
            if(!isNullOrUndefined){
                return foundUser;
            } else return new User("");
        } catch(error) {
            console.log("User not found");
        }
    }

    public updateUser = async (newUser: any) => {
        try{
            const foundUser = await User.findOneAndUpdate({ email: newUser.email }, newUser).exec();

            if(!isNullOrUndefined(foundUser)) {
                return foundUser;
            } else return new User("");
        } catch(error) {
            console.log("User not found");
        }
    }

    public removeUser = async (email: string) => {
        try{
            await User.findOneAndRemove({email: email}).exec();
        } 
        catch(error) {
            console.log("User not found");
        }
    }

    public removeWhatsapp = async (email: string) => {
        try {
            await User.findOne({ email }).updateOne({ $unset: { contacts: {whatsapp: "" } } }).exec();
        } catch(error) {
            console.log("Could not remove Whatsapp number");
        }
    }

    public removePhone = async (email: string) => {
        try {
            await User.findOne({ email }).updateOne({ $unset: { contacts: {telephone: "" } } }).exec();
        } catch(error) {
            console.log("Could not remove phone number");
        }
    }
    
}