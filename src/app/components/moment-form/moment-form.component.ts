import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit{
  @Input() btnText!: string 

  momentForm!: FormGroup;

  ngOnInit(): void { // inicializando coisa do angular
    this.momentForm = new FormGroup({
      id: new FormControl(''), // formControl para controlar/manipular os dados do form
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    })
  }

  get title(){
    return this.momentForm.get('title')!;
  }
  get description(){
    return this.momentForm.get('description')!;
  }

  submit(){
    if(this.momentForm.invalid){ // se for invalido ficará travado
      return;
    }
    console.log("Enviou formulario!");
  }
}
