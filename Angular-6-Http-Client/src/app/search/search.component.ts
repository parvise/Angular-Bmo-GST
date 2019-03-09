import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Subject, Observable } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Customer } from '../customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchWord$:Observable<Customer[]>;
  private searchTerms = new Subject<string>();

  test:String;

  constructor(private service: CustomerService) { }

  ngOnInit():void {
    this.searchWord$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(30000),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.service.getCustomers()),
    );
  }

  search(value: string) {
    console.log(value);
    this.searchTerms.next(value);
  }

}
