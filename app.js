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

      var current_tasks = document.querySelectorAll(".btn-close");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
}