import { Component, Input } from '@angular/core';
import { BmTheme } from '../models/models';
import { CommonModule } from '@angular/common';

const getStyles = (...args: string[]) => ['button', ...args];

@Component({
  selector: 'bm-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: BmTheme = 'primary';

  public classes(): string[] {
    return getStyles(this.type);
  }
}
