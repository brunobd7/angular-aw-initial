import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular';
  id = 0;
  nome= 'Bruno';
  adicionado = false;
  lista = <any>[]; //ANY NAO E UM BOA PRATICA PARA TIPAGEM NESTE CASO

  adicionarPessoa(){
    // console.log('Salvando'+ this.name);
    console.log(`Salvando ${this.nome}`);
    this.adicionado = true;

    this.lista.push({
      id: ++this.id,
      nome : this.nome
    });
  }

  // alterarNome(event: any ){
  //   // console.log(event)
  //   this.name = event.target.value;
  // }
}
