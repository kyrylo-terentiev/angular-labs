import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private currenUser$ = new Subject<any>();
  private currentUserBehaviour$ = new BehaviorSubject<any>({ name: 'no name' });
  private currentUserReplay$ = new ReplaySubject<any>(3);

  get currentUser(): Observable<any> {
    return this.currenUser$.asObservable();
  }

  constructor() { }
}
