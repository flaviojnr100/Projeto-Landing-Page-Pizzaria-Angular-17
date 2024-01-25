import { Component, HostListener } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
 
  activeSection:string = 'home';




@HostListener('window:scroll',['$event'])
onScroll(event:Event):void{
  const sectionHome:number = document.getElementById('home')!.offsetTop;
  const sectionCardapio:number = document.getElementById('cardapio')!.offsetTop;
  const sectionSobre:number = document.getElementById('sobre')!.offsetTop;

  const scrollPosition = window.scrollY;
  
  if(scrollPosition>= sectionHome  && scrollPosition< sectionCardapio-70){
    this.activeSection = 'home'
  }else if(scrollPosition>= sectionCardapio - 70 && scrollPosition< sectionSobre-100){
    this.activeSection='cardapio'
  }else{
    this.activeSection='sobre'
  }
  
  

}

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({behavior:'smooth'})
    }
  }
}
