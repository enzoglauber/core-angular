import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerComponent } from './spacer.component';

describe('BoxedContentComponent', () => {
  let component: SpacerComponent;
  let fixture: ComponentFixture<SpacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
