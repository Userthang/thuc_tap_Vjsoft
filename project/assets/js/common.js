function show_content(tabId, select_tab) {
    const contents = document.querySelectorAll('.tab_content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.getElementById(select_tab).classList.add('active');
    const activeTab = Array.from(tabs).find(tab => tab.textContent === tabId.replace('tab', 'Tab'));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function toggle_menu_info() {
    const menu_info = document.getElementById('menu_info');
    const navigation = document.getElementById('navigation');
    menu_info.classList.toggle('show');
}
// function toggle_navigation() {
//     const navigation = document.getElementById('navigation');
//     const menu_info = document.getElementById('menu_info');
//     const open_menu = document.getElementById('open_menu');
//     const close_menu = document.getElementById('close_menu');
//     menu_info.classList.remove('show');
//     navigation.classList.toggle('show');
//     if (navigation.classList.contains('show')) {
//         open_menu.style.display = 'none';
//         close_menu.style.display = 'block';
//     }
//     else {
//         open_menu.style.display = 'block';
//         close_menu.style.display = 'none';
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const open_menu = document.querySelector('.open_menu');
    const navigation = document.querySelector('.navigation');
    const overlay = document.querySelector('.overlay');

    open_menu.addEventListener('click', function () {
        open_menu.classList.toggle('active');
        navigation.classList.toggle('show');
        overlay.classList.toggle('active');

    });

    overlay.addEventListener('click', function () {
        open_menu.classList.remove('active');
        navigation.classList.remove('show');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

});