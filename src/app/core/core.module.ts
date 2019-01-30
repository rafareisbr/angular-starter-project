/*
*
* All services which have to have one and only one
* instance per application (singleton services)
* should be implemented here.
*
*/

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AuthenticationService } from "./authentication/authentication.service";
import { UserService } from "./user/user.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class CoreModule {

  /* Garantir que o CoreModule foi importado só por um NgModule o AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if( parentModule ) {
      throw new Error('CoreModule is already loaded. Import only in App Module');
    }
  }

}
