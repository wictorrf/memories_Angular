import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Moment } from 'src/app/Moment';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string 

  momentForm!: FormGroup;

  ngOnInit(): void { // inicializando coisas do angular
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
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    this.momentForm.patchValue({image: file}); // para inserir a imagem
  }

  submit(){
    if(this.momentForm.invalid){ // se for invalido ficará travado
      return;
    }
    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);
  }
}
