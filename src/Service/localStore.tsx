// const create = (func: any) => {
//   const properties = func(); // This will return the set object
//   return func();
// };

import { getRandomProgress } from "Utils/helper";

const storageKey: string = "todo-app__key";

export const initStore = () => {
  const data = JSON.stringify({ todos: [] });
  localStorage.setItem(storageKey, data);
};

const saveToStorage = (data: any) => {
  const encriptData = JSON.stringify(data);
  localStorage.setItem(storageKey, encriptData);
};

const decryptData = () => {
  return JSON.parse(localStorage.getItem(storageKey)!);
};

export const saveData = (data: any) => {
  const storeData: any = decryptData();
  const dataWithId = { ...data, id: Date.now(), progress: getRandomProgress() };

  storeData.todos.push(dataWithId);

  saveToStorage(storeData);
};

export const editData = (data: any) => {
  const id = data.id;
  const storeData: any = decryptData();

  const index = storeData.todos.findIndex((item: any) => item.id === id);

  storeData.todos.splice(index, 1, data);
  saveToStorage(storeData);
};

export const deleteData = (data: any) => {
  const id = data.id;
  let storeData: any = decryptData();

  let newStoreData = storeData.todos.filter((item: any) => item.id !== id);

  saveToStorage({ todos: [...newStoreData] });
};

export const getItem = (id: any) => {
  const storeData: any = decryptData();

  const data = storeData.todos.filter((item: any) => item.id === id);

  return data[0];
};

export const getData = () => {
  const storeData: any = decryptData();
  return storeData.todos;
};

export const completeTodo = (id: any) => {
  const storeData: any = decryptData();

  const data = storeData.todos.map((item: any) =>
    item.id === id ? { ...item, progress: 100 } : { ...item }
  );
  saveToStorage({ todos: [...data] });
};
