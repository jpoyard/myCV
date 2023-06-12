import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BootstrapColorEnum } from '../../model/color.enum';

import { LinkComponent } from './link.component';

describe(LinkComponent.name, () => {
  const label = 'linkedin.com/in/jpoyard';
  const url = 'http://www.linkedin.com/in/jpoyard';
  const icon = 'fa-linkedin';
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LinkComponent]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
  });

  describe('icon property', () => {
    it('should display only link when icon is undefined', () => {
      // Given
      // When
      fixture.detectChanges();
      // Then
      expect(fixture.debugElement.query(By.css('i'))).toBeNull();
      const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
      expect(linkTagElt.textContent).toContain('none');
    });
    it('should display link and icon when icon is defined', () => {
      // Given
      component.icon = icon;
      // When
      fixture.detectChanges();
      // Then
      const iconElt = fixture.debugElement.query(By.css('i')).nativeElement;
      expect(iconElt).toHaveClass(icon);
      const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
      expect(linkTagElt.textContent).toContain('none');
    });
  });

  describe('label property', () => {
    it('should display none when component.label is undefined', () => {
      // Given
      component.icon = icon;
      // When
      fixture.detectChanges();
      // Then
      const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
      expect(linkTagElt.textContent).toContain('none');
    });
    it(`should display '${label}' when component.label is '${label}'`, () => {
      // Given
      component.icon = icon;
      component.label = label;
      // When
      fixture.detectChanges();
      // Then
      const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
      expect(linkTagElt.textContent).toContain(label);
    });
  });

  describe('url property', () => {
    it(`should have href='#' when component.url is undefined`, () => {
      // Given
      component.icon = icon;
      // When
      fixture.detectChanges();
      // Then
      const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
      expect(linkTagElt.href).toContain('#');
    });
    it(`should have href='${url}' when component.url is '${url}'`, () => {
      // Given
      component.icon = icon;
      component.label = label;
      component.url = url;
      // When
      fixture.detectChanges();
      // Then
      const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
      expect(linkTagElt.textContent).toContain(label);
      expect(linkTagElt.href).toContain(url);
    });
  });

  describe('color property', () => {
    const defaultColor = BootstrapColorEnum.light;
    it(`should have color='${defaultColor}' when component.color is undefined`, () => {
      // Given
      component.icon = icon;
      component.label = label;
      component.url = url;
      // When
      fixture.detectChanges();
      // Then
      const iconElt = fixture.debugElement.query(By.css('i')).nativeElement;
      expect(iconElt).toHaveClass('bg-' + defaultColor);
      const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
      expect(linkTagElt.textContent).toContain(label);
      expect(linkTagElt.href).toContain(url);
      expect(linkTagElt).toHaveClass('text-' + defaultColor);
    });
    [BootstrapColorEnum.light, BootstrapColorEnum.white].forEach(color => {
      it(`should have color='${color}' when component.color is '${color}'`, () => {
        // Given
        component.icon = icon;
        component.label = label;
        component.url = url;
        component.color = color;
        // When
        fixture.detectChanges();
        // Then
        const iconElt = fixture.debugElement.query(By.css('i')).nativeElement;
        expect(iconElt).toHaveClass('bg-' + color);
        const linkTagElt = fixture.debugElement.query(By.css('a')).nativeElement as HTMLLinkElement;
        expect(linkTagElt.textContent).toContain(label);
        expect(linkTagElt.href).toContain(url);
        expect(linkTagElt).toHaveClass('text-' + color);
      });
    });
  });
});
