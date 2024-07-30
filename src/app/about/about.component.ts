import { Component, Input } from '@angular/core';
import data from '../../assets/data/content.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 
  @Input() darkMode!: boolean;
  @Input() data!: any;
  skillsImages: string[] | null = data.img;
  workExperiences = data.workHistory;
}
