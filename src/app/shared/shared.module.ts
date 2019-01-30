/*
* All the “dumb” components and pipes should be implemented here.
*   These components don’t import and inject services from core
* or other features in their constructors. They should receive
* all data though attributes in the template of the component using
* them. This all sums up to the fact that SharedModule doesn’t have
* any dependency to the rest of our application.
*/

/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* our own custom components */


@NgModule({
  imports: [
    /* Coisas do Angular */
    CommonModule

    /* Componentes de Terceiros */

  ],
  declarations: [
    /* Coisas do Angular */

  ],
  exports: [
    /* Coisas do Angular */

    /* Componentes de Terceiros */

    /* Componentes Customizados */

  ]
})
export class SharedModule { }
