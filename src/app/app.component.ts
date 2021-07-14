import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular';
  nome= 'Bruno';
  adicionado = false;
  listaFuncionarios = [];

  adicionarPessoa(){
    // console.log('Salvando'+ this.name);
    console.log(`Salvando ${this.nome}`);
    this.adicionado = true;
    // this.listaFuncionarios.push(this.nome)
  }

  // alterarNome(event: any ){
  //   // console.log(event)
  //   this.name = event.target.value;
  // }
}
