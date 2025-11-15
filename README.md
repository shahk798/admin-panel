# Admin Panel - Clinic Management System

## Overview
This is the Admin Panel for the Clinic Management System built by Lumonex Agency. It provides a centralized dashboard for administrators to manage clinics, patients, and view analytics.

## Features
- 🔐 Secure admin authentication
- 📊 View all clinics and their statistics
- 👥 Manage patients across all clinics
- 📈 Real-time analytics and revenue tracking
- 🏥 Clinic-specific detailed views

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: Vanilla JavaScript, HTML5, CSS3

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or remote connection)

### Setup
1. Clone the repository:
```bash
git clone https://github.com/shahk798/admin-panel.git
cd admin-panel
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/clinic_crm
PORT=5000
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Usage
- Navigate to `http://localhost:5000` to access the admin login
- Default admin password: `Lum005` (change this in production!)
- After login, you'll be redirected to the admin dashboard

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login

### Clinic Management
- `GET /api/admin/clinics` - Get all clinics
- `GET /api/admin/clinic/:clinicId` - Get specific clinic details

### Patient Management
- `GET /api/admin/all-patients` - Get all patients across all clinics

### Analytics
- `GET /api/admin/stats` - Get overall statistics

## Security Note
⚠️ **Important**: This implementation uses basic authentication for demonstration purposes. For production:
- Implement JWT-based authentication
- Use environment variables for sensitive data
- Add rate limiting
- Enable HTTPS
- Implement proper session management

## Project Structure
```
adminpanel/
├── frontend/           # Frontend HTML/CSS/JS files
├── models/            # Mongoose models
├── routes/            # API routes
├── server.js          # Main server file
├── package.json       # Project dependencies
└── .env              # Environment variables
```

## License
ISC

## Author
Lumonex Agency

---
For questions or support, please contact the development team.
