import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgImageSliderModule } from 'ng-image-slider';
import { FeaturesRoutingModule } from './features-routing.module';
import { ClothesEssentialsComponent } from './homepage/components/clothes-essentials/clothes-essentials.component';
import { ClothesFocusComponent } from './homepage/components/clothes-focus/clothes-focus.component';
import { ClothesGalleryComponent } from './homepage/components/clothes-gallery/clothes-gallery.component';
import { VideoOverlayComponent } from './homepage/components/video-overlay/video-overlay.component';

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
