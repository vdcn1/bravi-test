export class Contacts {
    constructor(email: string){
        this.email = email;
    }
    
    email: string;
    phone?: string;
    whatsapp?: string;
}

export function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}