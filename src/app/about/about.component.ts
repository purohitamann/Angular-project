import { Component } from '@angular/core';
import {workExperience} from './data';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skillsImages: string[] = [
    'assets/skills/angular-01.jpg',
    'assets/skills/Tech-Stack-aws.png',
    'assets/skills/Tech-Stack-css.png',
    'assets/skills/db.png',
    'assets/skills/figma.png',
    'assets/skills/Tech-Stack-html.png',
    'assets/skills/Tech-Stack-java.png',
    'assets/skills/Tech-Stack-js.png',
    'assets/skills/Tech-Stack-react.png',
    'assets/skills/Tech-Stack-sass.png',

  ];
  workExperiences = workExperience;
}
