import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  title:string ='';
  price:number = 0;
  quantity:number = 0;
  image:string = '';
  id:number=0;
  constructor(private itemService:ItemService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.image = this.image;
    item.quantity = this.quantity;
    item.price = this.price;
    item.completed = false;

    this.itemService.addItem(item);
    this.router.navigate(['/'])
  }
}
