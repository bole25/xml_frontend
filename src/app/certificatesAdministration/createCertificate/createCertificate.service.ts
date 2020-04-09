import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SubjectDataDTO} from '../../model/dto/SubjectDataDTO';
import {Observable} from 'rxjs';



@Injectable()
export class CreateCertificateService {
  private readonly createCertificateUrl: string;

  constructor(private http: HttpClient) {
    this.createCertificateUrl = 'http://localhost:8080/certificate/create';
  }

  public createCertificate(subjectDataDTO: SubjectDataDTO): Observable<any>{
    return this.http.post<any>(this.createCertificateUrl, subjectDataDTO);
  }
}
