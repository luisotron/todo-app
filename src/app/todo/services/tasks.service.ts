import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  public tasks: Array<Task> =[
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

  constructor() { }

  public deleteTask(index:number): void{
    this.tasks.splice(index, 1);
  }
  public completeTask(index:number): void{
      this.tasks[index].isCompleted= !this.tasks[index].isCompleted;
  }
  public addNewTask(task :Task): void{
    this.tasks.push(task);
}

  public deleteAllCompletedTask(): void{
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(i + "  " + this.tasks[i].description + "  " + this.tasks[i].isCompleted)
      if(this.tasks[i].isCompleted == true) {
        console.log( "Se va a borrar " + i + "  " + this.tasks[i].description + "  " + this.tasks[i].isCompleted)
        this.tasks.splice(i, 1);
        i--;
      }
    }
  }
}
