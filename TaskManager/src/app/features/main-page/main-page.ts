import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { AddTesk } from './components/add-tesk/add-tesk';
@Component({
  selector: 'app-main-page',
  imports: [Header,AddTesk],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  
  
}
