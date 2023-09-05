import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  //json-server --watch db.json
  url = 'http://localhost:3000/locations';

  

  /*
  getAllHousingLocations(): Housinglocation[] {
    return this.housinglocationList;
  }
  **/
  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
 /*
  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housinglocationList.find(housingLocation => housingLocation.id === id);
  }*/
  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
