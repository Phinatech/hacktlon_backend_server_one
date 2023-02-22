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
}

export interface historyData{
    message:string;
    transactionRefernce:number;
    transactionType:string;

}