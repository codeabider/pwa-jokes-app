import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // update = false;
  joke: any = {};

  constructor(_update: SwUpdate, private _data: DataService) {
    _update.available.subscribe( () => {
      // this.update = true;
      _update.activateUpdate().then( () => document.location.reload() );
    } );
  }

  showJoke() {
    this.joke.value = 'LOADING...';
    this._data.getJokes().subscribe( (res) => {
      this.joke = res;
    } );
  }

  ngOnInit() {
    this.showJoke();
  }
}
