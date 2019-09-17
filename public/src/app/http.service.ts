import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getTasks() {
    return this._http.get('/tasks');
  }

  getDescription(id) {
    return this._http.get('/tasks/'+id);
  }

  createTask(newTask) {
    return this._http.post('/tasks', newTask);
  }

  editTask(id, editTask) {
    return this._http.put('/tasks/'+id, editTask);
  }

  deleteTask(id) {
    return this._http.delete('/tasks/'+id);
  }

}

