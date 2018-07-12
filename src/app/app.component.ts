import { Component } from '@angular/core';
import { Observable } from "rxjs"
import { HotelService } from './services/hotel.service';
import { Hotel } from './services/hotel';
import { GLOBAL } from './services/global';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HotelService]
})
export class AppComponent {

  hotelForm : FormGroup;
  private hotels : Observable<any>;
  private image_url: string;
  private test = [];

  constructor( private hotelService : HotelService,  private fb: FormBuilder ){
     this.image_url = GLOBAL.image;
     this.getAllHotels();
     this.hotelForm = this.fb.group({
          name:''
     })
     
  }

  searchHotel() {
   let name = this.hotelForm.value.name;
    if(name.length > 3){
        this.hotelService.getHotelsByname(name)
        .subscribe( res => this.hotels = res.data);   
    }
  }

  getStar(star){
    if(star == 0){
       this.getAllHotels();
    }
    
    this.hotelService.getHotelByStar(star).subscribe( res => this.hotels = res.data);
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  getAllHotels(){
     this.hotelService.getHotels().subscribe(res => this.hotels = res.data );
  }
  
}
