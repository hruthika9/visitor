import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';
import { VisitorService } from '../services/visitor.service';

@Component({
  selector: 'app-showvisitor',
  templateUrl: './showvisitor.component.html',
  styleUrls: ['./showvisitor.component.css']
})
export class ShowvisitorComponent implements OnInit {
 visitors:Array<Visitor>=[]
  constructor(private vs:VisitorService) { }

  ngOnInit(): void {
    this.vs.getVisitors().subscribe(
      (data)=>{this.visitors=data}
    );
  }

}
