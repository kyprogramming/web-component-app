import { GetMoviesDetailService } from './../services/get-movies-detail.service';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchMovieComponent implements OnInit, OnChanges {

  @Input() config:any;

  movieForm:any;
  movieData:any;

  constructor(
    @Inject(GetMoviesDetailService) private movieService: GetMoviesDetailService,
    @Inject(FormBuilder) private fb: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.movieForm = this.fb.group({
     title: [''] 
    });
  }

  ngOnChanges(changes: SimpleChanges):void{
    console.log('changes',changes);
    this.movieService.setHttp(changes['config'].currentValue.httpInstance);
    this.movieService.setParams(changes['config'].currentValue.httpParams);
  }

  getMoviesDetail(title:string):void{ 
    this.movieService.getMoviesDetail(title).subscribe((res)=>{
      console.log('movie data', res); 
      this.movieData = res.Search;
    });
  }

  searchMovie(event:any){
    const title = event.target.value;
    if (title.length > 3) {
      this.getMoviesDetail(title);  
    }
    else{
      this.movieData = [];
    }
    
  }

}
