import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';
import { SolicitarAutoPage } from './solicitar-auto.page';
import { StorageService } from 'src/app/services/storage.service';

describe('SolicitarAutoPage', () => {
  let component: SolicitarAutoPage;
  let fixture: ComponentFixture<SolicitarAutoPage>;
  let activatedRouteMock: any;
  let storageServiceMock: any;
  let navControllerMock: any;

  beforeEach(() => {
    activatedRouteMock = {
      params: of({ 'num': 123 }),
      snapshot: { params: { 'num': 321 } }  
    };

    storageServiceMock = jasmine.createSpyObj('StorageService', ['obtenerVehiculos']);
    storageServiceMock.obtenerVehiculos.and.returnValue(Promise.resolve([]));

    navControllerMock = jasmine.createSpyObj('NavController', ['navigateForward']);

    TestBed.configureTestingModule({
      declarations: [SolicitarAutoPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: StorageService, useValue: storageServiceMock },
        { provide: NavController, useValue: navControllerMock }
      ]
    });

    fixture = TestBed.createComponent(SolicitarAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load vehicles on init', async () => {
    await component.ngOnInit();
    expect(storageServiceMock.obtenerVehiculos).toHaveBeenCalled();
    expect(component.vehiculos).toEqual([]);
  });
});
