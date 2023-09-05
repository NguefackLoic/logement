import { Component, OnInit, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

housingLocationList: Housinglocation[] = [];
housingService: HousingService = inject(HousingService);
filteredLocationList: Housinglocation[] = [];

constructor ( ){
  //this.housingLocationList = this.housingService.getAllHousingLocations();
  //this.filteredLocationList = this.housingLocationList;
  this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  });
}

  ngOnInit() {
    
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
