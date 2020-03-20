export class Lid {
    lic: number;
    voornaam: string;
    achternaam: string;
    straatnr: string;
    postcode: string;
    gemeente: string;
    geboortedatum: Date;
    geboorteplaats: string;
    email: string;
    email2: string;
    tel: string;
    tel2: string;
    man: boolean;
    rijksregister: string;

    // tslint:disable-next-line:max-line-length
    constructor( lic: number, voornaam: string, achternaam: string, straatnr: string, postcode: string, gemeente: string, geboortedatum: Date, geboorteplaats: string, email: string, email2: string, tel: string, tel2: string, man: boolean, rijksregister: string) {
        this.lic = lic;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.straatnr = straatnr;
        this.postcode = postcode;
        this.gemeente = gemeente;
        this.geboortedatum = geboortedatum;
        this.geboorteplaats = geboorteplaats;
        this.email = email;
        this.email2 = email2;
        this.tel = tel;
        this.tel2 = tel2;
        this.email = email;
        this.email2 = email2;
        this.man = man;
        this.rijksregister = rijksregister;
    }
}
