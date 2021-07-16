import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular';

  lista = <any>[]; //ANY NAO E UM BOA PRATICA PARA TIPAGEM NESTE CASO

  //@PARAM SÃO OS DADOS RECEBIDOS DO EVENTO DE CLICCK NO COMPONENT FORM QUE FOI REPASSADO POR PROPERTY BINDIND 
  aoAdicionar(funcionario:any){
    this.lista.push(funcionario);


  }
  
}
