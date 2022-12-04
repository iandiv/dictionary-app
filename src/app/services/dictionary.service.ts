
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) {}
 
  getRes(page = 1): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/hello`
    );
  }
}
