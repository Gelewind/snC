import { Msg } from './msg';

export class TrainingDatumsFb {
    Msgs: Msg []=[];
    Rows: DateDatum [] = [];
}



export class DateDatum{
    Tijdstip: Date = new Date();
}