export class Lid {
    licentie: number;
    voornaam: string;
    achternaam: string;
    geboortedatum: Date;
    graadID: number;
    verzekeringTot: Date;
    behaalop: Date;

    // tslint:disable-next-line:max-line-length
    constructor( licentie: number, voornaam: string, achternaam: string, geboortedatum: Date, graadID: number, verzekeringTot: Date, behaalop: Date) {
        this.licentie = licentie;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.geboortedatum = geboortedatum;
        this.graadID = graadID;
        this.verzekeringTot = verzekeringTot;
        this.behaalop = behaalop;
        }

}
