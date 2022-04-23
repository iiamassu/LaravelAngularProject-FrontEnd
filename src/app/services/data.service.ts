import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://127.0.0.1:8000/api/products');
  }
    
  insertProduct(data:Product){
    return this.http.post('http://127.0.0.1:8000/api/addProduct',data);
  }
  
  deleteProduct(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/deleteProduct/'+id);
  }
  
  getProductById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/product/'+id);
  }

  updateProduct(data:Product,id:any){
    return this.http.put('http://127.0.0.1:8000/api/updateProduct/'+id,data);
  }

}
