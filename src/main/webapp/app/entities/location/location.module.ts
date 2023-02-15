import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LacusSharedModule } from 'app/shared/shared.module';
import { LocationComponent } from './location.component';
import { LocationDetailComponent } from './location-detail.component';
import { LocationUpdateComponent } from './location-update.component';
import { LocationDeleteDialogComponent } from './location-delete-dialog.component';
import { locationRoute } from './location.route';

@NgModule({
  imports: [LacusSharedModule, RouterModule.forChild(locationRoute)],
  declarations: [LocationComponent, LocationDetailComponent, LocationUpdateComponent, LocationDeleteDialogComponent],
  entryComponents: [LocationDeleteDialogComponent]
})
export class LacusLocationModule {}
