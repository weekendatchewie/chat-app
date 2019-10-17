import React from 'react'
import Contact from './Contact';

const list = [
    {
        name : 'JCVD',
        avatar : 'https://randomuser.me/api/portraits/men/51.jpg',
        isOnline : true
    },
    {
        name : 'Robert DeNiro',
        avatar : 'https://randomuser.me/api/portraits/men/5.jpg',
        isOnline : false
    },
    {
        name : 'Walter White',
        avatar : 'https://randomuser.me/api/portraits/men/24.jpg',
        isOnline : false
    },
    {
        name : 'Docteur Quinn',
        avatar : 'https://randomuser.me/api/portraits/women/21.jpg',
        isOnline : true
    },
    {
        name : 'Laura Ingalls',
        avatar : 'https://randomuser.me/api/portraits/women/72.jpg',
        isOnline : true
    }
];

const ContactList = () => (
    <div>
        {list.map(item => (
            <Contact name={item.name} avatar={item.avatar} isOnline={item.isOnline} />
        ))}
    </div>
);

export default ContactList