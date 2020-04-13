import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ShowCertificatesService} from './showSertifikates.service';
import {CertificateDTO} from '../model/dto/CertificateDTO';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-showCertificates',
  templateUrl: './showCertificates.component.html'
})

export class ShowCertificatesComponent implements OnInit {
    public certificates: Set<CertificateDTO>;
    constructor(private router: Router, private route: ActivatedRoute, private service: ShowCertificatesService) {
    this.certificates = new Set<CertificateDTO>();
  }

  ngOnInit(): void {
    this.service.getCertifikates().subscribe(data => {this.certificates = data; });
  }

  displayCertificate(alias : string){
    this.service.saveEach(alias).subscribe();
    this.router.navigateByUrl('/showCertificates/each');
  }

}
