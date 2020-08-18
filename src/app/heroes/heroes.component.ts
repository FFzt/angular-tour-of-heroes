import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

/* 你要从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器。
@Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
CLI 自动生成了三个元数据属性：
                selector— 组件的选择器（CSS 元素选择器）
                templateUrl— 组件模板文件的位置。
                styleUrls— 组件私有 CSS 样式表文件的位置。 */
@Component({
  /* app-heroes 用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。 */
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/* 始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。 */
export class HeroesComponent implements OnInit {
  // 暴露 HEROES 数组
  heros: Hero[];

  constructor(
    // 注入 HeroService 服务
    private heroService: HeroService,
    private messageService: MessageService
  ) { }
  /* ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。 */
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // 上一个版本把英雄的数组赋值给了该组件的 heroes 属性。 这种赋值是同步的，这里包含的假设是服务器能立即返回英雄数组或者浏览器能在等待服务器响应时冻结界面。
    // 当 HeroService 真的向远端服务器发起请求时，这种方式就行不通了。
    // (同步) this.heroes = this.heroService.getHeroes();

    // 在 HeroesComponent 中订阅
    // 新的版本等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。 然后，subscribe() 方法把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性。
    // 使用这种(异步)方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了。
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);
  }

  delete(hero: Hero):void{
    // 过滤器会创建一个新的数组，原数组不会改变
    this.heros = this.heros.filter(h=>h!==hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
