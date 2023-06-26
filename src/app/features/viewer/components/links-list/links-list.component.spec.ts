import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksListComponent } from './links-list.component';

describe(LinksListComponent.name, () => {
  let component: LinksListComponent;
  let fixture: ComponentFixture<LinksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
