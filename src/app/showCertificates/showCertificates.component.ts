import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ShowCertificatesService} from './showSertifikates.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-showCertificates',
  templateUrl: './showCertificates.component.html'
})

export class showCertificatesComponent implements OnInit {
    public certificates: Set<String>;
  constructor(private router: Router, private route: ActivatedRoute,private service: ShowCertificatesService) {
    this.certificates = new Set<String>();
  }

  ngOnInit(): void {
    this.service.getCertifikates().subscribe(data => {this.certificates = data; });
    console.log(this.certificates);
  }

}