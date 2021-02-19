import {Block, TitleBlock, TextBlock} from '../classes/blocks'
import image from '../assets/pic.jpg'

let loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis, voluptatibus sed labore illum architecto fuga, laudantium placeat debitis at quaerat temporibus soluta a reiciendis culpa cum nulla eum saepe.';

export const sections = [
    new TitleBlock('Hello world!'),
    new TextBlock(loremText),
    new Block('columns', [ loremText, loremText, loremText ]),
    new Block('image', image),
];