import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./_pages/home/home.module').then(m => m.HomePageModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
