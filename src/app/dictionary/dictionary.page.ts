import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { Word } from '../models/word.model';
import { DataBaseService } from '../services/data-base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {

  dictionary$: Observable<Word[]>;
  constructor(
    private dbSrv: DataBaseService
  ) { }

  ngOnInit() {
    // this.dbSrv.updateDictionary()
    this.dictionary$ = this.dbSrv.dictionary$()
  }

}
