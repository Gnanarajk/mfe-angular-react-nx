import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceUi } from './commerce-ui';

describe('CommerceUi', () => {
  let component: CommerceUi;
  let fixture: ComponentFixture<CommerceUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
