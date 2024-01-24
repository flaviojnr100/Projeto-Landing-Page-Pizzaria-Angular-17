import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss'
})
export class InitialComponent {
  activeSection:boolean = true;

  @HostListener('window:scroll',['$event'])
  onScroll(event:Event):void{
    const sectionHome:number = document.getElementById('home')!.offsetTop;
    const scrollPosition = window.scrollY;
    if(scrollPosition == sectionHome){
      this.activeSection = true;
    }
  }
}
