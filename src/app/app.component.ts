import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { StackoverflowService } from './services/stackoverflow.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular-stack-overflow';
  questions;
  p: number = 1;
  
  constructor(private stackOverflowService: StackoverflowService) { }
  ngOnInit() {
    console.log("Hellllllllo from app.component.ts ngOnInit");
     this.reloadData();
}
reloadData() {
   this.stackOverflowService.getList().subscribe(items=>{
     console.log(items)
     this.questions =items[0];
   });
 
}
}
