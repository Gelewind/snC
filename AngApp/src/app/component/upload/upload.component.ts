import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons'
import { Vkflid } from 'src/app/class/vkflid';
import { Msg } from '../../class/msg'
import { KarateService } from '../../service/karate.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  faFileExcel = faFileExcel;
  fields: string[] = [];
  msgs: Msg[] = [];

  constructor(private kServic: KarateService) { }

  ngOnInit(): void {
  }

  VKFxls(fileInputEvent: Event) {
    const element = fileInputEvent.currentTarget as HTMLInputElement;
    if (element.files){
      let fileList: FileList = element.files;
      // console.log("FileUpload -> files", fileList);
      for(let i=0; i < fileList.length; i++){
        const blob = fileList[i] as Blob;
        this.uploadDocument(blob)
      }  
    }
  }

  uploadDocument(file: Blob) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
       // console.log(fileReader.result);
       let inhoud = fileReader.result as string;
       let rows = inhoud.split("\r\n");

       for(let i = 0; i<rows.length; i++){
         if (i==0){
          this.fields = rows[i].split("\t");
          console.log(JSON.stringify(this.fields));
         }
         else{
           let values =  rows[i].split("\t");
           const vkflid:Vkflid = new Vkflid(
             Number( values[this.fields.indexOf('licentie')]),
             values[this.fields.indexOf('geldigheidsdatum')],
             values[this.fields.indexOf('voornaam')],
             values[this.fields.indexOf('achternaam')],
             values[this.fields.indexOf('straatnummer')],
             values[this.fields.indexOf('postnummer')],
             values[this.fields.indexOf('gemeente')],
             values[this.fields.indexOf('telefoon')],
             values[this.fields.indexOf('gsm')],
             values[this.fields.indexOf('email')],
             values[this.fields.indexOf('email2')],
             values[this.fields.indexOf('nationaliteit')],
             values[this.fields.indexOf('land')],
             values[this.fields.indexOf('geslacht')],
             values[this.fields.indexOf('geboortedatum')],
             values[this.fields.indexOf('status')],
             values[this.fields.indexOf('aansluitingsdatum')],
             values[this.fields.indexOf('graad')],
             values[this.fields.indexOf('behaald')]);
          this.kServic.storeLidVkf(vkflid).subscribe((data)=>{
            data.Msgs.forEach(m=>{this.msgs.push(m )});
            
          })
         }

       }
    }
    fileReader.readAsText(file);
 }

}
