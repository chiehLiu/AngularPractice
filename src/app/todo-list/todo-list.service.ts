import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}

  private list: Todo[] = [];

  /**
   * 新增代辦事項
   *
   * @param {string} title - 代辦事項
   * @memberof TodoListService
   */
  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  /**
   * 取得待辦事項清單
   *
   * @returns {Todo[]}
   * @memberof TodoListService
   */
  getList(): Todo[] {
    return this.list;
  }

  /**
   * 移除待辦事項
   *
   * @param {number} index - 待辦事項的索引位置
   * @memberof TodoListService
   */
  remove(index: number): void {
    this.list.splice(index, 1);
  }

  /**
   * 取得已完成/未完成的清單
   *
   * @param {boolean} completed - 要取得已完成還是未完成的清單
   * @returns {Todo[]}
   * @memberof TodoListService
   */
  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter((todo) => todo.done === completed);
  }

  /**
   * 從清單中移除所有已完成之待辦事項
   *
   * @memberof TodoListService
   */
  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
