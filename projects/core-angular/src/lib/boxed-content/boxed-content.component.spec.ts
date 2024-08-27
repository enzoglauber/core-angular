import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedContentComponent } from './boxed-content.component';

describe('BoxedContentComponent', () => {
  let component: BoxedContentComponent;
  let fixture: ComponentFixture<BoxedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
