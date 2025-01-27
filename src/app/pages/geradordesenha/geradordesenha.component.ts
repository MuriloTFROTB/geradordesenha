import { Component } from '@angular/core';

@Component({
  selector: 'app-geradordesenha',
  standalone: true,
  imports: [],
  templateUrl: './geradordesenha.component.html',
  styleUrl: './geradordesenha.component.scss'
})
export class GeradordesenhaComponent {
  password: string = '';
  maiusculas: boolean = false;
  minusculas: boolean = false;
  numeros: boolean = false;
  simbolos: boolean = false;
  emoji: boolean = false;
  quantidadeletraSenha: number = 0;

  useNumber() {
    this.numeros = !this.numeros;
  }
  useSimbolos() {
    this.simbolos = !this.simbolos;
  }
  useMaiusculas() {
    this.maiusculas = !this.maiusculas;
  }
  useMinusculas() {
    this.minusculas = !this.minusculas;
  }
  useEmoji() {
    this.emoji = !this.emoji;
  }

  quantasLetras(event: Event) {
    const input = event.target as HTMLInputElement;
    let valuenumber = parseInt(input.value, 10);
    if (!isNaN(valuenumber)) {
      this.quantidadeletraSenha = valuenumber;
    }
  }

  geradorDeSenha() {
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let maisuculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';
    let simbolos = '!@#$%^&*()';
    let emojis = '👮👯👰👱👲';

    let senhagerada = '';
    let validador = '';

    if (this.maiusculas) {
      validador += maisuculas;

    }
    if (this.minusculas) {
      validador += minusculas;
    }
    if (this.numeros) {
      validador += numeros;
    }
    if (this.simbolos) {
      validador += simbolos
    }
    if (this.emoji) {
      validador += emojis;
    }

    for (let i = 0; i < this.quantidadeletraSenha; i++) {
      const index = Math.floor(Math.random() * validador.length);
      senhagerada += validador[index];
    }
    this.password = senhagerada;
    console.log(this.password);
  }


  copiarSenha() {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(
        () => {
          alert("Senha copiada");
        }
      )
    }
  }
}
