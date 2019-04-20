import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { I18nModule } from './i18n/i18n.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, I18nModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
