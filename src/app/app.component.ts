import { Component ,Renderer2, Inject } from '@angular/core';
import data from '../data/content.json';
import projectData from '../data/project.json';
import { Project } from './project-div/project.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  projectData:{projects:Project[]} = projectData;
  contact = data.contact;
  name=data.info.title;
  location=data.info.location;
  info = data.info;
  blurs = data.info.blurs;
  darkMode = false;
}
