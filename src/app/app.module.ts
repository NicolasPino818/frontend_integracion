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
import { NotFoundPageComponent } from './paginas/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { CarritoAlertComponent } from './componentes/carrito-alert/carrito-alert.component';
import { InstrumentosComponent } from './paginas/categoria/instrumentos/instrumentos.component';
import { EditarProductoModalComponent } from './componentes/editar-producto-modal/editar-producto-modal.component'

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
    CuentaComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegistroComponent,
    CarritoAlertComponent,
    InstrumentosComponent,
    EditarProductoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
