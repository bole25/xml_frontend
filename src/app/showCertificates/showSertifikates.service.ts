import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CertificateDTO} from '../model/dto/CertificateDTO';
import { NONE_TYPE } from '@angular/compiler';



@Injectable()
export class ShowCertificatesService {
  private readonly createCertificateUrl: string;
  private readonly unvalidateCertificateUrl: string;

  constructor(private http: HttpClient) {
    this.createCertificateUrl = 'http://localhost:8080/certificate/showAll';
    this.unvalidateCertificateUrl = 'http://localhost:8080/certificate/unvalidate';
  }

  public getCertifikates(): Observable<any>{
    return this.http.get<Set<CertificateDTO>>(this.createCertificateUrl);
  }

  public unvalidateCertificate(c){
    // stavi poziv funkcije za devalicadiju iz backenda
    //console.log(this.unvalidateCertificateUrl + '/' + c.alias);
    
    console.log(this.unvalidateCertificateUrl + '/' + c.alias);
    const reg = this.http.post<String>(this.unvalidateCertificateUrl, c.alias);
    reg.subscribe();
    return 
  }
}
