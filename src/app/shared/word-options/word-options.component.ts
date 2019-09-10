import { Component, OnInit, Input } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { DatabaseSnapshot, AngularFireAction } from '@angular/fire/database';
import { DataBaseService } from 'src/app/services/data-base.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'word-options',
  templateUrl: './word-options.component.html',
  styleUrls: ['./word-options.component.scss'],
})
export class WordOptionsComponent implements OnInit {

  key: string;
  @Input('wordSnapshot') wordSnapshot: AngularFireAction<DatabaseSnapshot<Word>>
  @Input('slidingItem') slidingItem: IonItemSliding
  constructor(
    private dbSrv: DataBaseService
  ) { }

  ngOnInit() {
    this.key = this.wordSnapshot.key;
  }

  move(level) {
    this.slidingItem.close()
    this.dbSrv.move(this.key, level)
  }


  remove() {
    this.slidingItem.close()
    this.dbSrv.remove(this.key)
  }

}
