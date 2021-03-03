import { row, col } from "../templates.js"

export class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }
    toHTML() {
        throw new Error('toHTML method was not implemented');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options);
    }
    toHTML() {
        return row(col(`<h2>${this.value}</h2>`));
    }

}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options);
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options);
    }
    toHTML() {
        const html = this.value.map(
            item => {
                return col(`<p>${item}</p>`)
            }
        );

        return row(html.join(''));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options);
    }
    toHTML() {
        return row(col(`<img src="${this.value}" />`));
    }
}