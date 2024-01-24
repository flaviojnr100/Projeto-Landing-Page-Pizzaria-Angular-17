import { Component } from '@angular/core';
import { InitialComponent } from './initial/initial.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { SobreComponent } from './sobre/sobre.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,InitialComponent,CardapioComponent,SobreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
