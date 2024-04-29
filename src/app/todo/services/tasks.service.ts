import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  public tasks: Array<Task> =[
    {
      id: uuid(),
      description: "Inicializar Aplicacion TODO",
      isCompleted: true
    },
    {
      id: uuid(),
      description: "Crear Aplicacion TODO",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "Actualizar modulo TODO",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "Crear primer componente",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "Crear componente para lista",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "Finalizar aplicación",
      isCompleted: false
    }
  ];

  constructor() { }

  public deleteTask(id:string): void{
    //this.tasks.splice(index, 1);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  public completeTask(id:string): void{
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index].isCompleted= !this.tasks[index].isCompleted;
  }
  public addNewTask(task :Task): void{
    const newTask: Task = {id: uuid(), ...task};
    this.tasks.push(newTask);
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
