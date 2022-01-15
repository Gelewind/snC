import { Msg } from './msg';

export class LidgegevenFb {
    Msgs: Msg[] = [];
    Rows: [] = [];
    currUser: Lidgegeven = new Lidgegeven();
}
export class Lidgegeven            {
    Licentie: number = 0;
    Voornaam: string = '';
    Achternaam: string = '';
    geboorteDatum: Date = new Date();
    GraadID: number = 0;
    Behaaldop: Date = new Date();
    VerzekeringTot: Date = new Date();
    Aktief: boolean = false;
    GDPRok: boolean = false;
    Bestuur: boolean = false;
    Hoofdlesgever: boolean = false;
    Lesgever: boolean = false;
    LesgeverJeugd: boolean = false;
    familie: number[]=[];
}

export class FbAddLid {
    Msgs: Msg[] = new Array();
}


export class VkfLid {
    Licentie: number = 0;
    Geldigheidsdatum: Date = new Date();
    Voornaam: string = '';
    achternaam: string = '';
    straatnummer: string = '';
    postnummer: string = '';
    gemeente: string = '';
    telefoon: string = '';
    gsm: string = '';
    email: string = '';
    email2: string = '';
    land: string = '';
    MV: number = 0;
    geboortedatum: Date = new Date();
    status: number = 0;
    aansluitingsdatum: Date = new Date();
    rijksregisternummer: string = '';
    geboorteplaats: string = '';
    clubnummer: number = 0;
    graadID: number = 0;
    paswoord: string = '';
}
