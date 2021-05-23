import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {

  produto = {
    title: "",
    price: 0.0,
    description: ""
  };

  constructor(private web : WebService) { }

  cadastrar(){
    this.web.cadastrarProduto(this.produto).subscribe( res => {
      res.ok ? alert("Cadastro realizado com sucesso!!") : alert ("Falha ao cadastrar!!");
      location.reload();
    });
  }

  ngOnInit(): void {
  }

}
