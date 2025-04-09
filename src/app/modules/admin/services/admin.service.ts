import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CartJSON } from '../../../core/models/CartJSON.model';
import { Shoes } from '../../../core/models/Shoes.model';
import { UserJSON } from '../../../core/models/UserJSON.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserJSON[]> {
    return this.http
      .get(`${this.apiUrl}/users`)
      .pipe(map((response: any) => response));
  }

  getAllProducts(): Observable<Shoes[]> {
    return this.http
      .get(`${this.apiUrl}/shoes`)
      .pipe(map((response: any) => response));
  }

  getAllPurchases(): Observable<CartJSON[]> {
    return this.http
      .get(`${this.apiUrl}/cart`)
      .pipe(map((response: any) => response));
  }
}
