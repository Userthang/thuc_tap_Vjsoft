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

function toggle_menu_info(){
    const menu_info = document.getElementById('menu_info');
    const navigation = document.getElementById('navigation');
    navigation.classList.remove('show');
    menu_info.classList.toggle('show');
}
function toggle_navigation(){
    const navigation = document.getElementById('navigation');
    const menu_info = document.getElementById('menu_info');
    menu_info.classList.remove('show');
    navigation.classList.toggle('show');
}