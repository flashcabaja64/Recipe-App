import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Grilled Chicken', 'Raw Chicken', 'https://www.skinnytaste.com/wp-content/uploads/2019/06/How-To-Make-Juicy-Air-Fryer-Chicken-Breasts-7.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
