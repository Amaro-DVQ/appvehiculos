import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-ofrecer-auto',
  templateUrl: './ofrecer-auto.page.html',
  styleUrls: ['./ofrecer-auto.page.scss'],
})
export class OfrecerAutoPage implements OnInit {

  parametronumeroDos: number | undefined;
  
  constructor(private activatedRoute: ActivatedRoute,
    private helper: HelperService) { }

  ngOnInit() {
    this.parametronumeroDos = this.activatedRoute.snapshot.params['num'];
    console.log("parametro: ", this.parametronumeroDos);
  }

}
