import {GeslachtID} from './geslacht';
import {GraadID} from './graad'
import {statusID} from './status';

export class Vkflid {
    licentie:number = 0;
    geldigheidsdatum:Date=new Date();
    voornaam:string = '';
    achternaam:string = '';
    straatnummer:string = '';
    postnummer:string = '';
    gemeente:string = '';
    telefoon:string = '';
    gsm:string = '';
    email:string = '';
    email2:string = '';
    nationaliteit:string = '';
    land:string = '';
    geslacht:number = 0;
    geboortedatum:Date=new Date();
    status:number = 0;
    aansluitingsdatum:Date=new Date();
    graad:number = 0;
    behaald:Date=new Date();
    constructor(
        licentie: number,
        geldigheidsdatum: string,
        voornaam: string,
        achternaam: string,
        straatnummer: string,
        postnummer: string,
        gemeente: string,
        telefoon: string,
        gsm: string,
        email: string,
        email2: string,
        nationaliteit: string,
        land: string,
        geslacht: string,
        geboortedatum: string,
        status: string,
        aansluitingsdatum: string,
        graad: string,
        behaald:string){
            this.licentie = licentie;
            this.geldigheidsdatum = new Date(geldigheidsdatum);
            this.voornaam = voornaam;
            this.achternaam = achternaam;
            this.straatnummer = straatnummer;
            this.postnummer = postnummer;
            this.gemeente = gemeente;
            this.telefoon = telefoon;
            this.gsm = gsm;
            this.email = email;
            this.email2 = email2;
            this.nationaliteit = nationaliteit;
            this.land=land;
            this.geslacht = GeslachtID( geslacht);
            this.geboortedatum = new Date(geboortedatum);
            this.status = statusID( status);
            this.aansluitingsdatum = new Date(aansluitingsdatum);
            this.graad = GraadID (graad);
            this.behaald = new Date(behaald);
    }
}
