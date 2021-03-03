export class Link {
    constructor(href, icon, value) {
        this.href = href;
        this.icon = icon;
        this.value = value;
    }
    toHTML() {
        return `<li><a href="${this.href}" class="nav-link scrollto"><i class="bi ${this.icon}"></i> <span>${this.value}</span></a></li>`
    }
}