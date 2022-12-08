export function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}

export class ResponseDTO {
    message: string;
    error: any;
    data: any;

    constructor(message: string, error: any, data: any){
        this.message = message;
        this.error = error;
        this.data = data;
    }
}