import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Word } from 'src/app/models/word.model';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.page.html',
  styleUrls: ['./hard.page.scss'],
})
export class HardPage implements OnInit {

  dictionaryHard$: Observable<Word[]>;

  constructor(
    private dbSrv: DataBaseService
  ) { }

  ngOnInit() {
    this.dictionaryHard$ = this.dbSrv.dictionary$('hard')
  }

}
