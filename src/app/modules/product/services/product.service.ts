import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Categories } from '../../../core/models/Categories.model';
import { Shoes } from '../../../core/models/Shoes.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAllShoes(): Observable<Shoes[]> {
    return this.http
      .get(`${this.apiUrl}/shoes`)
      .pipe(map((response: any) => response));
  }

  getSingleShoes(productId: string): Observable<Shoes> {
    return this.http
      .get(`${this.apiUrl}/shoes/${productId}`)
      .pipe(map((response: any) => response));
  }

  getNewReleases(): Observable<Shoes[]> {
    return this.http
      .get(`${this.apiUrl}/shoes?newRelease=true`)
      .pipe(map((response: any) => response));
  }

  getNewReleasesLimit(limit: number): Observable<Shoes[]> {
    return this.http
      .get(`${this.apiUrl}/shoes?newRelease=true&_limit=${limit}`)
      .pipe(map((response: any) => response));
  }

  getCategories(): Observable<Categories[]> {
    return this.http
      .get(`${this.apiUrl}/categories`)
      .pipe(map((response: any) => response));
  }

  getShoesByCategory(categoryId: string): Observable<Shoes[]> {
    return this.http
      .get(`${this.apiUrl}/shoes?categoryId=${categoryId}`)
      .pipe(map((response: any) => response));
  }
}
