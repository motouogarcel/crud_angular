import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[] = []

  private urlApi: string = environment.serverUrl


  constructor(private http: HttpClient) { }

 /* getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      if (this.products.length) {
        resolve(this.products)
      } else {
        reject([])
      }
    })
  }*/

  getProducts(): Observable<Product[]>{
    /*
    GET => récupérer des données
    POST => Envoi de données au serveur
    PUT et PATCH => Modification des données existantes sur le serveur
    DELETE => supprimer des données existantes sur le serveur
    */
    return this.http.get<Product[]>(this.urlApi)
  }

  getNumber(): Observable<Number> {
    return of(60)
  }

  getSecond(): Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product) {

  }

  editProduct(_id: string, product: Product) {

  }

  deleteProduct(_id: string) {

  }


}
