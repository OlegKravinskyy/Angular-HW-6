import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ArraySortsComponent } from './array-sorts/array-sorts.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ArraySortsComponent, StoreComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
