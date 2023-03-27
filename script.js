window.history.replaceState({ page: 'home' }, 'home', '#home');

function updateContent(pageName) {
    const pages = document.getElementsByClassName('page');
    for (let p of pages  ) {
        p.classList.add('hidden');
    }
    const CurrentPage = document.getElementById(pageName);
    CurrentPage.classList.remove('hidden');
}

function navigate(pageName) {
    window.history.pushState({page: pageName}, pageName, `#${pageName}`);

    updateContent(pageName);
}

window.addEventListener('popstate', function(e){
    if (e.state) {
        updateContent(e.state.page);
    }
});