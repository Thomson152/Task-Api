const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");


const showtask=()=>{

  axios.get('/api/v1/task/')
  .then(res => console.log(res)) 
  .catch(err => console.log(err))

}

showtask()

