import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangePasswordComponent} from '../../_authentication/change-password/change-password.component';


const routes: Routes = [
  {
    path: 'recovery-password',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule {}
