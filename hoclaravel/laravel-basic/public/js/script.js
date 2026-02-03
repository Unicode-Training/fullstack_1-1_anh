const logoutBtn = document.querySelector(".js-logout");
if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.href;
        const form = document.querySelector(".logout-form");
        form.action = url;
        form.submit();
    });
}
