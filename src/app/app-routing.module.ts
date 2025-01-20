import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio', //Ruta de inicio
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login', //Ruta por default
    pathMatch: 'full'
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'chips',
    loadChildren: () => import('./chips/chips.module').then( m => m.ChipsPageModule)
  },
  {
    path: 'toolbars',
    loadChildren: () => import('./toolbars/toolbars.module').then( m => m.ToolbarsPageModule)
  },
  {
    path: 'accordions',
    loadChildren: () => import('./accordions/accordions.module').then( m => m.AccordionsPageModule)
  },
  {
    path: 'grids',
    loadChildren: () => import('./grids/grids.module').then( m => m.GridsPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
