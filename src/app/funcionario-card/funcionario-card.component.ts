import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  // funcionario = {id:1 , nome: 'Bruno'}

  //USANDO DECORADOR PARA EXPORT COMPONENTE E ATRIBUTOS DO MESMO PARA FORA DO ESCOPO DO FUNCIONARIO CARD
  // É POSSIVEL USAR UM ALIAS @Input('alias-aqui') PARA REFERENCIA DA PROPRIEDADE ONDE O COMPONENT É USADO
  @Input() funcionario : any;
  

}
