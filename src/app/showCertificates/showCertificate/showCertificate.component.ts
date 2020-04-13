import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CertificateDTO} from '../../model/dto/CertificateDTO';
import { switchMap } from 'rxjs/operators';
import {ShowCertificateService} from './showCertificate.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-showCertificate',
  templateUrl: './showCertificate.component.html'
})

export class ShowCertificateComponent implements OnInit{
    alias : string;
    certificate : CertificateDTO;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ShowCertificateService,
      ) {
        this.certificate = new CertificateDTO();
      }

    ngOnInit(): void {
      this.service.getCertifikate().subscribe(data => {this.certificate = data;});
    }

    downloadFile(alias : string){
      
      this.service.makeFile(alias).subscribe();
      
      document.getElementById("btnFile").hidden = true;
      document.getElementById("btnYes").hidden = false;
      document.getElementById("btnNo").hidden = false;
      document.getElementById("text").hidden = false;
    }

    noAction(){
      document.getElementById("btnFile").hidden = false;
      document.getElementById("btnYes").hidden = true;
      document.getElementById("btnNo").hidden = true;
      document.getElementById("text").hidden = true;


    }

    yesAction(){
      var s = 0;
    }
}