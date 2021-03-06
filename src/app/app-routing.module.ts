import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heroes',component: HeroesComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: '',redirectTo:'/dashboard',pathMatch:'full'},
  // 参数化路由  path 中的冒号 : 表示 :id 是一个占位符，它表示某个特定英雄的 id
  {path: 'detail/:id' , component: HeroDetailComponent}
];

@NgModule({
  // 这个方法之所以叫 forRoot()，是因为你要在应用的顶层配置这个路由器。 forRoot() 方法会提供路由所需的服务提供者和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [RouterModule.forRoot(routes)],
  // 导出 RouterModule，以便它在整个应用程序中生效。
  exports: [RouterModule]

})
export class AppRoutingModule { }
