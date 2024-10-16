import { Component } from '@angular/core';
import { Product } from '../Models/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent {
  constructor(private R:ActivatedRoute){}

  id!:Number;
  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LGInox","image":"assets/images/grand_electromenagers/refrigerateur.jpg","categoryId":1,"description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur SamsungBlanc","image":"assets/images/grand_electromenagers/refrigerateur.jpg","categoryId":1,"description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko","image":"assets/images/grand_electromenagers/cuisiniere.png", "categoryId":1,"description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo SmartPhone","image":"assets/images/oppo_smart.jpg","categoryId":4,"description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir","image":"assets/images/hachoir.jpg","categoryId":2,"description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50''LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"","price":1800,"brand":"LG","promotion":0},
  ];
  productsByCategory!:Product[];
  ngOnInit(){
    this.id = Number(this.R.snapshot.params["id"]);
    this.productsByCategory = this.listProducts.filter(p=>p.categoryId == this.id);
    console.log(this.productsByCategory.length);
  }
}
