import { Data } from './../interfaces/data.interface';
import { Injectable } from '@angular/core';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConnectorService } from './connector.service';
import { product, productCategory, productSearch, category, like, cart, login } from '../constants/url.constant';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response.interface';



fdescribe('ConnectorService', () => {
  let connector: ConnectorService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ConnectorService],
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    connector = TestBed.get(ConnectorService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ConnectorService = TestBed.get(ConnectorService);
    expect(service).toBeTruthy();
  });

  it('should retrive Products from the API', () => {
    const dummyResponse: Data = {
      data: [{ id: 0}]
    };

    connector.product().subscribe(posts => {
      expect(posts.data.length).toBe(1);
    });

    const request = httpMock.expectOne(product);
    request.flush(dummyResponse);
    expect(request.request.method).toBe('GET');
  });

  it('should retrive Catagories from the API', () => {
    const dummyResponse: Data = {
      data: [{ id: 0}]
    };

    connector.category().subscribe(posts => {
      expect(posts.data.length).toBe(1);
    });

    const request = httpMock.expectOne(category);
    request.flush(dummyResponse);
    expect(request.request.method).toBe('GET');
  });


  it('should retrive Products filtered from the API', () => {
    const dummyResponse: Data = {
      data: [{ id: 0}]
    };

    connector.productCategory('newfilter').subscribe(posts => {
      expect(posts.data.length).toBe(1);
    });

    const request = httpMock.expectOne(productCategory);
    request.flush(dummyResponse);
    expect(request.request.method).toBe('GET');
  });


  it('should retrive searched products filtered from the API', () => {
    const dummyResponse: Data = {
      data: [{ id: 0}]
    };

    connector.productSearch('newfilter').subscribe(posts => {
      expect(posts.data.length).toBe(1);
    });

    const request = httpMock.expectOne(productSearch);
    request.flush(dummyResponse);
    expect(request.request.method).toBe('GET');
  });

  it('should retrive Like Dislike data from the API', () => {
    const dummyResponse: Data = {
      data: [{ id: 0}]
    };

    connector.like({kind: 1, product_id: 1}).subscribe(posts => {
      expect(posts.data.length).toBe(1);
    });

    const request = httpMock.expectOne(like);
    request.flush(dummyResponse);
    expect(request.request.method).toBe('POST');
  });

  it('should retrive information after doing the cart post ', () => {
    const dummyResponse: Data = {
      data: [{ id: 0}]
    };

    connector.cart('nothing').subscribe(posts => {
      expect(posts.data.length).toBe(1);
    });

    const request = httpMock.expectOne(cart);
    request.flush(dummyResponse);
    expect(request.request.method).toBe('POST');
  });

  it('login should retrive information after being called', () => {
    const dummyResponse: LoginResponse = {
      data: { token: '123'}
    };

    connector.login({id: 1}).subscribe(posts => {
      expect(posts).toBe(dummyResponse);
    });

    const request = httpMock.expectOne(login);
    request.flush(dummyResponse);
    expect(request.request.method).toBe('POST');
  });
});
