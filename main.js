console.log('Hello World!');
let sidemenu = document.getElementById('sidemenu');
function closeSideMenu(param) {
    sidemenu.style.left = '-440px';
}
function openSideMenu(param) {
    sidemenu.style.left = '0px';
}