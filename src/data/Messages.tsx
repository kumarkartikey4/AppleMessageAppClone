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

const data: { categories: Category } = {
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
  },
};

export default data;
