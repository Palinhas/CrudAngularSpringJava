import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService}from '../../Service/service.service'
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pessoas:Pessoa[]
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPessoas()
    .subscribe(data=>{
      this.pessoas=data;
    })
  }

}
