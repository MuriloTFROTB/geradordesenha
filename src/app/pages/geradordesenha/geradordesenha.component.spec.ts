import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradordesenhaComponent } from './geradordesenha.component';

describe('GeradordesenhaComponent', () => {
  let component: GeradordesenhaComponent;
  let fixture: ComponentFixture<GeradordesenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeradordesenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeradordesenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
