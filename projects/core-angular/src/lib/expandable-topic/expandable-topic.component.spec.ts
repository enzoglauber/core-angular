import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTopicComponent } from './expandable-topic.component';

describe('BoxedContentComponent', () => {
  let component: ExpandableTopicComponent;
  let fixture: ComponentFixture<ExpandableTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
