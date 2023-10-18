import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
@Component({
  selector: 'app-solicitar-auto',
  templateUrl: './solicitar-auto.page.html',
  styleUrls: ['./solicitar-auto.page.scss'],
})
export class SolicitarAutoPage implements OnInit {

  parametronumeroUno: number | undefined;
  constructor(private activatedRoute: ActivatedRoute,
    private helper: HelperService) { }

  ngOnInit() {
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    console.log("parametro: ", this.parametronumeroUno);
  }

}
