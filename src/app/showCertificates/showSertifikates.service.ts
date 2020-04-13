import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CertificateDTO} from '../model/dto/CertificateDTO';



@Injectable()
export class ShowCertificatesService {
  private readonly createCertificateUrl: string;
  private readonly saveCertificateUrl : string;

  constructor(private http: HttpClient) {
    this.createCertificateUrl = 'http://localhost:8080/certificate/showAll';
    this.saveCertificateUrl = 'http://localhost:8080/certificate/saveEach/'
  }

  public getCertifikates(): Observable<any>{
    return this.http.get<Set<CertificateDTO>>(this.createCertificateUrl);
  }

  public saveEach(alias:string): Observable<any>{
      var url = this.saveCertificateUrl+alias;
      return this.http.get<null>(url);
  }
}
