import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VideoOverlayComponent } from './components/video-overlay/video-overlay.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ClothesEssentialsComponent } from './shop/components/clothes-essentials/clothes-essentials.component';
import { ClothesGalleryComponent } from './shop/components/clothes-gallery/clothes-gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    VideoOverlayComponent,
    ClothesGalleryComponent,
    ClothesEssentialsComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, NgImageSliderModule],
  exports: [
    VideoOverlayComponent,
    ClothesGalleryComponent,
    ClothesEssentialsComponent,
  ],
})
export class FeaturesModule {}
