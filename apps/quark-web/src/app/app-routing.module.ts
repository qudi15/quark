import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'models',
    loadChildren: () =>
      import('../page/models/models.module').then((m) => m.ModelsModule),
  },
  {
    path: 'flows',
    loadChildren: () =>
      import('../page/flows/flows.module').then((m) => m.FlowsModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
