import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';



@Injectable()
export class ShowCertificatesService {
  private readonly createCertificateUrl: string;

  constructor(private http: HttpClient) {
    this.createCertificateUrl = 'http://localhost:8080/certificate/showAll';
  }

  public getCertifikates(): Observable<any>{
    return this.http.get(this.createCertificateUrl);
  }
}