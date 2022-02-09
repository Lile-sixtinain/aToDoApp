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

  }
}