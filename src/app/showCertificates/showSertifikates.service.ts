import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CertificateDTO} from '../model/dto/CertificateDTO';
import { NONE_TYPE } from '@angular/compiler';



@Injectable()
export class ShowCertificatesService {
  private readonly createCertificateUrl: string;
  private readonly saveCertificateUrl : string;
  private readonly unvalidateCertificateUrl: string;
  private readonly downloadFileUrl: string;

  constructor(private http: HttpClient) {
    this.createCertificateUrl = 'http://localhost:8080/certificate/showAll';
    this.saveCertificateUrl = 'http://localhost:8080/certificate/saveEach/'
    this.unvalidateCertificateUrl = 'http://localhost:8080/certificate/unvalidate';
    this.downloadFileUrl = 'http://localhost:8080/certificate/makeFile/';
  }

  public getCertifikates(): Observable<any>{
    return this.http.get<Set<CertificateDTO>>(this.createCertificateUrl);
  }

  public saveEach(alias:string): Observable<any>{
      var url = this.saveCertificateUrl + alias;
      return this.http.get<null>(url);
  }

  public makeFile(alias: string): Observable<any>{
    // tslint:disable-next-line:prefer-const
    var url = this.downloadFileUrl + alias;
    return this.http.get<null>(url);
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
