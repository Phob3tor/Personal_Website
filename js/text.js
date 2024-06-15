document.addEventListener("DOMContentLoaded", () => {
    const bgText = document.getElementById("bg-text");

    const fetchQuote = async () => {
        try {
            const response = await fetch("https://techy-api.vercel.app/api/json");
            const data = await response.json();
            return data.message; // assuming the quote is in the 'message' property
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const writeText = async () => {
        let text = "";
        bgText.innerText = "";

        const message = await fetchQuote();
        
        if (!message) {
            console.error("No message received");
            return;
        }

        for (let letter of message) {
            text += letter;
            bgText.innerText = text;

            let randNo = Math.floor(Math.random() * 200) + 50;
            await new Promise(resolve => setTimeout(resolve, randNo));
        }

        setTimeout(() => {
            writeText();
        }, 2000);
    }

    writeText();
});