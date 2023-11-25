import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import { RecuperarContraPage } from './recuperar-contra.page';

class AngularFireAuthMock {
}

describe('RecuperarContraPage', () => {
  let component: RecuperarContraPage;
  let fixture: ComponentFixture<RecuperarContraPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraPage],
      imports: [
        AngularFireModule.initializeApp({}),
        AngularFireAuthModule,
      ],
      providers: [
        { provide: AngularFireAuth, useClass: AngularFireAuthMock },
      ],
    });

    fixture = TestBed.createComponent(RecuperarContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a Correo enviado message', () => {
    expect(component.mensaje).toBeDefined();
    expect(component.mensaje).toBe('Correo enviado');
  });


});
