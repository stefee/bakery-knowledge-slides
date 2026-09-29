import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';
import Notes from 'reveal.js/plugin/notes';
import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/white.css';

import './theme.css';

Reveal.initialize({
  hash: true,
  slideNumber: 'c/t',
  transition: 'slide',
  width: 1280,
  height: 720,
  plugins: [Highlight, Notes],
});
