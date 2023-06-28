import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PreparedCurriculumVitaeData } from '@model/cv-data';
import { LinksListComponent } from '../links-list/links-list.component';

@Component({
  selector: 'mcv-header',
  standalone: true,
  imports: [LinksListComponent, MatCardModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'mcv-header',
  },
})
export class HeaderComponent {
  @Input({ required: true })
  public cv!: PreparedCurriculumVitaeData;
}
