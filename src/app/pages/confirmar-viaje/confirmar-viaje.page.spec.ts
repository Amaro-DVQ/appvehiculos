import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { ConfirmarViajePage } from './confirmar-viaje.page';

describe('ConfirmarViajePage', () => {
  let component: ConfirmarViajePage;
  let fixture: ComponentFixture<ConfirmarViajePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarViajePage],
      providers: [

        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ vehiculo: JSON.stringify({ correoUsuario: ' ', costoViaje: ' ' }) }))
          }
        },
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
      ]
    });

    fixture = TestBed.createComponent(ConfirmarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a title', () => {
    expect(component.title).toEqual('Confirmar Viaje');
  });

});
