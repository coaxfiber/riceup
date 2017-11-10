import {Injectable} from '@angular/core';
import {Http } from '@angular/http';
@Injectable()
export class BrokerService {
	brokers: any;

	 constructor(private http: Http) {
	 	this.http.get('http://localhost/riceup/riceupapi.php?action=getall')
          .map(response => response.json())
          .subscribe(res => this.brokers = res);
	 }

    findAll() {
        return Promise.resolve(this.brokers);
    }

    findById(id) {
        return Promise.resolve(this.brokers[id - 1]);
    }

}
