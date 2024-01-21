function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";

  const txtArea = document.getElementById("messages");
  const submitBtn = document.getElementById("submit");
  const refrestBtn = document.getElementById("refresh");
  submitBtn.addEventListener("click", postMsg);
  refrestBtn.addEventListener("click", refreshMsg);

  async function postMsg() {
    const content = document.querySelector("input[name='content']").value;
    const author = document.querySelector("input[name='author']").value;

    const requestData = JSON.stringify({
      author,
      content,
    });

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestData,
    });
  }

  async function refreshMsg() {
    const response = await fetch(url);
    const data = await response.json();
    txtArea.value = "";
    Object.values(data).forEach((x) => {
      txtArea.value = txtArea.value + `${x.author}: ${x.content}\n`;
    });
  }
}

attachEvents();
