import { Msg } from './msg';

export class TrainingTypeFb {
    Msgs: Msg[]=[];
    Rows: TrainingType[] = [];

}

export class TrainingType {
    TrainingTypeID: number = 0;
    omschrijving: string = '';
    MinLeeftijd: number = 0;
    MaxLeeftijd: number = 0;
    MinGraadID: number = 0;
    MaxGraadID: number = 0;
    Aanvang: string = '';
    Einde: string='';
    MaxDeelnemers: number = 0;
}
