import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-terceiro-requisito-hemope',
  templateUrl: './terceiro-requisito-hemope.component.html',
  styleUrls: ['./terceiro-requisito-hemope.component.css']
})
export class TerceiroRequisitoHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
