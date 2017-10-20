// Imports from angular
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

// Imports from Ionic
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage'
import { Network } from '@ionic-native/network';

//Pages
import { MyApp } from './app.component';

// modules
import { SignInModule } from '../pages/sign-in/sign-in.module';
import { FrequencyModule } from '../pages/frequency/frequency.module';
import { AppIndexPageModule } from '../pages/app-index/app-index.module';
import { StudentsFrequencyModule } from '../pages/students-frequency/students-frequency.module';
import { StudentsFrequencyEditModule } from '../pages/students-frequency-edit/students-frequency-edit.module';
import { FrequencyIndexPageModule } from "../pages/frequency-index/frequency-index.module";
import { UserIndexPageModule } from './../pages/user-index/user-index.module';
import { LessonPlanDetailsPageModule } from './../pages/lesson-plan-details/lesson-plan-details.module';
import { LessonPlanIndexPageModule } from './../pages/lesson-plan-index/lesson-plan-index.module';
import { TeachingPlanDetailsPageModule } from './../pages/teaching-plan-details/teaching-plan-details.module';
import { TeachingPlanIndexPageModule } from './../pages/teaching-plan-index/teaching-plan-index.module';
import { ContentRecordsIndexPageModule } from './../pages/content-records-index/content-records-index.module';
import { ContentRecordFormPageModule } from './../pages/content-record-form/content-record-form.module';
import { NewContentRecordFormModule } from './../pages/new-content-record-form/new-content-record-form.module';

//Services
import { AuthService } from '../services/auth';
import { UnitiesService } from '../services/unities';
import { ClassroomsService } from '../services/classrooms';
import { DailyFrequencyService } from '../services/daily_frequency';
import { ExamRulesService } from '../services/exam_rules';
import { DisciplinesService } from '../services/disciplines';
import { SchoolCalendarsService } from './../services/school_calendars';
import { ConnectionService } from '../services/connection';
import { LessonPlansService } from './../services/lesson_plans';
import { ContentLessonPlansService } from './../services/content_lesson_plans';
import { ContentRecordsService } from './../services/content_records';
import { TeachingPlansService } from './../services/teaching_plans';
import { DailyFrequencyStudentService } from '../services/daily_frequency_student';
import { StudentsService } from './../services/students';
import { OfflineDataPersisterService } from './../services/offline_data_persistence/offline_data_persister';
import { ClassroomsPersisterService } from './../services/offline_data_persistence/classrooms_persister';
import { ExamRulesPersisterService } from './../services/offline_data_persistence/exam_rules_persister';
import { UnitiesPersisterService } from './../services/offline_data_persistence/unities_persister';
import { DisciplinesPersisterService } from './../services/offline_data_persistence/disciplines_persister';
import { SchoolCalendarsPersisterService } from './../services/offline_data_persistence/school_calendars_persister';
import { StudentsPersisterService } from './../services/offline_data_persistence/students_persister';
import { ApiService } from './../services/api';
import { DailyFrequenciesSynchronizer } from './../services/offline_data_synchronization/daily_frequencies_synchronizer';
import { LessonPlansPersisterService } from './../services/offline_data_persistence/lesson_plans_persister';
import { ContentLessonPlansPersisterService } from './../services/offline_data_persistence/content_lesson_plans_persister';
import { ContentRecordsPersisterService } from './../services/offline_data_persistence/content_records_persister';
import { TeachingPlansPersisterService } from './../services/offline_data_persistence/teaching_plans_persister';
import { UtilsService } from './../services/utils';
import { DailyFrequencyStudentsSynchronizer } from '../services/offline_data_synchronization/daily_frequency_students_synchronizer';
import { ContentRecordsSynchronizer } from '../services/offline_data_synchronization/content_records_synchronizer';
import { OfflineClassroomFinder } from './../services/offline_data_finder/classrooms';
import { OfflineDisciplineFinder } from './../services/offline_data_finder/disciplines';
import { OfflineUnityFinder } from './../services/offline_data_finder/unities';
import { DisciplineFrequenciesPersisterService } from './../services/offline_data_persistence/discipline_frequencies_persister';
import { GlobalFrequenciesPersisterService } from './../services/offline_data_persistence/global_frequencies_persister';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ""
    }),
    HttpModule,
    AppIndexPageModule,
    SignInModule,
    FrequencyModule,
    StudentsFrequencyModule,
    StudentsFrequencyEditModule,
    FrequencyIndexPageModule,
    UserIndexPageModule,
    LessonPlanDetailsPageModule,
    LessonPlanIndexPageModule,
    TeachingPlanDetailsPageModule,
    TeachingPlanIndexPageModule,
    ContentRecordsIndexPageModule,
    ContentRecordFormPageModule,
    NewContentRecordFormModule,
    IonicStorageModule.forRoot({
      name: '__appfrequencia',
         driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    UnitiesService,
    ClassroomsService,
    DailyFrequencyService,
    ExamRulesService,
    DisciplinesService,
    SchoolCalendarsService,
    DailyFrequencyStudentService,
    ConnectionService,
    LessonPlansService,
    ContentLessonPlansService,
    ContentRecordsService,
    TeachingPlansService,
    StudentsService,
    Network,
    OfflineDataPersisterService,
    UnitiesPersisterService,
    ClassroomsPersisterService,
    ExamRulesPersisterService,
    SchoolCalendarsPersisterService,
    DisciplinesPersisterService,
    LessonPlansPersisterService,
    ContentLessonPlansPersisterService,
    ContentRecordsPersisterService,
    TeachingPlansPersisterService,
    StudentsPersisterService,
    ApiService,
    UtilsService,
    DailyFrequenciesSynchronizer,
    DailyFrequencyStudentsSynchronizer,
    ContentRecordsSynchronizer,
    OfflineClassroomFinder,
    OfflineDisciplineFinder,
    OfflineUnityFinder,
    DisciplineFrequenciesPersisterService,
    GlobalFrequenciesPersisterService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
