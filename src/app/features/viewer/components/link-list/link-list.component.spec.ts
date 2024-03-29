import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListComponent } from './link-list.component';

describe(LinkListComponent.name, () => {
  let component: LinkListComponent;
  let fixture: ComponentFixture<LinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
