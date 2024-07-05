import { Component, Input } from '@angular/core';
import data from '../../data/aboutData.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skillsImages: string[] = data.img;
  workExperiences = data.workHistory;
  @Input() darkMode!: boolean;
}
