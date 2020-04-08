import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-createCertificate',
  templateUrl: './createCertificate.component.html'
})

export class CreateCertificateComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
