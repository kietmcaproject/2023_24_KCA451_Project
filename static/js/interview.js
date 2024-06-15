
document.addEventListener('DOMContentLoaded', function () {
  // console.log("line 1")
  const messagesList = document.querySelector('.messages-list');
  // console.log("line 2")
  const messageForm = document.querySelector('.message-form');
  // console.log("line 3")
  const messageInput = document.querySelector('.message-input');

  
  // console.log("line 4")
  
  messageForm.addEventListener('submit', (event) => {
    // console.log("line 5")
    event.preventDefault();
    // console.log("line 6")
    
    const message = messageInput.value.trim();
    
    if (message.length === 0) {
      // console.log("line 8")
      return;
    }
    console.log("line 9")
    
    const messageItem = document.createElement('li');
    console.log("line 9.1")
    messageItem.classList.add('message', 'sent');
    console.log("line 9.2")
    messageItem.innerHTML = `
        <div class="message-text">
            <div class="message-sender">
                <b>You</b>
            </div>
            <div class="message-content">
                ${message}
            </div>
        </div>`;
    messagesList.appendChild(messageItem);

    messageInput.value = '';

    fetch('/interview/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'csrfmiddlewaretoken': document.querySelector('[name=csrfmiddlewaretoken]').value,
        'message': message
      })
    })
      .then(response => response.json())
      .then(data => {
        let response = data.response;
        let re_response = response.replaceAll(":** ", ": ").replaceAll('**', '<br>').replaceAll("*", '');
        // console.log(re_response);
        
        const messageItem = document.createElement('li');
        messageItem.classList.add('message', 'received');
        messageItem.innerHTML = `
        <div class="message-text">
            <div class="message-sender">
              <b>AI Assistant</b>
            </div>
            <div class="message-content">
                ${re_response}
            </div>
        </div>
          `;
        messagesList.appendChild(messageItem);
      });
  });
});
// console.log(item);
