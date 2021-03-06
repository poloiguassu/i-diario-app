import { Observable } from 'rxjs/Observable';
import { ConnectionService } from './connection';
import { ApiService } from './api';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { UtilsService } from './utils';
import { CustomHttp } from './custom_http';

@Injectable()
export class ClassroomsService {
  constructor(
    private http: CustomHttp,
    private storage: Storage,
    private connection: ConnectionService,
    private api: ApiService,
    private utilsService: UtilsService,
  ){}

  getOnlineClassrooms(teacherId: number, unityId: number){
    const request = this.http.get(this.api.getTeatcherClassroomsUrl(), { params: { teacher_id: teacherId, unity_id: unityId } } );
    return request.map((response: Response) => {
      return {
        data: response.json(),
        unityId: unityId
      }
    });
  }

  getOfflineClassrooms(unityId: number){
    return new Observable((observer) => {
      this.storage.get('classrooms').then((classrooms) => {
        if (!classrooms){
          observer.complete();
          return;
        }
        var currentYear = (this.utilsService.getCurrentDate()).getFullYear();
        classrooms.forEach((classroom) => {
          if (classroom.unityId == unityId){
            classroom.data = classroom.data.filter((value) => {
              return (value.year || currentYear) == currentYear
            })
            observer.next(classroom);
            observer.complete();
          }
        })
      })
    })
  }
}
