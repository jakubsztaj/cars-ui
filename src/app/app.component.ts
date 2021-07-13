import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.client = http;
    this.loadCars();
  }

  title = 'carwebapp-ui';
  cars: any;
  client: HttpClient;

  loadCars(): void {
    this.http.get<any>('http://localhost:8080/cars')
      .subscribe(data => {
        this.cars = data;
      })

  }

  deleteCars(): void {
    this.http.delete <any>('http://localhost:8080/cars/delete')
      .subscribe(() => {
        this.loadCars();
      })

  }
    addCar(): void {
    const name = window.prompt("What name?")
    const type = window.prompt("What type?")
    const category = window.prompt("Which category?")
    const manufacturingYear = window.prompt("Which year?")
    const car = {
      name,
      type,
      category,
      manufacturingYear
    }
    this.http.post <any>('http://localhost:8080/cars/add', car)
      .subscribe(() => {
        this.loadCars();
      })

  }
}
