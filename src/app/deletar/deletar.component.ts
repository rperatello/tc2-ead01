import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  @Input() produtoSelecionado : Produto | undefined;

  constructor(private web : WebService) { }

  recarregar() : void{
    alert("Operação cancelada !!");
    location.reload();
  }

  excluir(){
    this.web.exluirProduto(this.produtoSelecionado).subscribe( res => {
      res.ok ? alert("Exclusão realizada com sucesso!!") : alert ("Falha na exclusão!!");
      location.reload();
    });
  }

  ngOnInit(): void {
  }

}
