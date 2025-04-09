import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyPurchasesService {
  private readonly apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getPurchasesByUserId(userId: string) {
    return this.http
      .get(`${this.apiUrl}/cart?userId=${userId}`)
      .pipe(map((response: any) => response));
  }
}
