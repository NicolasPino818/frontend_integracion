import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      const carousel = <HTMLDivElement>document.querySelector('.carousel');
      const slider = <HTMLDivElement> document.querySelector('.slider');
      const prev = <HTMLSpanElement>document.querySelector('.prev');
      const next = <HTMLSpanElement>document.querySelector('.next');
      var direction=-1;
      var sliderUsed = false;

      setInterval(() => {
        if (!sliderUsed) {
            
        }else{
            setTimeout(()=>{
                sliderUsed = false;
            },5000)
        }
      }, 5000);

      prev.addEventListener('click', ()=>{
          sliderUsed = true;
          if (direction == -1) {
              slider.appendChild(slider.firstElementChild);
              carousel.style.justifyContent = 'flex-end';
              direction = 1;
          }
          slider.style.transform = "translate(33.3%)";

      })
      next.addEventListener('click', function (){
          sliderUsed = true;
          if (direction == 1) {
              slider.prepend(slider.lastElementChild);
              carousel.style.justifyContent = 'flex-start';
              direction = -1;
          }
          slider.style.transform = 'translateX(-33.3%)';
      })
      slider.addEventListener('transitionend', ()=>{
          if(direction == -1){
              slider.appendChild(slider.firstElementChild);
          }else if(direction == 1){
              slider.prepend(slider.lastElementChild);
          }
          slider.style.transition = 'none';
          slider.style.transform = 'translate(0)';
          setTimeout(function(){
              slider.style.transition = 'all 0.5s';
          })
      })
    })
  }
}
