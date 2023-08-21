import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { VideoOverlayComponent } from './components/video-overlay/video-overlay.component';

@NgModule({
  declarations: [VideoOverlayComponent],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [VideoOverlayComponent],
})
export class FeaturesModule {}
