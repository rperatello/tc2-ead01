import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaProdutos: Produto[] = [];

  produtoDeletar : Produto = {
    _id:  "",
    title: "",
    description: "",
    price: 0.0,
    createdAt: "",
    updatedAt: "",
    __v: 0
  };

  produtoAlterar : Produto = {
    _id:  "",
    title: "",
    description: "",
    price: 0.0,
    createdAt: "",
    updatedAt: "",
    __v: 0
  };

  constructor(private web: WebService) { }

  carregarProdutos(): void {
    this.web.getProdutos().subscribe( (res: Produto[]) => {
      this.listaProdutos = res;
    });
  }

  selecionaProduto(produto: Produto): void{
    this.produtoDeletar = produto;
    console.log(this.produtoDeletar);
  }

  selecionaAlteraProduto(produto: Produto): void{
    this.produtoAlterar = produto;
    console.log(this.produtoAlterar);
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

}
