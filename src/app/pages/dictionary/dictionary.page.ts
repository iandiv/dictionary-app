import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';

import { DictionaryService } from 'src/app/services/dictionary.service';
import { environment } from 'src/environments/environment';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {
  keyword: string = "";
  data: any;


  constructor(private http: HttpClient) {

  }

  ngOnInit() {


  }
  search() {
    const requestHeader = new HttpHeaders()

    requestHeader.set('Authorization', 'Token 47f67e455fdb11da5b131139f9f010a426a027ac')

    let options = { headers: requestHeader }
    this.http.get(environment.baseUrl + "/" + this.keyword).subscribe(
      (res) => {
        console.log(res);
        this.data = res;

      })
    Keyboard.hide();
  }
}
