import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;
  let mockAngularFireAuth: any;

  beforeEach(() => {
    mockAngularFireAuth = jasmine.createSpyObj('AngularFireAuth', ['authState']);

    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ],
    });

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
  });

  it('should call loadUserInfo on ngOnInit', () => {
    spyOn(component, 'loadUserInfo').and.callThrough();


    mockAngularFireAuth.authState = of({ email: 'test@correo.com' });
    component.ngOnInit();

    expect(component.loadUserInfo).toHaveBeenCalled();
  });
});
