import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import gql from "graphql-tag";

import { ElasticModel, Query } from "../types";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  models: Observable<ElasticModel[]>;
  constructor(private apollo: Apollo) { }

  searchKey :string = "";

  ngOnInit() {
  }

  searchProducts() {
    this.models = this.apollo.watchQuery<Query>({
      query: gql`
        query searchModelByKey
        {
          searchModelByKey(key: "${this.searchKey}") {
            id
            modelName
            brandName
          }
        }  
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.searchModelByKey)
      );
  }

}
