import { Component, OnInit } from '@angular/core';
import { Email } from 'src/models/email.model';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
email:Email={};
  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
  }
  evoyer(mail:Email){
mail.destinataire="assodjida@gmail.com";
this.emailService.envoyerEmail(mail).subscribe(prod=>{
  console.log(prod)
}

)
  }

}
