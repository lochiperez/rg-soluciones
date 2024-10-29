import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() name:string = ''
  @Input() link:string = ''
  @Output() linkExterno = new EventEmitter<string>()

  redirect(){
    this.linkExterno.emit()
  }
}
