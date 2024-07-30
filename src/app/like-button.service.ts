import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeButtonService {

  constructor() { }
  likeCard(data: any) {
    let element = document.getElementById(data)!;
if (element.style.color === "crimson") {
  element.style.color = "black";
} else {
  element.style.color = "crimson";
}
    }
}
