import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgImageSliderModule } from 'ng-image-slider';
import { VideoOverlayComponent } from './components/video-overlay/video-overlay.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ClothesEssentialsComponent } from './shop/components/clothes-essentials/clothes-essentials.component';
import { ClothesFocusComponent } from './shop/components/clothes-focus/clothes-focus.component';
import { ClothesGalleryComponent } from './shop/components/clothes-gallery/clothes-gallery.component';

const COMPONENTS = [
  VideoOverlayComponent,
  ClothesGalleryComponent,
  ClothesEssentialsComponent,
  ClothesFocusComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FeaturesRoutingModule, NgImageSliderModule],
  exports: [...COMPONENTS],
})
export class FeaturesModule {}
