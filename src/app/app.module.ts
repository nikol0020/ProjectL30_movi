import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';

import {AppComponent}  from './app.component';
import {HeaderComponent}  from './features/header/header.component';
import {FooterComponent}  from './features/footer/footer.component';
import {MainComponent}  from './features/main/main.component';
import {SortButtonsComponent}  from './features/sort-buttons/sort-buttons.component';
import {SearchButtonComponent}  from './features/search-button/search-button.component';

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {ItemData} from "./inMemServer/inMemoryServer";

@NgModule({
  imports: [BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(ItemData), FormsModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent,
    SortButtonsComponent, SearchButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

