import { Component } from '@angular/core';
import { DataService } from "services/DataService";
import { ReposComponent } from "app/repos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devnot Angular4 & Typscript Semineri!';
  constructor(private service: DataService) {
    this.UserName = "";
  }
  User: any | null | undefined;
  Repos: any;
  private _UserName: string;
  public get UserName(): string {
    return this._UserName;
  }
  public set UserName(v: string) {
    this._UserName = v;
  }

  public GetUserDetail() {
    this.service.GetUserDetail(this.UserName)
      .subscribe(result => this.User = result,
      err => console.log(err),
      () => {
        this.service.GetUserRepos(this.User.repos_url)
          .subscribe(response => this.Repos = response,
          err => console.log(err),
          () => console.log("All Repos Loaded..")
          )
      }
      );
  }

  public alertMessage($event) {
    alert("[" + this.User.bio + "]:" + $event);
  }
}
