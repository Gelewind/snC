export class Geslacht {
}

export function GeslachtID(geslacht:string): number{
    let res = 0;
    switch(geslacht){
        case 'M':
            res = 1;
            break;
        case 'V':
            res = 2;
            break
    }
    return res;
}
