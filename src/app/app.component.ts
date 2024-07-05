import { Component ,Renderer2, Inject } from '@angular/core';
import myInfo from '../data/myInfo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  contact = myInfo.contact;
  name="Aman Hiran Purohit";
  location="Burlington, ON Canada";
  info = myInfo.info;
  blurs = ['blur-01', 'blur-02', 'blur-06', 'blur-03', 'blur-04', 'blur-05'];
  darkMode = false;

  
}
