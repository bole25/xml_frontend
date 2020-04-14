import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SubjectDataDTO} from '../../model/dto/SubjectDataDTO';
import {Observable} from 'rxjs';
import {CertificateDTO} from '../../model/dto/CertificateDTO';



@Injectable()
export class CreateCertificateService {
  private readonly createCertificateUrl: string;
  private readonly getValidUrl: string;

  constructor(private http: HttpClient) {
    this.createCertificateUrl = 'http://localhost:8080/certificate/create';
    this.getValidUrl = 'http://localhost:8080/certificate/getValid';
  }

  public createCertificate(subjectDataDTO: SubjectDataDTO, certificateType: string, alias: string, template: string): Observable<any>{
    return this.http.post<any>(this.createCertificateUrl + '/' + certificateType + '/' + alias +'/' + template + '/' , subjectDataDTO);
  }

  public getValidIntermediate(){
    return this.http.get<Set<CertificateDTO>>(this.getValidUrl + '/immediateCertificateKS.jks/');
  }

  public getValidSelfSigned(){
    return this.http.get<Set<CertificateDTO>>(this.getValidUrl + '/rootCertificateKS.jks/');
  }

}
