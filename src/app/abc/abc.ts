import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abc',
  imports: [CommonModule],
  templateUrl: './abc.html',
  styleUrl: './abc.css'
})
export class Abc {
    condicao : boolean = true;
    binario : number = 0b10100011;
    hexadecimal : number = 0x1ef24411;
    teste = this.binario ^ this.hexadecimal;
    lista : string [] = ['allekstat', 'dum', 'arenoso', 'espancador', 'coentro', 'dimebong'];
    pontos : number = 15_000;
    media : number = 6;
    linguagem : string= 'c';
}
