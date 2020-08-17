import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable , of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    // 服务中的注入服务
    private messageService: MessageService
  ) { }

  // Observable 模拟HTTP 通信返回的后端服务器数据
  getHeroes(): Observable <Hero[]> {
    // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
    this.messageService.add('HeroService: load heroes');
    return of(HEROES);
  }

}
