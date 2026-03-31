import { Component } from '@angular/core';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MinhapaginaComponent } from './minhapagina/minhapagina.component';

@Component({
  selector: 'app-root',
  imports: [ HelloworldComponent, MinhapaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
