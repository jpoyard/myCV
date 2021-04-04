import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcv-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryComponent {

  public links = [
    { icon: "fa-linkedin", label: "linkedin.com/in/jpoyard", url: "http://www.linkedin.com/in/jpoyard" },
    { icon: "fa-github", label: "github.com/jpoyard", url: "https://github.com/jpoyard" },
    { icon: "fa-twitter", label: "@jpoyard", url: "https://twitter.com/jpoyard" },
    { icon: "fa-codepen", label: "codepen.io/jpoyard", url: "https://codepen.io/jpoyard" }
  ]

}
