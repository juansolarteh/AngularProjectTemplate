import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    loadChildren: () => import("./home-page/home-page.module").then(m => m.HomePageModule),
  },
  {
    path: "emp",
    children: [
      {
        path: "cv",
        pathMatch: "full",
        loadChildren: () => import("./employee/cv/cv.module").then(m => m.CvModule),
        data: { preload: true }
      },
      {
        path: "mas",
        pathMatch: "full",
        loadChildren: () => import("./employee/massive-hiring/massive-hiring.module").then(m => m.MassiveHiringModule)
      },
      {
        path: "**",
        redirectTo: "/home"
      }
    ],

  },
  {
    path: "pay",
    children: [
      {
        path: "adj",
        pathMatch: "full",
        loadChildren: () => import("./payroll-processing/adjustments/adjustments.module").then(m => m.AdjustmentsModule),
        data: { preload: true }
      },
      {
        path: "pay",
        pathMatch: "full",
        loadChildren: () => import("./payroll-processing/payroll/payroll.module").then(m => m.PayrollModule)
      },
      {
        path: "**",
        redirectTo: "/home"
      }
    ],
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
