import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'todo-luis',
  templateUrl: './luis.component.html',
  styleUrl: './luis.component.css'
})
export class LuisComponent {
  @Input()
  public list: Array<Task> = [];
  
  @Output()
  public onDeleteCompleted: EventEmitter<number> = new EventEmitter();

  public deletecompleted(): void {
    this.onDeleteCompleted.emit();
  }
}
