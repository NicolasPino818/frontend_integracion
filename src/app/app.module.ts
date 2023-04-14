import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { TiendasComponent } from './paginas/tiendas/tiendas.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CuentaComponent } from './paginas/cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    CategoriaComponent,
    TiendasComponent,
    CarritoComponent,
    FooterComponent,
    HeaderComponent,
    CuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
