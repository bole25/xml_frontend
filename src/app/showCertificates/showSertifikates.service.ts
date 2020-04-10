import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CertificateDTO} from '../model/dto/CertificateDTO';



@Injectable()
export class ShowCertificatesService {
  private readonly createCertificateUrl: string;

  constructor(private http: HttpClient) {
    this.createCertificateUrl = 'http://localhost:8080/certificate/showAll';
  }

  public getCertifikates(): Observable<any>{
    return this.http.get<Set<CertificateDTO>>(this.createCertificateUrl);
  }
}