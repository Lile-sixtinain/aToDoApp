document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <p id="taskname">
                    ${document.querySelector('#newtask input').value}
                </p>
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
        `;
            //BUTTON DELETE
            var delete_task = document.querySelectorAll(".btn-close");
            for(var i=0; i< delete_task.length; i++){
                delete_task[i].onclick = function(){
                this.parentNode.remove();
                }
            }
      } 

}
