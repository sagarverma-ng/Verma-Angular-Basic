import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ServiceConceptComponent } from './service-concept/service-concept.component';
import { ServiceOperationComponent } from './service-operation/service-operation.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [

  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'parent-child', component: ParentComponent },
  { path: 'call-sevice', component: ServiceConceptComponent },
  { path: 'sevice-operation', component: ServiceOperationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
