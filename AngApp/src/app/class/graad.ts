export class Graad {
}

export function GraadID(graad:string): number{
    let res = 0;
    switch(graad){
        case 'Beginner':
            res = 0
            break;
        case '9e KYU':
            res = 1;
            break;
        case '8e KYU':
            res = 2;
            break;
        case '7e KYU':
            res = 3;
            break;
        case '6e KYU':
            res = 4;
            break;
        case '5e KYU':
            res = 5;
            break;
        case '4e KYU':
            res = 6;
            break;
        case '3e KYU':
            res = 7;
            break;
        case '2e KYU':
            res = 8;
            break;
        case '1e KYU':
            res = 9;
            break;          
        case '1e DAN':
            res = 10;
            break;
        case '2e DAN':
            res = 11;
            break;
        case '3e DAN':
            res = 12;
            break;
        case '4e DAN':
            res = 13;
            break;
        case '5e DAN':
            res = 14;
            break;
        case '6e DAN':
            res = 15;
            break;
        case '7e DAN':
            res = 16;
            break;
        case '8e DAN':
            res = 17;
            break;
        case '9e DAN':
            res = 18;
            break;                                                                                                                                    }
    return res;
}
/*



*/