(function () {
    const navList = ['Home', 'About', 'Resume', 'Contacts'];

    let ul = document.createElement('ul');
    document.getElementById('navbar').appendChild(ul);

    navList.forEach(el => {
        let li = document.createElement('li');
        li.setAttribute('class', 'nav-link scrollto');
        ul.appendChild(li);

        let a = document.createElement('a');
        a.setAttribute('class', 'link');
        a.href = '#';
        li.appendChild(a);

        let i = document.createElement('i');
        a.appendChild(i);

        const menuIcons = ['bi bi-house-door', 'bi bi-person', 'bi bi-file-person', 'bi bi-telephone-fill'];

        menuIcons.forEach(elem => {
            i.className = i.innerHTML + elem;
        });
        
        let span = document.createElement('span');
        a.appendChild(span);

        span.innerHTML = span.innerHTML + el;
    });
})();