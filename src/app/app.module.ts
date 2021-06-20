import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReversePipePipe } from './Shared/reverse-pipe.pipe';
import { ServiceConceptComponent } from './service-concept/service-concept.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceOperationComponent } from './service-operation/service-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ParentComponent,
    ChildComponent,
    ReversePipePipe,
    ServiceConceptComponent,
    ServiceOperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
