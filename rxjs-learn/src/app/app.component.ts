import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, Observable, of, Subject, switchMap } from 'rxjs';
const GITHUB_URL = 'https://api.github.com/search/repositories';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private api:HttpClient
  ){

  }
  ngOnInit(): void {
  }

}
