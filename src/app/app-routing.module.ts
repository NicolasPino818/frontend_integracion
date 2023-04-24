import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { TiendasComponent } from './paginas/tiendas/tiendas.component';
import { NotFoundPageComponent } from './paginas/not-found-page/not-found-page.component';
import { CuentaComponent } from './paginas/cuenta/cuenta.component';

const SiteName = 'Music Pro';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: SiteName + ' - ' +'Home'
  },
  {
    path: 'categoria',
    component: CategoriaComponent,
    title: SiteName + ' - ' +'Categoria'
  },
  {
    path: 'producto/:id',
    component: ProductoComponent,
    title: SiteName + ' - ' +'Producto'
  },
  {
    path: 'tiendas',
    component: TiendasComponent,
    title: SiteName + ' - ' +'Tiendas'
  },
  {
    path: 'cuenta',
    component: CuentaComponent,
    title: SiteName + ' - ' +'Cuenta'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'prefix'
  },
  {
    path:'404',
    component:NotFoundPageComponent,
    title: SiteName + ' - ' +'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
