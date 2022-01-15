import { Msg } from './msg';

export class ActieveLidFb {
    Msgs: Msg[] = [];
    Rows: ActieveLid[] = [];
}

export class ActieveLid {
    Licentie: number = 0;
    Voornaam: string = '';
    Achternaam: string = '';
    geboorteDatum: Date = new Date();
    GraadID: number = 0;
    Behaaldop: Date = new Date();
    VerzekeringTot: Date = new Date();
    Paswoord: string = '';
    Aktief: boolean = false;
    GDPRok: boolean = false;

}
