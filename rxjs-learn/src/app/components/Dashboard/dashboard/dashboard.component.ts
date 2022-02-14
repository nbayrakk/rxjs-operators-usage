import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, Observable, of, Subject, switchMap } from 'rxjs';
const GITHUB_URL = 'https://api.github.com/search/repositories';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  repositories$!: Observable<any>;
  queries$ = new Subject<any>();
  organizations$!: Observable<any>;
  selectedRepository$ = new Subject<any>();
  title = 'rxjs-learn';
  constructor(
    private api:HttpClient
  ){

  }
  ngOnInit(): void {

    this.repositories$ = this.queries$.pipe(
      map((query:string) => query ? query.trim() : ""),
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query:string) =>this.fetchRepo(query)),
    );

    this.organizations$ = this.selectedRepository$.pipe(
      map(repo => {
        console.log(repo)
        return repo && repo.owner.organizations_url
      }),
      switchMap((url:string)=>{
        console.log(url)
        return url ? this.fetchUserRepo(url) : of(undefined)
      })
    )

  }

  mouseEvent(repo:any | undefined){
    this.selectedRepository$.next(repo)
  }

  private fetchUserRepo(url:string):Observable<any>{
    return this.api.get<any>(url)
  }
  onTextChange(query:string){
    this.queries$.next(query)
  }
  private fetchRepo(query:string):Observable<any>{
    const params = {q:query}
    return this.api.get<any>(GITHUB_URL,{params}).pipe(
      map(response=>response.items)
    );
  }
}
