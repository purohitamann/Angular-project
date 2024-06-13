import { Component, Input } from '@angular/core';
interface Contact {
  title: string;
  p: string;
  connectURL: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 @Input() contact!:Contact ;
 @Input() darkMode!: boolean;
}
