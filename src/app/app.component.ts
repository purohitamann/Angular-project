import { Component ,Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  contact ={
    title : "Contact",
    p: "Enjoyed exploring my portfolio? If you appreciate my work, I'd be grateful for your endorsement on LinkedIn. Your support means the world! Don't forget to connect with me on LinkedIn too—I'd love to stay in touch and explore potential collaborations. Thank you for taking the time to review my portfolio. I'd love to hear from you\!",
    connectURL: "https://www.linkedin.com/in/amanhiranpurohit/"
  };
  name="Aman Hiran Purohit";
  location="Burlington, ON Canada";
  info = {
    title: "Aman Hiran Purohit",
    p:" Hello! I'm a Software & Network Major at Sheridan College in Oakville, actively seeking Co-op opportunities in tech for Fall 2024. I showcase my work on my projects and blog on this platform. If you find my work intriguing, feel free to connect with me or endorse my skills.",
    github: "https://github.com/purohitamann",
    linkedIn: "https://www.linkedin.com/in/amanhiranpurohit/",
  };
  blurs = ['blur-02', 'blur-06', 'blur-03', 'blur-04', 'blur-05'];
  darkMode = false;
  
}
