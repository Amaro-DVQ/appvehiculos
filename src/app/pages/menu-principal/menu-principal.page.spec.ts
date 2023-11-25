import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPrincipalPage } from './menu-principal.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment'; 

describe('MenuPrincipalPage', () => {
  let component: MenuPrincipalPage;
  let fixture: ComponentFixture<MenuPrincipalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig), 
      ],
      declarations: [MenuPrincipalPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a Bienvenido KYA message', () => {
    expect(component.mensaje).toBeDefined();
    expect(component.mensaje).toBe('Bienvenido KYA');
  });
});
