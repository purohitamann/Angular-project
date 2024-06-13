import { Component , Input } from '@angular/core';
interface Info{
  title: string;
  p: string;
  github: string;
  linkedIn: string;

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 @Input() Info!: Info;
 @Input() darkMode!: boolean;
}
