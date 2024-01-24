import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Food} from '../../../interfaces/Foods'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})

export class CardapioComponent {
    foods:Food[] = [
    {
      name:"Pizza calabreza",
      description:"sfsdfsfdd",
      url:"https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/31604646755f78882c27872c877d9ea5.webp?itok=vQM-hOU5",
      price:20
    },
    {
      name:"Pizza mussarela",
      description:"sfsdfsfdd",
      url:"https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/c2d1b42e841cd70b0512821623906608.webp?itok=9aa9ayZI",
      price:25
    },
    {
      name:"Pizza portuguesa",
      description:"sfsdfsfdd",
      url:"https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/103eca6a504379a0df6f55155b8d607d.webp?itok=0iu1IWt6",
      price:40
    }
  ];
}
