import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormKhipu } from '../model/forms';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  public enviar(body: FormKhipu): Observable<any> {
    return this.http.post(this.commonService.formsUrl, body);
  }
}
