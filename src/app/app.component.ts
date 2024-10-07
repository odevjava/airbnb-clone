import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button, ButtonModule} from "primeng/button";
import {FaIconComponent, FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./font-awesome-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faIconLibrary : FaIconLibrary = inject(FaIconLibrary)


  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome(): void{
    this.faIconLibrary.addIcons(...fontAwesomeIcons)
  }

}
