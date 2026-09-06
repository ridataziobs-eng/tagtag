import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../core/core.index';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrl: './lock-screen.component.scss',
    imports: [CommonModule]
})
export class LockScreenComponent {
  public routes = routes;
  public password : boolean[] = [false];
constructor(private router:Router){

}
navigation():void{
  this.router.navigate([routes.index])
}
  public togglePassword(index: number){
    this.password[index] = !this.password[index]
  }
}
