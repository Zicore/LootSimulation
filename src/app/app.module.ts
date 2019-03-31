import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LootItemComponent } from './loot-item/loot-item/loot-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LootItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
