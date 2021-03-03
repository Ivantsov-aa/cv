export class Navbar {
    constructor(selector) {
        this.$navbar = document.querySelector(selector);
    }

    render(links) {
        const $navbarUl = document.createElement('ul');
        this.$navbar.append($navbarUl);

        links.forEach(link => {
            $navbarUl.insertAdjacentHTML('beforeend', link.toHTML());
        });
    }
}

