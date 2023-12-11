document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');

    // Inisialisasi event listener untuk toggle sidebar saat logo 2 diklik
    document.querySelector('.logo2').addEventListener('click', function (event) {
        event.stopPropagation(); // Mencegah event klik dari mencapai dokumen dan menutup sidebar
        toggleSidebar();
    });

    // Tutup sidebar saat area di luar slidebar diklik
    document.addEventListener('click', function (event) {
        var isClickInsideSidebar = sidebar.contains(event.target);
        var isClickOnLogo2 = event.target.closest('.logo2');

        if (!isClickInsideSidebar && !isClickOnLogo2) {
            sidebar.style.right = '-250px';
        }
    });
});

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var isSidebarOpen = sidebar.style.right === '0px' || sidebar.style.right === '';

    if (isSidebarOpen) {
        sidebar.style.right = '-250px';
    } else {
        sidebar.style.right = '0px';
    }
}
