document.getElementById("inp_text").focus();
document
  .getElementsByTagName("body")[0]
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      send();
    }
  });
document.getElementById("send").addEventListener("click", send);

function send() {
  const text = document.getElementById("inp_text").value;
  if (text === "") {
    return;
  }

  const request = document.createElement("div");
  request.className = "request";
  request.innerText = text;
  document.getElementsByClassName("main")[0].appendChild(request);
  document.getElementById("inp_text").value = "";

  let responseText = "";

  if (text.toLowerCase().includes("hello")) {
    responseText =
      "Hello! Welcome to blackies, you can aks me diffent questions. I will give you a list of questions \n you can ask \n - what is this website \n - who made this website \n - who made this chatbot \n - what are the 1 subjects on this website\n ";
  } else if (text.toLowerCase().includes("who made this website")) {
    responseText =
      "This website is made by 4 different people \n 1 Yannick Daantje";
  } else if (text.toLowerCase().includes("what are the 4 subjects on this website")) {
    responseText =
      "The 1 subject are \n 1. valuta";
    } else if (text.toLowerCase().includes("yannick")) {
      responseText =
        "Oh yea i know him yannick is a good guy!";
  } else {
    responseText =
      "I'm not sure how to respond to that. Can you ask something else?";
  }

  const response = document.createElement("div");
  response.className = "response";
  response.innerText = responseText;

  setTimeout(function () {
    document.getElementsByClassName("main")[0].appendChild(response);
    let a = document.getElementsByClassName("main")[0].scrollHeight;
    document.getElementsByClassName("main")[0].scrollTop = a + 100;
  }, 1000);

  const a = document.getElementsByClassName("main")[0].scrollHeight;
  document.getElementsByClassName("main")[0].scrollTop = a;
}
