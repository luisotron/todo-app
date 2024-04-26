import { Component, inject } from '@angular/core';

import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  public tasks: Array<Task>/*Task[]*/ =[
    {
      description: "Inicializar Aplicacion TODO",
      isCompleted: true
    },
    {
      description: "Crear Aplicacion TODO",
      isCompleted: false
    },
    {
      description: "Actualizar modulo TODO",
      isCompleted: false
    },
    {
      description: "Crear primer componente",
      isCompleted: false
    },
    {
      description: "Crear componente para lista",
      isCompleted: false
    },
    {
      description: "Finalizar aplicación",
      isCompleted: false
    }
  ];

  //private taskService = inject(TasksService);
  constructor(private taskService: TasksService) {};

  public onDeleteTask(index:number): void{
    this.tasks.splice(index, 1);
  }
  public onCompleteTask(index:number): void{
      this.tasks[index].isCompleted= !this.tasks[index].isCompleted;
  }
  public onNewTask(task :Task): void{
    this.tasks.push(task);
}

}
