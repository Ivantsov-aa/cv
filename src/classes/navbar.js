export class Navbar {
    constructor(selector, href, icon, value) {
        this.$navbar = document.querySelector(selector);
        this.href = href;
        this.icon = icon;
        this.value = value;
    }

    getNavigationLink() {
        return `<li><a href="${link.href}" class="nav-link scrollto"><i class="bi ${link.icon}"></i> <span>${link.value}</span></a></li>`
    }

    render(links) {
        links.forEach(link => {
            this.$navbar.insertAdjacentHTML('beforeend', link.getNavigationLink())
        })
    }
}

