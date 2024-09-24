// Define the Sender type
type Sender = {
  name: string;
  avatar: string;
  userId: string;
};

// Define the Message type
type Message = {
  id: string;
  sender: Sender;
  content: string;
  timestamp: string;
  status: string;
};

// Define the Data type with arrays of Message
type Data = {
  sales: Message[];
  promotions: Message[];
  orders: Message[];
  reminders: Message[];
};

// Define the Category interface to reflect the correct type
interface Category {
  [key: string]: Message[];
}

const data: {categories: Category} = {
  categories: {
    sales: [
      {
        id: 'AD-MNDLE',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: "Don't miss our seasonal sale! Up to 50% off on select items.",
        timestamp: '2024-09-23T14:22:00Z',
        status: 'read',
      },
      {
        id: 'AD-FLASH1',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Flash sale happening this weekend! Limited time only.',
        timestamp: '2024-09-23T12:15:00Z',
        status: 'unread',
      },
      {
        id: 'AD-SEP50',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Get an extra 50% off all summer items!',
        timestamp: '2024-09-22T14:00:00Z',
        status: 'read',
      },
      {
        id: 'AD-WEEKLY',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Weekly deals are live! Check out our top offers.',
        timestamp: '2024-09-21T09:30:00Z',
        status: 'unread',
      },
      {
        id: 'AD-DISCOUNT',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Exclusive discounts for loyal customers! Sign in to view.',
        timestamp: '2024-09-20T10:15:00Z',
        status: 'unread',
      },
      {
        id: 'AD-CLEARANCE',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Clearance sale! Last chance to grab your favorites.',
        timestamp: '2024-09-19T11:00:00Z',
        status: 'read',
      },
      {
        id: 'AD-BUNDLES',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Bundle and save! Buy two, get one free on select products.',
        timestamp: '2024-09-18T09:00:00Z',
        status: 'unread',
      },
      {
        id: 'AD-TODAYSPECIAL',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: "Today's special: 30% off on all electronics!",
        timestamp: '2024-09-17T10:30:00Z',
        status: 'read',
      },
      {
        id: 'AD-MEMBEREXCLUSIVE',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Member exclusive: Free shipping on your next order!',
        timestamp: '2024-09-16T12:15:00Z',
        status: 'unread',
      },
      {
        id: 'AD-LOYALTY',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Join our loyalty program for additional perks!',
        timestamp: '2024-09-15T11:00:00Z',
        status: 'read',
      },
      {
        id: 'AD-FALLSALE',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Fall sale starts now! Save on seasonal items.',
        timestamp: '2024-09-14T14:00:00Z',
        status: 'unread',
      },
      {
        id: 'AD-SUMMERSALE',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Summer clearance: Up to 70% off!',
        timestamp: '2024-09-13T09:30:00Z',
        status: 'read',
      },
      {
        id: 'AD-NEWARRIVALS',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Check out our new arrivals! Fresh styles just in.',
        timestamp: '2024-09-12T11:15:00Z',
        status: 'unread',
      },
      {
        id: 'AD-THANKYOU',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Thank you for being a valued customer! Enjoy a special gift.',
        timestamp: '2024-09-11T10:00:00Z',
        status: 'read',
      },
      {
        id: 'AD-WINTERSALE',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Winter sale is here! Discounts on winter apparel.',
        timestamp: '2024-09-10T12:30:00Z',
        status: 'unread',
      },
      {
        id: 'AD-SPECIALOFFER',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Limited time special offer on top brands!',
        timestamp: '2024-09-09T14:45:00Z',
        status: 'read',
      },
      {
        id: 'AD-COLLECTION',
        sender: {
          name: 'Sales Team',
          avatar: 'https://example.com/avatar/sales.jpg',
          userId: '201',
        },
        content: 'Explore our curated collection of bestsellers.',
        timestamp: '2024-09-08T09:00:00Z',
        status: 'unread',
      },
    ],
    promotions: [
      {
        id: 'CP-PROMO1',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Check out our new promotional offer on subscriptions!',
        timestamp: '2024-09-22T17:45:00Z',
        status: 'read',
      },
      {
        id: 'CP-BOGO1',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Limited time offer: Buy one get one free!',
        timestamp: '2024-09-22T10:05:00Z',
        status: 'unread',
      },
      {
        id: 'CP-SAVE15',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Save 15% on your next purchase with code SAVE15!',
        timestamp: '2024-09-21T08:00:00Z',
        status: 'read',
      },
      {
        id: 'CP-EVENT',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Join us for our upcoming webinar! Register now.',
        timestamp: '2024-09-20T15:30:00Z',
        status: 'unread',
      },
      {
        id: 'CP-FREEGIFT',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Get a free gift with every purchase over $50!',
        timestamp: '2024-09-19T11:00:00Z',
        status: 'read',
      },
      {
        id: 'CP-LOYALTY',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Join our loyalty program for exclusive rewards!',
        timestamp: '2024-09-18T09:30:00Z',
        status: 'unread',
      },
      {
        id: 'CP-NEWARRIVALS',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Discover our new arrivals! Shop the latest trends.',
        timestamp: '2024-09-17T10:45:00Z',
        status: 'read',
      },
      {
        id: 'CP-FREEDELIVERY',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Enjoy free delivery on all orders this weekend!',
        timestamp: '2024-09-16T12:30:00Z',
        status: 'unread',
      },
      {
        id: 'CP-SPECIALOFFER',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Special offer: 20% off all items until midnight!',
        timestamp: '2024-09-15T14:00:00Z',
        status: 'read',
      },
      {
        id: 'CP-BLACKFRIDAY',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Black Friday deals are coming! Stay tuned.',
        timestamp: '2024-09-14T09:15:00Z',
        status: 'unread',
      },
      {
        id: 'CP-CHRISTMASSALE',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Get ready for our Christmas sale! Discounts up to 50%.',
        timestamp: '2024-09-13T11:00:00Z',
        status: 'read',
      },
      {
        id: 'CP-SUMMERDEAL',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Summer deals are here! Check them out now.',
        timestamp: '2024-09-12T10:45:00Z',
        status: 'unread',
      },
      {
        id: 'CP-CLEARANCE',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Clearance sale: up to 70% off on select items!',
        timestamp: '2024-09-11T14:30:00Z',
        status: 'read',
      },
      {
        id: 'CP-EXTRAPOINTS',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Earn extra points for every purchase this week!',
        timestamp: '2024-09-10T12:15:00Z',
        status: 'unread',
      },
      {
        id: 'CP-BOGO2',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Buy two, get one free on all accessories!',
        timestamp: '2024-09-09T09:00:00Z',
        status: 'read',
      },
      {
        id: 'CP-NEWYEARSALE',
        sender: {
          name: 'Marketing Team',
          avatar: 'https://example.com/avatar/marketing.jpg',
          userId: '202',
        },
        content: 'Celebrate the New Year with our special sale!',
        timestamp: '2024-09-08T14:45:00Z',
        status: 'unread',
      },
    ],
    orders: [
      {
        id: 'ORD-12345',
        sender: {
          name: 'Order Notifications',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12345 has been shipped!',
        timestamp: '2024-09-21T08:30:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12346',
        sender: {
          name: 'Order Notifications',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12346 is out for delivery.',
        timestamp: '2024-09-21T08:30:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12347',
        sender: {
          name: 'Order Notifications',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12347 has been delivered!',
        timestamp: '2024-09-20T09:15:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12348',
        sender: {
          name: 'Order Notifications',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12348 is being processed.',
        timestamp: '2024-09-19T13:45:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12349',
        sender: {
          name: 'Order Notifications',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12349 is ready for pickup.',
        timestamp: '2024-09-18T11:30:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12350',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12350 has been returned.',
        timestamp: '2024-09-17T10:30:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12351',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12351 has been refunded.',
        timestamp: '2024-09-16T12:15:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12352',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12352 is ready for pickup!',
        timestamp: '2024-09-15T09:00:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12353',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12353 has been updated.',
        timestamp: '2024-09-14T14:30:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12354',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12354 has been processed.',
        timestamp: '2024-09-13T10:15:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12355',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12355 is being delivered.',
        timestamp: '2024-09-12T11:00:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12356',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12356 is out for delivery.',
        timestamp: '2024-09-11T14:45:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12357',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12357 has been confirmed!',
        timestamp: '2024-09-10T12:30:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12358',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12358 has been shipped!',
        timestamp: '2024-09-09T08:15:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12359',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12359 has been delivered!',
        timestamp: '2024-09-08T10:00:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12360',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12360 has been cancelled.',
        timestamp: '2024-09-07T11:45:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12361',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12361 is being processed.',
        timestamp: '2024-09-06T12:15:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12362',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12362 has been returned.',
        timestamp: '2024-09-05T10:30:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12363',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12363 has been refunded.',
        timestamp: '2024-09-04T14:45:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12364',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12364 is ready for pickup!',
        timestamp: '2024-09-03T09:00:00Z',
        status: 'unread',
      },
      {
        id: 'ORD-12365',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12365 has been updated.',
        timestamp: '2024-09-02T11:30:00Z',
        status: 'read',
      },
      {
        id: 'ORD-12366',
        sender: {
          name: 'Order System',
          avatar: 'https://example.com/avatar/order.jpg',
          userId: '203',
        },
        content: 'Your order #12366 has been processed.',
        timestamp: '2024-09-01T10:15:00Z',
        status: 'unread',
      },
    ],
    reminders: [
      {
        id: 'RM-APPT1',
        sender: {
          name: 'Reminder Service',
          avatar: 'https://example.com/avatar/reminder.jpg',
          userId: '204',
        },
        content: "Don't forget your appointment tomorrow at 3 PM.",
        timestamp: '2024-09-22T09:00:00Z',
        status: 'read',
      },
      {
        id: 'RM-REPORT1',
        sender: {
          name: 'Reminder Service',
          avatar: 'https://example.com/avatar/reminder.jpg',
          userId: '204',
        },
        content: "It's time to review your monthly reports.",
        timestamp: '2024-09-22T11:00:00Z',
        status: 'unread',
      },
      {
        id: 'RM-FEEDBACK1',
        sender: {
          name: 'Reminder Service',
          avatar: 'https://example.com/avatar/reminder.jpg',
          userId: '204',
        },
        content: 'Please submit your feedback by the end of the day.',
        timestamp: '2024-09-21T15:00:00Z',
        status: 'read',
      },
      {
        id: 'RM-PAYMENT1',
        sender: {
          name: 'Reminder Service',
          avatar: 'https://example.com/avatar/reminder.jpg',
          userId: '204',
        },
        content: 'Reminder: Your payment is due on Friday.',
        timestamp: '2024-09-20T10:00:00Z',
        status: 'unread',
      },
      {
        id: 'RM-UPDATE1',
        sender: {
          name: 'Reminder Service',
          avatar: 'https://example.com/avatar/reminder.jpg',
          userId: '204',
        },
        content: 'Your application update is scheduled for Monday.',
        timestamp: '2024-09-19T09:30:00Z',
        status: 'read',
      },
    ],
    known_senders: [
      {
        id: 'K-004',
        sender: {
          name: 'Diana Prince',
          avatar: 'https://example.com/avatar/diana.jpg',
          userId: '204',
        },
        content: 'Can you send me the project details?',
        timestamp: '2024-09-20T11:15:00Z',
        status: 'unread',
      },
      {
        id: 'K-006',
        sender: {
          name: 'Fiona Gallagher',
          avatar: 'https://example.com/avatar/fiona.jpg',
          userId: '204',
        },
        content: "Don't forget about our meeting tomorrow.",
        timestamp: '2024-09-18T14:30:00Z',
        status: 'unread',
      },
      {
        id: 'K-008',
        sender: {
          name: 'Hannah Baker',
          avatar: 'https://example.com/avatar/hannah.jpg',
          userId: '204',
        },
        content: 'Did you receive my last message?',
        timestamp: '2024-09-16T16:00:00Z',
        status: 'unread',
      },
      {
        id: 'K-010',
        sender: {
          name: 'Julia Roberts',
          avatar: 'https://example.com/avatar/julia.jpg',
          userId: '204',
        },
        content: 'Thanks for your help with the project.',
        timestamp: '2024-09-14T19:00:00Z',
        status: 'unread',
      },
      {
        id: 'K-012',
        sender: {
          name: 'Laura Croft',
          avatar: 'https://example.com/avatar/laura.jpg',
          userId: '204',
        },
        content: 'Can we reschedule our meeting?',
        timestamp: '2024-09-12T09:00:00Z',
        status: 'unread',
      },
      {
        id: 'K-014',
        sender: {
          name: 'Nina Williams',
          avatar: 'https://example.com/avatar/nina.jpg',
          userId: '204',
        },
        content: "Let's discuss your ideas tomorrow.",
        timestamp: '2024-09-10T13:15:00Z',
        status: 'unread',
      },
      {
        id: 'K-016',
        sender: {
          name: 'Paula Patton',
          avatar: 'https://example.com/avatar/paula.jpg',
          userId: '204',
        },
        content: 'Can you review the attached document?',
        timestamp: '2024-09-08T15:45:00Z',
        status: 'unread',
      },
      {
        id: 'K-018',
        sender: {
          name: 'Rachel Green',
          avatar: 'https://example.com/avatar/rachel.jpg',
          userId: '204',
        },
        content: 'Excited for the weekend getaway!',
        timestamp: '2024-09-06T10:30:00Z',
        status: 'unread',
      },
      {
        id: 'K-020',
        sender: {
          name: 'Tony Stark',
          avatar: 'https://example.com/avatar/tony.jpg',
          userId: '204',
        },
        content: 'Can you send me the latest updates?',
        timestamp: '2024-09-04T17:00:00Z',
        status: 'unread',
      },
    ],
    unknown_senders: [
      {
        id: 'K-001',
        sender: {
          name: 'Alice Johnson',
          avatar: 'https://example.com/avatar/alice.jpg',
          userId: '204',
        },
        content: 'Hey! Long time no see.',
        timestamp: '2024-09-23T09:00:00Z',
        status: 'read',
      },
      {
        id: 'K-002',
        sender: {
          name: 'Bob Smith',
          avatar: 'https://example.com/avatar/bob.jpg',
          userId: '204',
        },
        content: 'Are we still on for dinner?',
        timestamp: '2024-09-22T18:30:00Z',
        status: 'unread',
      },
      {
        id: 'K-003',
        sender: {
          name: 'Charlie Brown',
          avatar: 'https://example.com/avatar/charlie.jpg',
          userId: '204',
        },
        content: 'I finished the report, just need your feedback.',
        timestamp: '2024-09-21T16:00:00Z',
        status: 'read',
      },
      {
        id: 'K-005',
        sender: {
          name: 'Ethan Hunt',
          avatar: 'https://example.com/avatar/ethan.jpg',
          userId: '204',
        },
        content: 'Let’s catch up soon!',
        timestamp: '2024-09-19T09:00:00Z',
        status: 'read',
      },
      {
        id: 'K-007',
        sender: {
          name: 'George Martin',
          avatar: 'https://example.com/avatar/george.jpg',
          userId: '204',
        },
        content: 'I sent you an email regarding the project.',
        timestamp: '2024-09-17T12:45:00Z',
        status: 'read',
      },
      {
        id: 'K-009',
        sender: {
          name: 'Ian Malcolm',
          avatar: 'https://example.com/avatar/ian.jpg',
          userId: '204',
        },
        content: 'Looking forward to our meeting next week.',
        timestamp: '2024-09-15T08:30:00Z',
        status: 'read',
      },
      {
        id: 'K-011',
        sender: {
          name: 'Kevin Spacey',
          avatar: 'https://example.com/avatar/kevin.jpg',
          userId: '204',
        },
        content: 'I have the documents you requested.',
        timestamp: '2024-09-13T10:15:00Z',
        status: 'read',
      },
      {
        id: 'K-013',
        sender: {
          name: 'Mike Wazowski',
          avatar: 'https://example.com/avatar/mike.jpg',
          userId: '204',
        },
        content: 'Remember to bring the presentation.',
        timestamp: '2024-09-11T14:30:00Z',
        status: 'read',
      },
      {
        id: 'K-015',
        sender: {
          name: 'Oscar Isaac',
          avatar: 'https://example.com/avatar/oscar.jpg',
          userId: '204',
        },
        content: 'Great work on the presentation!',
        timestamp: '2024-09-09T11:00:00Z',
        status: 'read',
      },
      {
        id: 'K-017',
        sender: {
          name: 'Quentin Tarantino',
          avatar: 'https://example.com/avatar/quentin.jpg',
          userId: '204',
        },
        content: 'When is our next brainstorming session?',
        timestamp: '2024-09-07T14:00:00Z',
        status: 'read',
      },
      {
        id: 'K-019',
        sender: {
          name: 'Sam Winchester',
          avatar: 'https://example.com/avatar/sam.jpg',
          userId: '204',
        },
        content: "Let's catch up over coffee soon.",
        timestamp: '2024-09-05T14:15:00Z',
        status: 'read',
      }
    ],
  },
};

export default data;
