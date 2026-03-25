project - root /
│
├── backend /
│   ├── prisma /
│   │   ├── schema.prisma          # Prisma schema file
│   │   └── seed.js                # Optional: seed database
│   │
│   ├── src /
│   │   ├── controllers /           # Business logic for routes
│   │   │   └── jobController.js
│   │   │
│   │   ├── routes /                # Express routes
│   │   │   └── jobRoutes.js
│   │   │
│   │   ├── services /              # DB calls & Prisma logic
│   │   │   └── jobService.js
│   │   │
│   │   ├── middlewares /           # Auth, error handling, validation
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   │
│   │   ├── utils /                 # Helpers / utilities
│   │   │   └── logger.js
│   │   │
│   │   ├── app.js                 # Express app setup
│   │   └── server.js              # Server start
│   │
│   └── package.json
│
├── frontend /
│   ├── src /
│   │   ├── components /            # Reusable UI components
│   │   │   └── JobCard.jsx
│   │   │
│   │   ├── pages /                 # React Router pages
│   │   │   ├── Jobs.jsx
│   │   │   ├── JobPage.jsx
│   │   │   └── EditJob.jsx
│   │   │
│   │   ├── loaders /               # React Router loaders
│   │   │   ├── jobsLoader.js
│   │   │   └── jobLoader.js
│   │   │
│   │   ├── actions /               # React Router actions(create / update / delete)
│   │   │   └── jobActions.js
│   │   │
│   │   ├── routes /                # App routes with Router setup
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── hooks /                 # Custom React hooks
│   │   │   └── useJobs.js
│   │   │
│   │   ├── utils /                 # Frontend helpers(e.g., fetch wrappers)
│   │   │   └── api.js
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── .env                            # Database connection, API keys
├── package.json                    # Optional root workspace package.json
└── README.md