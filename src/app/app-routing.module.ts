import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'marcar',
    pathMatch: 'full'
  },

  {
    path: 'marcar',
    loadChildren: () => import('./pages/marcar/marcar.module').then( m => m.MarcarPageModule)
  },
  {
    path: 'consultar',
    loadChildren: () => import('./pages/consultar/consultar.module').then( m => m.ConsultarPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./pages/soporte/soporte.module').then( m => m.SoportePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
