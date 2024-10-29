import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type:string = ''
  @Input() name:string = ''
  @Input() id:string = ''
  @Input() placeholder:string = ''
  @Input() inputMode:string = ''
  @Input() required:boolean = false
}
