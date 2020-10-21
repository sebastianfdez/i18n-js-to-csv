import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ExporterComponent } from './exporter/exporter.component';
import { ImporterComponent } from './importer/importer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ExporterComponent, ImporterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
