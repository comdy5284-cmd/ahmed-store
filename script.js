const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    let visibleCount = 0;

    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        const type = product.dataset.type;

        const matchesSearch = name.includes(searchText);
        const matchesFilter =
            currentFilter === "all" || type === currentFilter;

        if (matchesSearch && matchesFilter) {
            product.style.display = "block";
            visibleCount++;
        } else {
            product.style.display = "none";
        }
    });

    noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterProducts);

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        filterProducts();
    });
});

// ربط طلبات الصيانة بواتساب أحمد
document.addEventListener("DOMContentLoaded", function () {

    const repairForm = document.getElementById("repairForm");

    if (!repairForm) return;

    repairForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const model = document.getElementById("phoneModel").value.trim();
        const problem = document.getElementById("repairProblem").value.trim();

        const message =
            "🔧 طلب صيانة جديد - AHMED STORE\n\n" +
            "👤 اسم العميل: " + name + "\n" +
            "📞 رقم العميل: " + phone + "\n" +
            "📱 نوع الموبايل: " + model + "\n" +
            "⚠️ العطل: " + problem;

        const whatsappURL =
            "https://wa.me/201065522986?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
    });

});