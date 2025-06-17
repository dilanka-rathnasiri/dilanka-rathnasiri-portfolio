import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
    
    loadData<T>(fileName: string): Observable<T> {
        return this.httpClient.get<T>(`/assets/${fileName}.json`);
    }
}
