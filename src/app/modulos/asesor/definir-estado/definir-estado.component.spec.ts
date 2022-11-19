import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirEstadoComponent } from './definir-estado.component';

describe('DefinirEstadoComponent', () => {
  let component: DefinirEstadoComponent;
  let fixture: ComponentFixture<DefinirEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinirEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinirEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
