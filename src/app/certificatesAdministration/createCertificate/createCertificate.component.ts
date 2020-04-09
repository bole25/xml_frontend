import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {SubjectDataDTO} from '../../model/dto/SubjectDataDTO';
import {CreateCertificateService} from './createCertificate.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-createCertificate',
  templateUrl: './createCertificate.component.html'
})

export class CreateCertificateComponent implements OnInit {
  subjectData: SubjectDataDTO;
  constructor(private router: Router, private route: ActivatedRoute, private service: CreateCertificateService) {
    this.subjectData = new SubjectDataDTO();
  }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    // TODO 1 Prilikom ucitavanja stranice create certificate odmah ucitati sve sertifikate koji mogu biti issueri (sto bi znacilo bez end entity i bez povucenih)

  }

  onSubmitCreate() {
    alert(this.subjectData.cn + ' ' + this.subjectData.ou);
    this.service.createCertificate(this.subjectData).subscribe(result => {
      alert('Successfully');
      location.reload();
    });
  }
}
