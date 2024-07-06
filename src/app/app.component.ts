import { Component ,Renderer2, Inject } from '@angular/core';
import data from '../data/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  contact = data.contact;
  name="Aman Hiran Purohit";
  location="Burlington, ON Canada";
  info = data.info;
  blurs = ['blur-01', 'blur-02', 'blur-06', 'blur-03', 'blur-04', 'blur-05'];
  darkMode = false;
}
