import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';
@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})

export class AlterarComponent implements OnInit {

  @Input() produtoAlterar : Produto | undefined;

  constructor( private web : WebService) { }

  ngOnInit(): void {
  }

  recarregar(): void{
    alert("Operação cancelada!!");
    location.reload();
  }

  alterar(){
    this.web.alterarProduto(this.produtoAlterar).subscribe( res => {
      res.ok ? alert("Ateração realizada com sucesso!!") : alert ("Falha na alteração!!");
      location.reload();
    });
  }

}
