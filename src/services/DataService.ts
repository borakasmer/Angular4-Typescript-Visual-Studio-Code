import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map"
const url: string = 'https://api.github.com/users/';
@Injectable()
export class DataService {

    constructor(private http: Http) { }

    public GetUserDetail(name: string) {
        return this.http.get(url + name)
            .map(result => result.json());
    }

    public GetUserRepos(url: string) {
        return this.http.get(url)
            .map(response => response.json());
    }
}