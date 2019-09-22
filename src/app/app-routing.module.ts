import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DictionaryPage } from './dictionary/dictionary.page';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'quiz' },
  { path: 'easy', loadChildren: './levels/easy/easy.module#EasyPageModule' },
  { path: 'medium', loadChildren: './levels/medium/medium.module#MediumPageModule' },
  { path: 'hard', loadChildren: './levels/hard/hard.module#HardPageModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
  {
    path: 'dictionary',
    children: [
      {
        path: '',
        loadChildren: './dictionary/dictionary.module#DictionaryPageModule'
      },
      {
        path: 'easy',
        loadChildren: './dictionary/dictionary.module#DictionaryPageModule'
      },
      {
        path: 'medium',
        loadChildren: './dictionary/dictionary.module#DictionaryPageModule'
      },
      {
        path: 'hard',
        loadChildren: './dictionary/dictionary.module#DictionaryPageModule'
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
