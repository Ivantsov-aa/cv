import { sections } from './model';
import './styles/main.scss';
import { Application } from './classes/app';
import { Navbar } from './classes/navbar';
import { links } from './model';
import { ImageBlock } from './classes/blocks';

const app = new Application('#cv');
app.render(sections);
app.initializeScrollToTop();

const navbar = new Navbar('#navbar');
navbar.render(links);