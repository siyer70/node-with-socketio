var socket = io();

socket.on('connect', function() {
  displayMessage("Connected to the server");
});

socket.on('new email', function(emailData) {
  displayMessage(`New EMail arrived from ${emailData.from}`);
});

socket.on('disconnect', function() {
  displayMessage('Disconnected from the server');
});

function displayMessage(message) {
  var divItem = document.getElementById('message');
  console.log(message);
  if(divItem!==undefined) {
    divItem.innerHTML = message;
  }
}

function onButtonClick() {
  var txtTo = document.getElementById('idTo');
  var txtSubject = document.getElementById('idSubject');
  var txtMessage = document.getElementById('idMessage');
  socket.emit("create email", {
    to : txtTo.value,
    subject : txtSubject.value,
    message : txtMessage.innerHTML
  });
}
