import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CertificateDTO} from '../../model/dto/CertificateDTO';



@Injectable()
export class ShowCertificateService {
  private readonly getAliasUrl : string;
  private readonly downloadFileUrl : string;

  constructor(private http: HttpClient) {
    this.getAliasUrl = 'http://localhost:8080/certificate/getAlias';
    this.downloadFileUrl = 'http://localhost:8080/certificate/makeFile/';
  }

  public getCertifikate(): Observable<any>{
    return this.http.get<CertificateDTO>(this.getAliasUrl);
  }

  public makeFile(alias : string): Observable<any>{
    var url = this.downloadFileUrl + alias;
    return this.http.get<null>(url);
  }


}