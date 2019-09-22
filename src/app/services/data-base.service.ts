import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';
import { Word, WordAPI } from '../models/word.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { map, tap, take, switchMap } from 'rxjs/operators';
import { Connection } from '../models/connection';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {



  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient,
  ) { }
  private _dictionary = new BehaviorSubject<Word[]>([])

  // getWords(level?: 'easy' | 'hard' | 'medium') {
  //   if (level)
  //     return this._dictionary.asObservable().pipe(
  //       map(words => {
  //         return words.filter(word => word.level === level)
  //       })
  //     )

  //   return this._dictionary.asObservable()
  // }

  random4(level?) {
    return this.getWords(level).pipe(
      take(1),
      switchMap(words => {
        if (words.length) return of(words)
        return this.fetchWords()
      }),
      map(words => {
        let randoms = []
        for (let i = 0; i < 4; i++) {
          randoms.push(words[Math.floor(Math.random() * words.length)])
        }
        return randoms
      })
    )

  }

  fetchWords() {
    return this.db.list<Word>('dictionary').snapshotChanges().pipe(
      map(wordsSnap => {
        let wordArr: Word[] = []
        wordsSnap.forEach(word => {
          wordArr.push({
            key: word.key,
            angielski: word.payload.val().angielski,
            polski: word.payload.val().polski,
            level: word.payload.val().level,
          })
        });
        return wordArr
      }),
      tap(wordArr => {
        this._dictionary.next(wordArr)
      })
    )
  }

  updateDictionary() {
    this.db.list('dictionary').remove()

    environment.translates.forEach(tr => {
      let ob = {}
      ob[tr[0]] = tr[2]
      ob[tr[1]] = tr[3]
      ob['level'] = 'hard'
      this.db.list('dictionary').push(ob)
    })
  }

  move(key: String, level: 'easy' | 'hard' | 'medium' | '') {
    return this.db.object('dictionary/' + key).update({
      level: level,
    })
  }

  // new methods

  remove(key: String) {
    this.db.object('dictionary/' + key).remove()
  }

  getWords(level?: 'easy' | 'hard' | 'medium' | '') {
    return this.http.get(`http://localhost:3000/words/${level ? level : ''}`) as Observable<WordAPI[]>;
  }
  getWord(key: String) {
    return this.http.get('http://localhost:3000/word/' + key)
  }

  changeLevel(_id: String, level: 'easy' | 'hard' | 'medium' | '') {
    return this.http.patch('http://localhost:3000/word/change-level', { level, _id })
  }

  removeWord(_id: String) {
    return this.http.delete('http://localhost:3000/word/delete/' + _id)
  }

  getRandomWords(quantity: Number, level: String) {
    return this.http.get(`http://localhost:3000/randomWords?q=${quantity}&level=${level}`) as Observable<WordAPI[]>;
  }


}
