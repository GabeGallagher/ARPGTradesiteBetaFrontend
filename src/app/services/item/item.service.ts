import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemQuery } from '../../interfaces/item.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = `https://localhost:7059/api/Test/test-get-items`;

  constructor(private http: HttpClient) { }
  
  getItems(query: ItemQuery): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      const value = query[key as keyof ItemQuery];
      if (value !== undefined && value !== '') {
        params = params.append(key, value.toString());
      }
    });

    return this.http.get(this.apiUrl, {params});
  }
}
