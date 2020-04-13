import {ActivatedRoute, Router} from '@angular/router';
import {Component, Inject, OnInit} from '@angular/core';
import {SubjectDataDTO} from '../../model/dto/SubjectDataDTO';
import {CreateCertificateService} from './createCertificate.service';
import {DOCUMENT} from '@angular/common';
import {CertificateDTO} from '../../model/dto/CertificateDTO';
import {newArray} from '@angular/compiler/src/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-createCertificate',
  templateUrl: './createCertificate.component.html'
})

export class CreateCertificateComponent implements OnInit {
  subjectData: SubjectDataDTO;
  type: string;
  intermediate: Set<CertificateDTO>;
  selfsigned: Set<CertificateDTO>;
  aliases: Set<string>;
  // tslint:disable-next-line:max-line-length
  constructor(@Inject(DOCUMENT) document, private router: Router, private route: ActivatedRoute, private service: CreateCertificateService) {
    this.subjectData = new SubjectDataDTO();
    this.selfsigned = new Set<CertificateDTO>();
    this.intermediate = new Set<CertificateDTO>();

  }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    // TODO 1 Prilikom ucitavanja stranice create certificate odmah ucitati sve sertifikate koji mogu biti issueri (sto bi znacilo bez end entity i bez povucenih)
    this.service.getValidIntermediate().subscribe(data => {this.intermediate = data;
                                                           this.service.getValidSelfSigned().subscribe(data1 => {this.selfsigned = data1;
                                                             // tslint:disable-next-line:max-line-length
                                                                                                                 this.reloadParents();                                                             // tslint:disable-next-line:max-line-length

      });
    });


  }

  onSubmitCreate() {
    const e = (document.getElementById('certType')) as HTMLSelectElement;
    const sel = e.selectedIndex;
    const opt = e.options[sel];
    const CurValue = opt.value;

    const e1 = (document.getElementById('ali')) as HTMLSelectElement;
    const sel1 = e1.selectedIndex;
    const opt1 = e1.options[sel1];
    const alias = opt1.value;

    const e2 = (document.getElementById('templateoption')) as HTMLSelectElement;
    const sel2 = e.selectedIndex;
    const opt2 = e.options[sel];
    const tempate = opt2.value;
    this.service.createCertificate(this.subjectData, CurValue, alias, tempate).subscribe(result => {
      alert('Successfully');
      location.reload();
    });
  }

  reloadParents() {
    const e = (document.getElementById('certType')) as HTMLSelectElement;
    const sel = e.selectedIndex;
    const opt = e.options[sel];
    const CurValue = opt.value;
    this.aliases = new Set<string>();
    if (CurValue === 'selfsigned'){
      this.aliases.add('root');
    }
    else if (CurValue === 'intermediate'){
      for (const c of this.intermediate) {
        this.aliases.add(c.alias);
      }
      for (const ca of this.selfsigned) {
        this.aliases.add(ca.alias);
      }
    }
    else if (CurValue === 'endentity'){
      for (const c of this.intermediate) {
        this.aliases.add(c.alias);
      }
    }
    else{}

  }
}
