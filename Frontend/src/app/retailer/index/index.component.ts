import { Component, OnInit } from '@angular/core';
import { Retailer } from '../retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  retailer: Retailer[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public retailerService: RetailerService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.retailerService.getAll().subscribe((data: Retailer[])=>{
      this.retailer = data;
      console.log(this.retailer);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(retailerId:string){
    this.retailerService.delete(retailerId).subscribe(res => {
         this.retailer = this.retailer.filter(item => item.retailerId !== retailerId);
         console.log('Retailer deleted successfully!');
    })
  }
}
