import { FrequenciesPersisterService } from './frequencies_persister'
import { StudentsPersisterService } from './students_persister'
import { DisciplinesService } from './../disciplines'
import { Observable } from 'rxjs/Observable'
import { Storage } from '@ionic/storage'
import { Injectable } from '@angular/core'

@Injectable()
export class DisciplinesPersisterService{
  constructor(
    private storage: Storage,
    private disciplines: DisciplinesService,
    private frequenciesPersister: FrequenciesPersisterService,
    private studentsPersister: StudentsPersisterService
  ){}
  persist(user, classrooms){
    return new Observable((observer) => {
      let classroomObservables = []
      classrooms.forEach((classroomList) => {
        classroomList.data.forEach((classroom) => {
          classroomObservables.push(this.disciplines.getOnlineDisciplines(user.teacher_id, classroom.id))
        })
      })

      Observable.forkJoin(classroomObservables).subscribe(
        (disciplines) => {
          this.storage.set('disciplines', disciplines)
          Observable.forkJoin(
            this.frequenciesPersister.persist(user, disciplines),
            this.studentsPersister.persist(user, disciplines)
          ).subscribe(
            (result) => {
            },
            (error) => {
              observer.error(error);
            },
            () => {
              observer.complete()
            }
          )
        }
      )
    })
  }
}