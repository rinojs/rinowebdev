
document.addEventListener("DOMContentLoaded", function ()
{
    const toggleButton = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar-wrapper");

    toggleButton.addEventListener("click", function ()
    {
        const isVisible = sidebar.style.display === "block";
        sidebar.style.display = isVisible ? "none" : "block";
        console.log("asdas");
    });
});
