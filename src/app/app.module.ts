import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { SearchMovieComponent } from './search-movie/search-movie.component';

// import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule

  ],
  providers: [],
  // bootstrap: [AppComponent]
  entryComponents:[SearchMovieComponent]
})
export class AppModule { 

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    if(!customElements.get('search-movie')){
        const element:any  = createCustomElement(SearchMovieComponent,{injector: this.injector});
        customElements.define('search-movie',element);
    }
  }
}
