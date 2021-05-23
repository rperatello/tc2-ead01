import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './Produto';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "https://banco-dados-teste.glitch.me/api";

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseURL}/produtos`);
  }

  cadastrarProduto(produto: { title: string; price: number; description: string; }) : Observable<any>{
    let body = new HttpParams();
    body = body.set("title", produto.title);
    body = body.set("price", String(produto.price));
    body = body.set("description", produto.description);
    return this.http.post(`${this.baseURL}/produtos`, body, {observe: "response"});
  }

  exluirProduto(produto: any): Observable<any>{
    return this.http.delete(`${this.baseURL}/produtos/${produto._id}`, {observe: "response"});
  }

  alterarProduto(produto: any): Observable<any>{
    let body = new HttpParams();
    body = body.set("title", produto.title);
    body = body.set("price", String(produto.price));
    body = body.set("description", produto.description);
    return this.http.put(`${this.baseURL}/produtos/${produto._id}`, body, {observe: "response"});
  }

  constructor(private http: HttpClient) { }
}
