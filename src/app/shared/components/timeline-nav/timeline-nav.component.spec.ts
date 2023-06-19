import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineNavComponent } from './timeline-nav.component';

describe('TimelineNavComponent', () => {
  let component: TimelineNavComponent;
  let fixture: ComponentFixture<TimelineNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimelineNavComponent]
    });
    fixture = TestBed.createComponent(TimelineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
