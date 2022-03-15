export const copyListener = () => {
    const btn = document.getElementById("copy-btn");
    btn?.addEventListener("click", () => {
        alert("clicked!")
        const text = btn?.getAttribute("data-clipboard-text");
    })
}