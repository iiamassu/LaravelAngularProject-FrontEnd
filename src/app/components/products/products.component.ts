import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;

  product = new Product;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData(){
    this.dataService.getProducts().subscribe(res=>{
      console.log(res);
      this.products = res;
    })
  }

  insertProductData(){
    // console.log(this.product);
    this.dataService.insertProduct(this.product).subscribe(res => {
      console.log(res);
      this.getProductsData();
    })
  }

  deleteProductsData(id:any){
    if(confirm("Etes-Vous Sure de supprimer le produit : " + id)){
      this.dataService.deleteProduct(id).subscribe(res => {
        console.log(res);
        this.getProductsData();
      })
    }
  }


}
