import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SelectivePreloadingStrategyService } from './core/services/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: "session",
    component: EmptyLayoutComponent,
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
    pathMatch: "full"
  },
  {
    path: "",
    component: DashboardLayoutComponent,
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  {
    path: "**",
    redirectTo: "session"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: SelectivePreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
