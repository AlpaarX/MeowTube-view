document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const searchInput = document.querySelector(".search-input");
        const url = `https://www.youtube.com/results?search_query=${searchInput.value}`;
        if (searchInput.value !== "") {
            window.open(url, "_blank");
        }
    }
});
