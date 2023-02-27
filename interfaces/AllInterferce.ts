export interface UserData{
    name:string;
    email:string;
    userName:string;
    password:string;
    accountNumber:number;
    phoneNumber:number;
    verified:boolean;
    wallet:{}[];
    history:{}[];
    


}

export interface walletData{
    balance:number;
    credit:number;
    debit:number;
    quickSave:{}[]
    safeLock:{}[]
    target:{}[]

}

export interface historyData{
    message:string;
    transactionRefernce:number;
    transactionType:string;

}

export interface Quick{
    amount: number;
    autoSave: boolean;
    dateTime: number| string;
    interest: number;
}

export interface Locks{
    amount:number
    PayBackTime: string,
    interest:number,
    lock: boolean
}

export interface TargetData{
    amount:number
    fixedAmount: number
}