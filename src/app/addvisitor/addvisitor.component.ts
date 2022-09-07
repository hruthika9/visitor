import { Component, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';
import { VisitorService } from '../services/visitor.service';

@Component({
  selector: 'app-addvisitor',
  templateUrl: './addvisitor.component.html',
  styleUrls: ['./addvisitor.component.css']
})
export class AddvisitorComponent implements OnInit {
  v:Visitor= new Visitor();
  visitors:Array<Visitor>=[]
  constructor(private vs:VisitorService) { }

  ngOnInit(): void {
  }
  onSubmitClick(){
    // alert(JSON.stringify(this.visitor))
    this.vs.addVisitor(this.v);
    this.v = new Visitor();
    
   }
}
