import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLanguageEnum } from './model/language';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'mcv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCV';

  constructor(translate: TranslateService) {
    translate.addLangs(Object.values(SupportedLanguageEnum))
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(SupportedLanguageEnum.english);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(SupportedLanguageEnum.english);
  }

  public openPDF(data: HTMLElement): void {
    html2canvas(data).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('angular-demo.pdf');
    });
  }
}
