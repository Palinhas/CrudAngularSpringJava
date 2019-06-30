import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../Modelo/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  /**
   * Esta url vai fazer referência ao projeto BackEnd
   */
  Url='http://localhost:8080/exemplo01/pessoa'

  getPessoas(){
    return this.http.get<Pessoa[]>(this.Url);
  }
  createPessoa(pessoa:Pessoa){
    return this.http.post<Pessoa>(this.Url,pessoa);
  }
}
