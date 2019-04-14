import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-display-fact',
  templateUrl: './display-fact.component.html',
  styleUrls: ['./display-fact.component.css']
})
export class DisplayFactComponent implements OnInit {

  facts: any[];

  pics: any;

  errMsg: string;

  constructor(private _service: CatService) { }

  ngOnInit() {
    this.getPics();
  }

  getPics() {
    this._service.getImages().subscribe(
      responseProductData => {
        this.pics = responseProductData;
      },
      responseProductError => {
        this.pics = null;
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      () => console.log('GetProducts method excuted successfully')
    );
  }

  getFacts() {
    this._service.getFacts().subscribe(
      responseProductData => {
        this.facts = responseProductData;
      },
      responseProductError => {
        this.facts = null;
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      () => console.log('GetProducts method excuted successfully')
    );
  }

}
