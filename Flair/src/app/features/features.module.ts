import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VideoOverlayComponent } from './components/video-overlay/video-overlay.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ClothesEssentialsComponent } from './shop/components/clothes-essentials/clothes-essentials.component';
import { ClothesGalleryComponent } from './shop/components/clothes-gallery/clothes-gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ClothesFocusComponent } from './shop/components/clothes-focus/clothes-focus.component';

@NgModule({
  declarations: [
    VideoOverlayComponent,
    ClothesGalleryComponent,
    ClothesEssentialsComponent,
    ClothesFocusComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, NgImageSliderModule],
  exports: [
    VideoOverlayComponent,
    ClothesGalleryComponent,
    ClothesEssentialsComponent,
    ClothesFocusComponent,
  ],
})
export class FeaturesModule {}
