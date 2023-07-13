import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  BtnText = "Compartilhar!";

  constructor(
    private momentService: MomentService,
    private messagesServices: MessagesService,
    private router: Router
  ){}

  async createHandle(moment: Moment){
    const formData = new FormData(); // envio dos dados no padrao formdata:
    formData.append("title", moment.title);    
    formData.append("description", moment.description);    

    if (moment.image) {
      formData.append("image", moment.image);
    } 

    //todo

    //enviar para o service
    await this.momentService.createMoment(formData).subscribe();

    //exibir msg
    this.messagesServices.add("Momento adicionado com sucesso!")

    //redirect
    this.router.navigate(['/']); 
  }
}
