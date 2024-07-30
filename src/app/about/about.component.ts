import { Component, Input } from '@angular/core';
// import data from '../../assets/data/content.json';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 
  @Input() darkMode!: boolean;
  data!: any;
  skillsImages: string[] | null = null;
  workExperiences: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    let url = '../assets/data/content.json';
    this.http.get(url).subscribe((res: any) => {
     
      this.data=res;
      this.skillsImages = res.img;
      this.workExperiences = res.workHistory;
      // console.log(res);
    });
  }
}
