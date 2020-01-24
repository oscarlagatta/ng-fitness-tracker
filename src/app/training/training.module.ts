import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { StopTrainingComponent } from './current-training/stop.training.component';
import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports: [SharedModule, AngularFirestoreModule],
  exports: [],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}
