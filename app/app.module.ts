import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FotherComponent } from './fother/fother.component';
import { PrincipalComponent } from './vsitas/principal/principal.component';
import { CoteleriaComponent } from './vsitas/coteleria/coteleria.component';
import { ContactoComponent } from './vsitas/contacto/contacto.component';
import { AgendaComponent } from './vsitas/agenda/agenda.component';
import { NosotosComponent } from './vsitas/nosotos/nosotos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FotherComponent,
    PrincipalComponent,
    CoteleriaComponent,
    ContactoComponent,
    AgendaComponent,
    NosotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
