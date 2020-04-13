export class Lid {
    Lic: number;
    Voornaam: string;
    Achternaam: string;
    Geboortedatum: Date;
    GraadID: number;
    Behaaldop: Date;
    VerzekeringTot: Date;
    Aktief: boolean;
    GDPRok: boolean;

    /*
        "VerzekeringTot": "2020-08-31",
    */

    // tslint:disable-next-line:max-line-length
    // constructor( Lic: number, Voornaam: string, Achternaam: string, Geboortedatum: Date, GraadID: number, Behaaldop: Date, VerzekeringTot: Date, Aktief: boolean, GDPRok: boolean ) {
    //     this.Lic = Lic;
    //     this.Voornaam = Voornaam;
    //     this.Achternaam = Achternaam;
    //     this.Geboortedatum = Geboortedatum;
    //     this.GraadID = GraadID;
    //     this.Behaaldop = Behaaldop;
    //     this.VerzekeringTot = VerzekeringTot;
    //     this.Aktief = Aktief;
    //     this.GDPRok = GDPRok;
    //     }
    // tslint:disable-next-line:max-line-length
    constructor(licentie: string,  Voornaam: string, Achternaam: string, Geboortedatum: string, GraadID: string, Behaaldop: string, VerzekeringTot: string, Aktief: string, GDPRok: string) {
        try {
        this.Lic = Number(licentie);
        this.Voornaam = Voornaam;
        this.Achternaam = Achternaam;
        this.Geboortedatum = new Date(Geboortedatum);
        this.GraadID = Number(GraadID);
        this.Behaaldop = new Date( Behaaldop);
        this.VerzekeringTot = new Date(VerzekeringTot);
        if (Aktief === '1') {
            this.Aktief = true;
        } else {
            this.Aktief = false;
        }
        if ( GDPRok === '1') {
            this.GDPRok = true;
        } else {
            this.GDPRok = false;
        }
        } catch {
            console.log(licentie + ' ' + Voornaam + ' ' + Achternaam );
        }
    }
}
