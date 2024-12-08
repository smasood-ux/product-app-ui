import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IProduct } from '../products/product';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = environment.API + 'api/products';
  private products?: IProduct[];

  constructor(private http: HttpClient) { }

  public getProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl).pipe(
      tap(data => console.log('Products Received: ', JSON.stringify(data))),
      tap(data => this.products = data),
      catchError(err => {
        const errorMessage = `getProducts API failed with the error ${err.error}`;
        return throwError(() => errorMessage);
      })
    );
  }
}
