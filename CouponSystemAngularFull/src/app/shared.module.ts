import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';
import { ThumbnailComponent } from './component/thumbnail/thumbnail.component';
import { ZeroSymbolPipe } from './pipes/zero-symbol.pipe';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    CategoryPipe,
    ThumbnailComponent,
    ZeroSymbolPipe,
    PageNotFoundComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryPipe,
    ThumbnailComponent,
    ZeroSymbolPipe,
    PageNotFoundComponent,
  ]
})
export class SharedModule { }
