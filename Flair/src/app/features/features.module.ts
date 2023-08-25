import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgImageSliderModule } from 'ng-image-slider';
import { FeaturesRoutingModule } from './features-routing.module';
import { ProductEssentialsComponent } from './homepage/components/product-essentials/product-essentials.component';
import { ProductsFocusComponent } from './homepage/components/products-focus/products-focus.component';
import { ProductsGalleryComponent } from './homepage/components/products-gallery/products-gallery.component';
import { VideoOverlayComponent } from './homepage/components/video-overlay/video-overlay.component';

const COMPONENTS = [
  VideoOverlayComponent,
  ProductsGalleryComponent,
  ProductEssentialsComponent,
  ProductsFocusComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FeaturesRoutingModule, NgImageSliderModule],
  exports: [...COMPONENTS],
})
export class FeaturesModule {}
