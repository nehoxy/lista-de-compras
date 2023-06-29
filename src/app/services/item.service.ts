import { Injectable } from '@angular/core';
import { Item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [{
    id:0,
    title: 'Sandia',
    price:15,
    quantity:1,
    image:'https://5aldia.cl/wp-content/uploads/2018/03/sandia.jpg',
    completed: false
  },
  {
    id:1,
    title: 'Banana',
    price:40,
    quantity:6,
    image:'https://greenshop.ar/wp-content/uploads/sites/9/2016/08/A.2.6-500GR.jpg',
    completed: false
  },
  {
    id:2,
    title: 'Pera',
    price:10,
    quantity:4,
    image:'https://www.nutricionyentrenamiento.fit/images/alimento/248.jpg',
    completed: false
  },
  {
    id:3,
    title: 'Pera',
    price:10,
    quantity:4,
    image:'https://www.nutricionyentrenamiento.fit/images/alimento/248.jpg',
    completed: false
  },]
  constructor() { }

  getItems(){
    
    return this.items
  }
  addItem(item:Item){
    this.items.unshift(item);
  }
}
