import { Like } from './../interfaces/like.interface';
import { LoginResponse } from './../interfaces/login-response.interface';
import { Data } from './../interfaces/data.interface';
import { product, category, productCategory, productSearch, like, cart } from './../constants/url.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../constants/url.constant';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<LoginResponse> {
    return this.http
      .post(login, { data: user });
  }

  product(): Observable<Data> {
    return this.http
      .get(product);
  }

  productCategory(filter: string): Observable<Data> {
    const url = productCategory.replace('newfilter', filter);
    return this.http
      .get(url);
  }

  productSearch(filter: string): Observable<Data> {
    const url = productSearch.replace('newfilter', filter);
    return this.http
      .get(url);

  }

  category(): Observable<Data> {
    return this.http
      .get(category);
  }

  like(likedProduct: Like): Observable<Data> {
    const data = {
      data: { kind: likedProduct.kind, product_id: likedProduct.product_id },
    };
    return this.http
      .post(like, data);
  }
  cart(values: any): Observable<Data> {
    const data = {
      data : values
    }
    return this.http.post(cart, data);
  }
}
