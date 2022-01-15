export class Status {
}


export function statusID(status:string): number{
    let res = 0;
    switch(status){
        case 'ACTIEF':
            res = 1;
            break;
        case 'PASSIEF':
            res = 2;
            break;
        case 'ARCHIEF':
            res = 3;
            break;
        }
    return res;
}

