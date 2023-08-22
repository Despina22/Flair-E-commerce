import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { VideoOverlayComponent } from './components/video-overlay/video-overlay.component';
import { ClothesGalleryComponent } from './shop/components/clothes-gallery/clothes-gallery.component';

@NgModule({
  declarations: [VideoOverlayComponent, ClothesGalleryComponent],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [VideoOverlayComponent, ClothesGalleryComponent],
})
export class FeaturesModule {}
