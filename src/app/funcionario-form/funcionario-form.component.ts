import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  id = 0;
  nome= 'Bruno';
  adicionado = false;
  
  //DECORATOR SAIDA ENVIA EVENTOS (fluxo de dentro do componente filho para o componente pai )
  //  EXPOEM EVENTOS QUE OCORREM DENTRO DESTE COMPONENTE PARA A PROPRIEDADE NO COMPONENTE PAI
  @Output() funcionarioAdicionado = new EventEmitter();

  adicionarPessoa(){
    // console.log('Salvando'+ this.name);
    console.log(`Salvando ${this.nome}`);
    this.adicionado = true;

    
    const funcionario  = {
      id: ++this.id,
      nome : this.nome
    };


    this.funcionarioAdicionado.emit(funcionario) //ENVIANDO ENVENTO PARA PRORIEDADE USADA NO COMPONENTE PAI
  }

  // alterarNome(event: any ){
  //   // console.log(event)
  //   this.name = event.target.value;
  // }
 
}
