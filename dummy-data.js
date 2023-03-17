const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description: 'Everyone can learn to code! Yes, everyone! In this event, we are going to teach code',
        location: 'Somestreet, 25 12345',
        date: '2023-02-04',
        image: 'images/coding-event.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Cooking',
        description: 'Learn how to cook like a chef',
        location: 'New wall street, 4 67890',
        date: '2023-05-06',
        image: 'images/cooking-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for introverts',
        description: 'Networking is no fun if you are an introvert person. That\'s why we are going to help you with it!',
        location: 'New wall street, 4 67890',
        date: '2023-06-12',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    }
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const {year, month} = dateFilter;
    let filteredEvents = DUMMY_EVENTS.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}

export function getEventsById(id) {
    return DUMMY_EVENTS.find(event => event.id === id);
}