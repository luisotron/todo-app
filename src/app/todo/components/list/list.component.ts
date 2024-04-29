import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public list: Array<Task> = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Output()
  public onComplete: EventEmitter<string> = new EventEmitter();
  

  public delete(id?: string): void {
    this.onDelete.emit(id);
  }

  public complete(id?: string): void {
    this.onComplete.emit(id);
  }

}
