import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { LanguageService } from '../../../../core/services/language.service';
import { SupportedLanguageEnum } from '../../../../model/language';

import { WorkExperienceComponent } from './work-experience.component';

describe(WorkExperienceComponent.name, () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;
  let spyObjLanguageService: jasmine.SpyObj<LanguageService>;

  beforeEach(async () => {
    spyObjLanguageService = jasmine.createSpyObj<LanguageService>(LanguageService.name, [],
      { currentLang$: of(SupportedLanguageEnum.english) });

    await TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(), WorkExperienceComponent],
    providers: [
        { provide: LanguageService, useValue: spyObjLanguageService }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
