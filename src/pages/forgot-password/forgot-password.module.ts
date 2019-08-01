import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ForgotPasswordPage } from './forgot-password';

@NgModule({
  declarations: [
    ForgotPasswordPage,
  ],
  imports: [
    IonicModule.forChild(ForgotPasswordPage),
  ],
  exports: [
    ForgotPasswordPage
  ]
})
export class ForgotPasswordPageModule {}
