import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  @Output()
  public onNewTask: EventEmitter<Task> =new EventEmitter();
  
public task: Task = {
  description: '',
  isCompleted: false
};

  public emitTask(): void {
    if (this.task.description.length===0) return;
    this.onNewTask.emit(this.task);
    this.task = {
      description: '',
      isCompleted: false
    };
  };

}
