import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-ripples', 
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.css',],
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule],
})
export class RipplesComponents {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 0;
  color: string = '';
}
