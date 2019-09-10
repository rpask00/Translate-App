import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/models/word.model';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.page.html',
  styleUrls: ['./easy.page.scss'],
})
export class EasyPage implements OnInit {

  dictionaryEasy$: Observable<Word[]>;
  constructor(
    private dbSrv: DataBaseService
  ) { }

  ngOnInit() {
    // this.dbSrv.updateDictionary()
    this.dictionaryEasy$ = this.dbSrv.dictionary$('easy')

  }
}
