import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { BadgeComponent } from "./badge/badge.component";
import { BottonsheetComponent } from "./bottonsheet/bottonsheet.component";
import { ButtonComponent } from "./button/button.component";
import { ButtontoggleComponent } from "./buttontoggle/buttontoggle.component";
import { CardComponent } from "./card/card.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ChipsComponent } from "./chips/chips.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DividerComponent } from "./divider/divider.component";
import { ExpansionpanelComponent } from "./expansionpanel/expansionpanel.component";
import { FormfieldComponent } from "./formfield/formfield.component";
import { ProgressspinnerComponent } from "./progressspinner/progressspinner.component";
import { GridlistComponent } from "./gridlist/gridlist.component";
import { IconComponent } from "./icon/icon.component";
import { InputComponent } from "./input/input.component";
import { ListComponent } from "./list/list.component";
import { MenuComponent } from "./menu/menu.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { ProgressbarComponent } from "./progressbar/progressbar.component";
import { RadiobuttonComponent } from "./radiobutton/radiobutton.component";
import { SelectComponent } from "./select/select.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { SliderComponent } from "./slider/slider.component";
import { SlidetoggleComponent } from "./slidetoggle/slidetoggle.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { SortheaderComponent } from "./sortheader/sortheader.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TableComponent } from "./table/table.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { TreeComponent } from "./tree/tree.component";
import { RipplesComponents } from "./ripples/ripples.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent, BadgeComponent, BottonsheetComponent, ButtonComponent, ButtontoggleComponent, CardComponent, CheckboxComponent, ChipsComponent, DatepickerComponent, DialogComponent, DividerComponent, ExpansionpanelComponent, FormfieldComponent, ProgressspinnerComponent, GridlistComponent, IconComponent, InputComponent, ListComponent, MenuComponent, PaginatorComponent, ProgressbarComponent, RadiobuttonComponent, SelectComponent, SidenavComponent, SliderComponent, SlidetoggleComponent, SnackbarComponent, SortheaderComponent, StepperComponent, TableComponent, TabsComponent, ToolbarComponent, TooltipComponent, TreeComponent, RipplesComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_web';
}
