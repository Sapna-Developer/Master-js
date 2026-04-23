const API_KEY = "YOUR_API_KEY";
const API_KEY = process.env.REACT_APP_GROQ_API_KEY;

document.getElementById("send-button").addEventListener("click", async () => {
  const input = document.getElementById("user-input").value;
  const responseText = document.getElementById("response");

  responseText.innerText = "Generating...";

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: input }
        ]
      })
    });

    const data = await res.json();
    responseText.innerText =
      data.choices?.[0]?.message?.content || "No response";
  } catch (err) {
    responseText.innerText = "Error occurred!";
    console.error(err);
  }
});