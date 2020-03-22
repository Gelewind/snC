import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Lid } from '../Classes/lid';

interface Graad {
  GraadID: number;
  omschrijving: string;
}

@Component({
  selector: 'app-dagaanwezig',
  templateUrl: './dagaanwezig.component.html',
  styleUrls: ['./dagaanwezig.component.css']
})
export class DagaanwezigComponent implements OnInit {
  graden: Graad[] = [
    {GraadID: 0, omschrijving: '0de kyu'},
    {GraadID: 1, omschrijving: '9de kyu'},
    {GraadID: 2, omschrijving: '8de kyu'},
    {GraadID: 3, omschrijving: '7de kyu'},
    {GraadID: 4, omschrijving: '6de kyu'},
    {GraadID: 5, omschrijving: '5de kyu'},
    {GraadID: 6, omschrijving: '4de kyu'},
    {GraadID: 7, omschrijving: '3de kyu'},
    {GraadID: 8, omschrijving: '2de kyu'},
    {GraadID: 9, omschrijving: '1ste kyu'},
    {GraadID: 10, omschrijving: '1ste dan'},
    {GraadID: 11, omschrijving: '2de dan'},
    {GraadID: 12, omschrijving: '3de dan'},
    {GraadID: 13, omschrijving: '4de dan'},
    {GraadID: 14, omschrijving: '5de dan'},
    {GraadID: 15, omschrijving: '6de dan'},
    {GraadID: 16, omschrijving: '7de dan'},
    {GraadID: 17, omschrijving: '8de dan'}
    ];

  LedenAfw = [];
  LedenAanw = [];
  Leden = [
    // tslint:disable-next-line:max-line-length
    {licentie: 120, voornaam: 'Richard', achternaam: 'Van Overmeiren', geboortedatum: new Date('1949-06-28'), graadID: 12, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2002-07-24')},
    {licentie: 391, voornaam: 'Chris', achternaam: 'Gelijkens', geboortedatum: new Date('1950-07-27'), graadID:12, verzekeringTot: new Date('2020-07-31'), behaalop: new Date('2004-04-10')},
    {licentie: 1299, voornaam: 'Willy', achternaam: 'Caessens', geboortedatum: new Date('1952-09-02'), graadID:11, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('1996-11-03')},
    {licentie: 1384, voornaam: 'Jean', achternaam: 'Berger', geboortedatum: new Date('1947-07-11'), graadID:12, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('1994-07-23')},
    {licentie: 1556, voornaam: 'William', achternaam: 'Van Aken', geboortedatum: new Date('1958-09-25'), graadID:10, verzekeringTot: new Date('2020-02-29'), behaalop: new Date('1983-05-15')},
    {licentie: 2054, voornaam: 'William', achternaam: 'Boons', geboortedatum: new Date('1947-12-31'), graadID:15, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2017-11-19')},
    {licentie: 4456, voornaam: 'Eddy', achternaam: 'Scheynen', geboortedatum: new Date('1953-07-08'), graadID:12, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2002-07-24')},
    {licentie: 4547, voornaam: 'Johan', achternaam: 'Degraeve', geboortedatum: new Date('1965-04-22'), graadID:10, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2015-05-30')},
    {licentie: 5177, voornaam: 'Daniel', achternaam: 'Tempels', geboortedatum: new Date('1944-01-08'), graadID:10, verzekeringTot: new Date('2020-11-30'), behaalop: new Date('1975-07-26')},
    {licentie: 8417, voornaam: 'Marianne', achternaam: 'Den Hartog', geboortedatum: new Date('2000-01-01'), graadID:12, verzekeringTot: new Date('2019-12-31'), behaalop: new Date('0000-00-00')},
    {licentie: 8939, voornaam: 'Pascal', achternaam: 'Audenaert', geboortedatum: new Date('1965-03-14'), graadID:11, verzekeringTot: new Date('2021-01-31'), behaalop: new Date('2000-11-11')},
    {licentie: 10609, voornaam: 'Peter', achternaam: 'Heyndrickx', geboortedatum: new Date('1967-05-05'), graadID:9, verzekeringTot: new Date('2021-01-31'), behaalop: new Date('2017-11-26')},
    {licentie: 11049, voornaam: 'Bert', achternaam: 'Claes', geboortedatum: new Date('1966-12-02'), graadID:12, verzekeringTot: new Date('2020-07-31'), behaalop: new Date('2019-06-28')},
    {licentie: 12248, voornaam: 'Robby', achternaam: 'Geerts', geboortedatum: new Date('1971-01-19'), graadID:13, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2014-07-04')},
    {licentie: 12302, voornaam: 'Ilse', achternaam: 'Geerts', geboortedatum: new Date('1972-08-13'), graadID:12, verzekeringTot: new Date('2020-02-29'), behaalop: new Date('2016-11-19')},
    {licentie: 15696, voornaam: 'Johan', achternaam: 'De Wever', geboortedatum: new Date('1953-05-04'), graadID:11, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('1999-11-13')},
    {licentie: 38441, voornaam: 'Dave', achternaam: 'MOORTHAMER', geboortedatum: new Date('1979-06-24'), graadID:7, verzekeringTot: new Date('2020-05-31'), behaalop: new Date('2019-12-22')},
    {licentie: 44135, voornaam: 'Silvie', achternaam: 'Vermeersch', geboortedatum: new Date('1977-03-21'), graadID:10, verzekeringTot: new Date('2020-07-31'), behaalop: new Date('2002-11-02')},
    {licentie: 44173, voornaam: 'Sara', achternaam: 'Daelman', geboortedatum: new Date('1980-02-13'), graadID:10, verzekeringTot: new Date('2000-01-01'), behaalop: new Date('2000-11-11')},
    {licentie: 50067, voornaam: 'Christian', achternaam: 'Ceyssens', geboortedatum: new Date('1974-06-06'), graadID:7, verzekeringTot: new Date('2020-05-31'), behaalop: new Date('2019-05-12')},
    {licentie: 51368, voornaam: 'Annelies', achternaam: 'Verbeeck', geboortedatum: new Date('1983-08-01'), graadID:10, verzekeringTot: new Date('2020-11-30'), behaalop: new Date('2004-07-19')},
    {licentie: 51926, voornaam: 'Jeroen', achternaam: 'Rumes', geboortedatum: new Date('1993-05-06'), graadID:10, verzekeringTot: new Date('2020-10-31'), behaalop: new Date('2018-06-02')},
    {licentie: 59707, voornaam: 'Philip', achternaam: 'De Smedt', geboortedatum: new Date('1958-08-27'), graadID:8, verzekeringTot: new Date('2020-10-31'), behaalop: new Date('2016-01-10')},
    {licentie: 100188, voornaam: 'Gino', achternaam: 'Van Der Heyden', geboortedatum: new Date('1964-07-22'), graadID:10, verzekeringTot: new Date('2020-03-31'), behaalop: new Date('2017-05-27')},
    {licentie: 101311, voornaam: 'Kim', achternaam: 'Steeman', geboortedatum: new Date('1978-01-23'), graadID:11, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-06-02')},
    {licentie: 102166, voornaam: 'Ayoub', achternaam: 'Jamladi Qablani', geboortedatum: new Date('1996-12-14'), graadID:7, verzekeringTot: new Date('2019-08-31'), behaalop: new Date('2015-10-28')},
    {licentie: 102279, voornaam: 'Iliase', achternaam: 'Qablani Jamladi', geboortedatum: new Date('2002-01-25'), graadID:3, verzekeringTot: new Date('2019-04-30'), behaalop: new Date('2018-10-14')},
    {licentie: 102331, voornaam: 'Hannah', achternaam: 'Geernaert', geboortedatum: new Date('1995-07-29'), graadID:5, verzekeringTot: new Date('2020-02-29'), behaalop: new Date('2011-10-28')},
    {licentie: 103426, voornaam: 'Dirk', achternaam: 'Callaert', geboortedatum: new Date('1958-11-27'), graadID:9, verzekeringTot: new Date('2020-12-31'), behaalop: new Date('2016-11-27')},
    {licentie: 103967, voornaam: 'Cor', achternaam: 'Boelen', geboortedatum: new Date('2003-06-28'), graadID:6, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 103968, voornaam: 'Tijl', achternaam: 'Boelen', geboortedatum: new Date('2005-12-16'), graadID:5, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 103969, voornaam: 'Linde', achternaam: 'Boelen', geboortedatum: new Date('2002-03-01'), graadID:7, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2017-11-26')},
    {licentie: 103974, voornaam: 'Elias', achternaam: 'Van Extergem', geboortedatum: new Date('2002-07-08'), graadID:9, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-12-22')},
    {licentie: 104559, voornaam: 'Gwynne', achternaam: 'Aloy', geboortedatum: new Date('2002-08-12'), graadID:6, verzekeringTot: new Date('2020-05-31'), behaalop: new Date('2019-05-12')},
    {licentie: 104856, voornaam: 'Nando', achternaam: 'Thoen', geboortedatum: new Date('2007-03-30'), graadID:6, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 104857, voornaam: 'Amelie', achternaam: 'Thoen', geboortedatum: new Date('2006-01-30'), graadID:6, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 104954, voornaam: 'Tobias', achternaam: 'Comte', geboortedatum: new Date('2006-11-25'), graadID:4, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-06-10')},
    {licentie: 105251, voornaam: 'Yorick', achternaam: 'Deprettere', geboortedatum: new Date('2006-10-27'), graadID:5, verzekeringTot: new Date('2020-02-29'), behaalop: new Date('2017-06-28')},
    {licentie: 105383, voornaam: 'Walter', achternaam: 'Van Herck', geboortedatum: new Date('1962-11-17'), graadID:8, verzekeringTot: new Date('2019-06-30'), behaalop: new Date('2018-03-11')},
    {licentie: 106190, voornaam: 'Hans', achternaam: 'Deprettere', geboortedatum: new Date('1971-08-24'), graadID:7, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2017-11-26')},
    {licentie: 106211, voornaam: 'Yueh-ching', achternaam: 'Lee', geboortedatum: new Date('1974-03-18'), graadID:8, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2019-12-22')},
    {licentie: 106551, voornaam: 'Robbe', achternaam: 'Canetta', geboortedatum: new Date('2007-10-08'), graadID:4, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-12-22')},
    {licentie: 106599, voornaam: 'Catarina', achternaam: 'Pinhiero', geboortedatum: new Date('2005-08-16'), graadID:6, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 106899, voornaam: 'Corinna', achternaam: 'De Block', geboortedatum: new Date('1992-03-12'), graadID:8, verzekeringTot: new Date('2020-02-29'), behaalop: new Date('2018-10-14')},
    {licentie: 107062, voornaam: 'Daan', achternaam: 'Rotthier', geboortedatum: new Date('2009-06-05'), graadID:2, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2018-10-14')},
    {licentie: 107063, voornaam: 'Olivier', achternaam: 'Rotthier', geboortedatum: new Date('1980-05-11'), graadID:7, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-05-12')},
    {licentie: 107064, voornaam: 'Christine', achternaam: 'Verelst', geboortedatum: new Date('1984-11-19'), graadID:8, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-05-12')},
    {licentie: 107147, voornaam: 'Ahid', achternaam: 'Zouhairi', geboortedatum: new Date('2008-02-11'), graadID:5, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-12-22')},
    {licentie: 107149, voornaam: 'Ilse', achternaam: 'Blyweert', geboortedatum: new Date('1973-01-10'), graadID:5, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-01-20')},
    {licentie: 107226, voornaam: 'Loes', achternaam: 'Boelen', geboortedatum: new Date('2009-05-28'), graadID:4, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-12-22')},
    {licentie: 107347, voornaam: 'Younes', achternaam: 'Saoudi', geboortedatum: new Date('2009-04-18'), graadID:4, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-12-22')},
    {licentie: 107523, voornaam: 'Daan', achternaam: 'Van Looke', geboortedatum: new Date('2008-05-05'), graadID:2, verzekeringTot: new Date('2020-10-31'), behaalop: new Date('2017-07-28')},
    {licentie: 107553, voornaam: 'Ferre', achternaam: 'Horvath', geboortedatum: new Date('2005-06-25'), graadID:5, verzekeringTot: new Date('2020-10-31'), behaalop: new Date('2019-01-20')},
    {licentie: 107663, voornaam: 'Aias', achternaam: 'Vereecken', geboortedatum: new Date('2009-11-18'), graadID:2, verzekeringTot: new Date('2020-11-30'), behaalop: new Date('2018-10-14')},
    {licentie: 107969, voornaam: 'Sultan', achternaam: 'Demir', geboortedatum: new Date('1981-01-12'), graadID:4, verzekeringTot: new Date('2020-02-29'), behaalop: new Date('2018-10-14')},
    {licentie: 108085, voornaam: 'Rodrigo', achternaam: 'Almeida Pinhiero', geboortedatum: new Date('2010-03-31'), graadID:2, verzekeringTot: new Date('2019-03-31'), behaalop: new Date('2018-06-10')},
    {licentie: 108358, voornaam: 'Lucas', achternaam: 'De Baere', geboortedatum: new Date('2009-07-09'), graadID:2, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2018-10-14')},
    {licentie: 108402, voornaam: 'Rafael', achternaam: 'Baleine', geboortedatum: new Date('2010-06-04'), graadID:1, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2018-10-14')},
    {licentie: 108709, voornaam: 'Lander', achternaam: 'Fierens', geboortedatum: new Date('2010-05-25'), graadID:3, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-12-22')},
    {licentie: 108711, voornaam: 'Xander', achternaam: 'Verhaeghe', geboortedatum: new Date('2003-09-10'), graadID:4, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-05-12')},
    {licentie: 109803, voornaam: 'Ella', achternaam: 'Comt\u00e9', geboortedatum: new Date('2010-09-22'), graadID:1, verzekeringTot: new Date('2019-10-31'), behaalop: new Date('2018-10-14')},
    {licentie: 110359, voornaam: 'Keano', achternaam: 'Joris', geboortedatum: new Date('2009-09-27'), graadID:3, verzekeringTot: new Date('2021-01-31'), behaalop: new Date('2019-05-12')},
    {licentie: 110726, voornaam: 'Wim', achternaam: 'Amelinckx', geboortedatum: new Date('1962-05-02'), graadID:2, verzekeringTot: new Date('2021-03-31'), behaalop: new Date('2019-10-27')},
    {licentie: 110738, voornaam: 'Luc', achternaam: 'Maes', geboortedatum: new Date('1976-01-14'), graadID:7, verzekeringTot: new Date('2021-03-31'), behaalop: new Date('2019-12-22')},
    {licentie: 110739, voornaam: 'Fien', achternaam: 'Horvath', geboortedatum: new Date('2011-03-31'), graadID:3, verzekeringTot: new Date('2021-03-31'), behaalop: new Date('2019-12-22')},
    {licentie: 111660, voornaam: 'Mattias', achternaam: 'Vanhuffel', geboortedatum: new Date('2010-12-29'), graadID:1, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 111752, voornaam: 'Serafim', achternaam: 'Loukochin', geboortedatum: new Date('2011-06-30'), graadID:1, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-05-12')},
    {licentie: 112014, voornaam: 'Febe', achternaam: 'Van den Abeele', geboortedatum: new Date('2003-09-30'), graadID:3, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 112015, voornaam: 'Yaakoub', achternaam: 'El-Marnissi', geboortedatum: new Date('2011-09-14'), graadID:1, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 112242, voornaam: 'Noa', achternaam: 'Vermeiren', geboortedatum: new Date('2007-02-09'), graadID:3, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-12-22')},
    {licentie: 112243, voornaam: 'Luka', achternaam: 'Vermeiren', geboortedatum: new Date('2007-02-09'), graadID:3, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-12-22')},
    {licentie: 112244, voornaam: 'Cedric', achternaam: 'Roels', geboortedatum: new Date('2008-10-11'), graadID:3, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-12-22')},
    {licentie: 112805, voornaam: 'Narek', achternaam: 'Khachatuyan', geboortedatum: new Date('2010-12-13'), graadID:0, verzekeringTot: new Date('2019-12-31'), behaalop: new Date('2018-06-26')},
    {licentie: 113259, voornaam: 'Kyona', achternaam: 'Pepels', geboortedatum: new Date('2007-12-04'), graadID:1, verzekeringTot: new Date('2020-03-31'), behaalop: new Date('2019-05-12')},
    {licentie: 113543, voornaam: 'Arsenii', achternaam: 'Kukulier', geboortedatum: new Date('2009-12-16'), graadID:0, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2019-03-03')},
    {licentie: 113714, voornaam: 'Febe', achternaam: 'De Vuyst', geboortedatum: new Date('2003-01-23'), graadID:2, verzekeringTot: new Date('2019-08-31'), behaalop: new Date('2019-01-20')},
    {licentie: 113715, voornaam: 'Femke', achternaam: 'Van Der Heyden', geboortedatum: new Date('2003-12-08'), graadID:3, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-12-22')},
    {licentie: 114273, voornaam: 'Jens', achternaam: 'Seghers', geboortedatum: new Date('2011-08-03'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-10-10')},
    {licentie: 114274, voornaam: 'Ine', achternaam: 'Van Grimberge', geboortedatum: new Date('2011-08-25'),  graadID:0, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-10')},
    {licentie: 114275, voornaam: 'Yilmaz', achternaam: 'Melih', geboortedatum: new Date('2012-01-12'), graadID:0, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-10')},
    {licentie: 114394, voornaam: 'Jonas', achternaam: 'Bolsens', geboortedatum: new Date('2009-12-08'), graadID:1, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-12-22')},
    {licentie: 114395, voornaam: 'Elise', achternaam: 'Roels', geboortedatum: new Date('2012-02-21'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-10-14')},
    {licentie: 114663, voornaam: 'Seth', achternaam: 'Meyer', geboortedatum: new Date('2012-04-03'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-10-23')},
    {licentie: 114664, voornaam: 'Jalal ahmad', achternaam: 'Amarkhil', geboortedatum: new Date('1991-12-31'), graadID:0, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-10-23')},
    {licentie: 114758, voornaam: 'Victor Manuel', achternaam: 'Arancibia Gonzalez', geboortedatum: new Date('2012-09-29'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2018-11-13')},
    {licentie: 114759, voornaam: 'Mursal', achternaam: 'Ahmadzai', geboortedatum: new Date('1980-03-18'), graadID:0, verzekeringTot: new Date('2019-09-30'), behaalop: new Date('2018-11-13')},
    {licentie: 115155, voornaam: 'Morris', achternaam: 'Smet', geboortedatum: new Date('2012-10-03'), graadID:0, verzekeringTot: new Date('2020-11-30'), behaalop: new Date('2018-12-09')},
    {licentie: 115156, voornaam: 'Eliano', achternaam: 'Smet', geboortedatum: new Date('2011-10-02'), graadID:1, verzekeringTot: new Date('2020-11-30'), behaalop: new Date('2019-12-22')},
    {licentie: 115240, voornaam: 'Wendy', achternaam: 'Hillaert', geboortedatum: new Date('1980-05-24'), graadID:2, verzekeringTot: new Date('2020-12-31'), behaalop: new Date('2019-05-12')},
    {licentie: 115259, voornaam: 'No\u00ebmi', achternaam: 'Wauters', geboortedatum: new Date('1994-09-23'), graadID:3, verzekeringTot: new Date('2020-12-31'), behaalop: new Date('2019-10-27')},
    {licentie: 115369, voornaam: 'Wouter', achternaam: 'Moorthamer', geboortedatum: new Date('2010-07-10'), graadID:1, verzekeringTot: new Date('2020-12-31'), behaalop: new Date('2019-12-22')},
    {licentie: 115575, voornaam: 'Joachim', achternaam: 'Joris', geboortedatum: new Date('2005-09-07'), graadID:2, verzekeringTot: new Date('2020-02-29'), behaalop: new Date('2019-05-12')},
    {licentie: 115591, voornaam: 'Jonas', achternaam: 'Verhulst Muller', geboortedatum: new Date('2012-02-26'), graadID:0, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2019-03-09')},
    {licentie: 115592, voornaam: 'Liesbeth', achternaam: 'Muller', geboortedatum: new Date('1977-04-17'), graadID:2, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2019-10-27')},
    {licentie: 115748, voornaam: 'Aya', achternaam: 'Kasmi', geboortedatum: new Date('2012-08-22'), graadID:0, verzekeringTot: new Date('2020-04-30'), behaalop: new Date('2019-05-01')},
    {licentie: 115825, voornaam: 'Younes', achternaam: 'Bouzekri', geboortedatum: new Date('2013-01-24'), graadID:0, verzekeringTot: new Date('2020-05-31'), behaalop: new Date('2019-06-02')},
    {licentie: 115882, voornaam: 'Hanna', achternaam: 'Verhulst Muller', geboortedatum: new Date('2013-05-27'), graadID:0, verzekeringTot: new Date('2020-05-31'), behaalop: new Date('2019-06-20')},
    {licentie: 115921, voornaam: 'A\u00efcha', achternaam: 'De Kerf', geboortedatum: new Date('2011-08-19'), graadID:0, verzekeringTot: new Date('2020-07-31'), behaalop: new Date('2019-08-21')},
    {licentie: 115922, voornaam: 'Amarilio', achternaam: 'De Kerf', geboortedatum: new Date('2013-08-11'), graadID:0, verzekeringTot: new Date('2020-07-31'), behaalop: new Date('2019-08-21')},
    {licentie: 116208, voornaam: 'Winke', achternaam: 'De Coen', geboortedatum: new Date('2010-11-17'), graadID:0, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-09-16')},
    {licentie: 116285, voornaam: 'Jules', achternaam: 'Wauman', geboortedatum: new Date('2011-06-20'), graadID:0, verzekeringTot: new Date('2020-08-31'), behaalop: new Date('2019-09-16')},
    {licentie: 116754, voornaam: 'Alexander', achternaam: 'De Baere', geboortedatum: new Date('2006-05-22'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-10-02')},
    {licentie: 116755, voornaam: 'Julie', achternaam: 'Hillaert', geboortedatum: new Date('2011-03-27'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-10-02')},
    {licentie: 117105, voornaam: 'Siebe', achternaam: 'De jonghe', geboortedatum: new Date('2011-04-12'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-10-12')},
    {licentie: 117109, voornaam: 'Lian', achternaam: 'De Rudder', geboortedatum: new Date('2012-04-18'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-10-12')},
    {licentie: 117391, voornaam: 'Lucas', achternaam: 'Bolsens', geboortedatum: new Date('2012-04-02'), graadID:0, verzekeringTot: new Date('2020-09-30'), behaalop: new Date('2019-10-23')},
    {licentie: 117500, voornaam: 'Mehdi', achternaam: 'Ouchan', geboortedatum: new Date('2013-03-26'), graadID:0, verzekeringTot: new Date('2020-10-31'), behaalop: new Date('2019-11-03')},
    {licentie: 117629, voornaam: 'Jayden', achternaam: 'Thienpont', geboortedatum: new Date('2013-08-17'), graadID:0, verzekeringTot: new Date('2020-10-31'), behaalop: new Date('2019-11-13')},
    {licentie: 117866, voornaam: 'Brosens', achternaam: 'Thari', geboortedatum: new Date('1986-08-26'), graadID:0, verzekeringTot: new Date('2021-01-31'), behaalop: new Date('2019-12-15')},
    {licentie: 117984, voornaam: 'Adam', achternaam: 'Galeb', geboortedatum: new Date('2012-04-28'), graadID:0, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2020-01-18')},
    {licentie: 117985, voornaam: 'Ghaleb', achternaam: 'Ghaleb Tail', geboortedatum: new Date('2010-11-17'), graadID:0, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2020-01-18')},
    {licentie: 117986, voornaam: 'Bowen', achternaam: 'Xi', geboortedatum: new Date('2011-10-23'), graadID:0, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2020-01-19')},
    {licentie: 118281, voornaam: 'Ella', achternaam: 'Weijters', geboortedatum: new Date('2013-12-17'), graadID:0, verzekeringTot: new Date('2021-02-28'), behaalop: new Date('2020-02-29')}
    ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit(): void {
    Array.prototype.push.apply(this.LedenAfw, this.Leden);
  }
}
