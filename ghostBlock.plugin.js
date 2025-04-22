export default {
  name: "GhostBlockMantu",
  description: "Ghost block mantu2045 from all Discord visibility",
  authors: ["you"],
  start() {
    const username = "mantu2045";

    const hideElements = () => {
      document.querySelectorAll("*").forEach(el => {
        const text = el.textContent || "";

        // Hide message containers
        if (text.includes(username) && el.closest('[class*="messageListItem"]')) {
          el.closest('[class*="messageListItem"]').style.display = "none";
        }

        // Hide reply headers
        if (el.getAttribute?.("aria-label")?.includes(username) && el.closest('[class*="messageListItem"]')) {
          el.closest('[class*="messageListItem"]').style.display = "none";
        }

        // Hide member list entries
        if (el.className?.includes("member") && text.includes(username)) {
          el.style.display = "none";
        }

        // Hide reaction containers with her name
        if (el.getAttribute?.("aria-label")?.includes(username)) {
          el.style.display = "none";
        }

        // Hide standalone mentions of her name
        if ((el.tagName === "SPAN" || el.tagName === "DIV") && text.includes(username)) {
          el.style.display = "none";
        }

        // Optional: Hide mention pings
        if (el.className?.includes("mention") && text.includes(username)) {
          el.style.display = "none";
        }
      });
    };

    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, { childList: true, subtree: true });

    hideElements(); // Run once immediately
    this.observer = observer;
  },
  stop() {
    if (this.observer) this.observer.disconnect();
  }
};
