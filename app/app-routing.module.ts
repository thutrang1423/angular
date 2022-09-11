import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in-template-reactive/sign-in.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  {path:'sign-in', component: SignInComponent},
  {path:'reactive-form', component: ReactiveFormComponent},
  {path:'profile-editor', component: ProfileEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
