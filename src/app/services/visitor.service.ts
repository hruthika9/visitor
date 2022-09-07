import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from '../entities/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  url="http://localhost:3000/visitors";
  visitors:Array<Visitor>=[];

  constructor(private client:HttpClient) { 
  }

  addVisitor(v:Visitor){
    debugger;
    this.visitors.push(v);
    this.client.post(this.url,v).subscribe(
      (success)=>console.log(success.valueOf)
    );
  }

  getVisitors():Observable<Array<Visitor>>{
    return this.client.get<Array<Visitor>>(this.url);
  }
}
