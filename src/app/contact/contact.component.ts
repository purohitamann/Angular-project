import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
 contact!:Contact ;
 @Input() darkMode!: boolean;
 constructor(private http: HttpClient) {}
 ngOnInit() {
  this.getData();
}

getData() {
  let url = '../assets/data/content.json';
  this.http.get(url).subscribe((res: any) => {
   
    this.contact=res.contact;
   
    // console.log(res);
  });
}
}
