import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
{
title: 'What is React',
content: 'React is a front end javascript framework'
},

{
title: 'why use react?',
content: 'React is a favourite JS library among engineer'
},

{
title: 'How do you use React?',
content: 'you use React by creating components'
},
];


export default () => {
return (
 <div>
    <Search />
 </div>
);
};