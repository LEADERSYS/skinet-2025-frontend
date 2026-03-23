import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
// import { HttpClient } from '@angular/common/http';
// import { Product } from './shared/models/product';
// import { Pagination } from './shared/models/pagination';
// import { ShopService } from './core/services/shop.service';
// import { Shop } from "./features/shop/shop";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // private shopService = inject(ShopService)
  protected readonly title = signal('skinet');
  // // products: Product[] = []; //With ZoneDetection
  // products = signal<Product[]>([]);

  // ngOnInit(): void {
  //   // this.http.get<Pagination<Product>>(this.baseUrl + 'products').subscribe({
  //   this.shopService.getProducts().subscribe({
  //     // next: data => console.log(data),
  //     // next: response => this.products = response.data, With ZoneDetection
  //     next: response => this.products.set(response.data),
  //     error: error => console.log(error),
  //     // complete: () => console.log('complete')
  //   });
  // }
}
