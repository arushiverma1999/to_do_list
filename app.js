const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput= document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
      //remove tasks from list
      taskList.addEventListener('click',removeTask);
      //clear task list
      clearBtn.addEventListener('submit',clearTask)
      //filter task
      filter.addEventListener('keyup',filterTask)
}

function addTask(e)
{
    if(taskInput.value == '')
    {
        alert("add some task first");
    }

     const li=document.createElement('li');
     li.className='collection-item';
    const text=document.createTextNode(taskInput.value);
    li.appendChild(text);
    const link=document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value='';
  
    
    e.preventDefault();
}
function removeTask(e)
{
    if(e.target.parentElement.classList.contains('delete-item'))
    e.target.parentElement.parentElement.remove();
}
function clearTask(){
    taskList.innerHTML='';
}
function filterTask(e){
    search_key=e.target.value.toLowerCase();
    list_item=document.querySelectorAll('.collection-item');
   
   list_item.forEach(function(a)
   {
       const item=a.firstChild.textContent;
       if(item.toLowerCase().indexOf(search_key)!=-1)
       {
           a.style.display='block'; 
       }
       else
       {
            a.style.display='none';
       }
   }  
   )
}
