console.log('finding the script file')

function submitTodo() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const completionDate = document.getElementById('completionDate').value;
  const state = document.getElementById('state').value;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log(`server responded with: ${xhr.responseText}`);
    }
  }
  xhr.open('post', '/submitNewTodo');
  xhr.send(JSON.stringify({
    title,
    description,
    completionDate,
    state
  }));
}

document.getElementById('submitTodo').addEventListener('click', submitTodo)
