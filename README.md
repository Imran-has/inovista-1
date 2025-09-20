# Vision UI Dashboard - React

A modern, responsive dashboard application built with Next.js, Material-UI, and TypeScript. This project recreates the Vision UI Dashboard design with a beautiful dark theme and comprehensive functionality.

## ✨ Features

- **Modern Authentication**: Sign In/Sign Up screens with smooth transitions
- **Responsive Dashboard**: Beautiful charts and statistics with Recharts
- **Data Tables**: User management with search, filter, and CRUD operations
- **Billing System**: Payment methods, transaction history, and subscription management
- **User Profile**: Editable profile with settings and activity tracking
- **Dark Theme**: Elegant dark theme with blue/purple accents
- **Animations**: Smooth animations using Framer Motion
- **Mobile Responsive**: Works perfectly on all device sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vision-ui-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
app/
├── components/          # React components
│   ├── Dashboard.tsx   # Main dashboard layout
│   ├── DashboardHome.tsx # Dashboard overview with charts
│   ├── Tables.tsx      # Data tables component
│   ├── Billing.tsx     # Billing and payments
│   ├── Profile.tsx     # User profile management
│   ├── SignIn.tsx      # Authentication sign in
│   └── SignUp.tsx      # Authentication sign up
├── layout.tsx          # Root layout with theme provider
├── page.tsx            # Main page component
└── globals.css         # Global styles and animations
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #4318FF (Deep Blue)
- **Secondary**: #6B46C1 (Purple)
- **Background**: #111C44 (Dark Blue)
- **Surface**: #1A2332 (Dark Gray)

### Components
- **Cards**: Glassmorphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Charts**: Interactive charts with custom tooltips
- **Tables**: Sortable tables with action buttons
- **Forms**: Material-UI form components with validation

### Animations
- **Page Transitions**: Smooth fade and slide animations
- **Hover Effects**: Interactive hover states
- **Loading States**: Progressive loading animations
- **Floating Elements**: Subtle floating animations

## 📱 Screens

### 1. Authentication
- **Sign In**: Email/password with remember me option
- **Sign Up**: Name, email, and password registration
- **Form Validation**: Client-side validation
- **Smooth Transitions**: Between sign in and sign up

### 2. Dashboard
- **Statistics Cards**: Key metrics with trend indicators
- **Charts**: Line, area, bar, and pie charts
- **Real-time Data**: Sample data for demonstration
- **Responsive Layout**: Adapts to different screen sizes

### 3. Tables
- **User Management**: CRUD operations for users
- **Search & Filter**: Advanced filtering capabilities
- **Action Buttons**: View, edit, and delete actions
- **Statistics**: Summary cards with counts

### 4. Billing
- **Payment Methods**: Credit cards, bank accounts, PayPal
- **Transaction History**: Detailed transaction logs
- **Current Plan**: Subscription information
- **Financial Overview**: Balance and spending analytics

### 5. Profile
- **Personal Information**: Editable user details
- **Skills & Expertise**: Tag-based skill system
- **Notifications**: Configurable notification preferences
- **Activity Log**: Recent account activities

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 14 with App Router
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Emotion (CSS-in-JS)
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Material-UI Icons
- **TypeScript**: Full type safety
- **Responsive Design**: Mobile-first approach

## 📦 Dependencies

### Core Dependencies
- `next`: 14.0.4
- `react`: ^18
- `@mui/material`: ^5.15.0
- `@mui/icons-material`: ^5.15.0
- `recharts`: ^2.8.0
- `framer-motion`: ^10.16.16

### Development Dependencies
- `typescript`: ^5
- `eslint`: ^8
- `@types/react`: ^18

## 🎯 Key Features

### Authentication System
- Secure sign in/sign up flow
- Form validation and error handling
- Remember me functionality
- Smooth view transitions

### Dashboard Analytics
- Real-time statistics cards
- Interactive charts and graphs
- Responsive data visualization
- Performance metrics

### Data Management
- User CRUD operations
- Advanced search and filtering
- Export functionality
- Bulk actions support

### Payment Integration
- Multiple payment methods
- Transaction tracking
- Subscription management
- Financial reporting

### User Experience
- Intuitive navigation
- Smooth animations
- Responsive design
- Accessibility features

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Create a `.env.local` file for environment-specific configurations:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_NAME=Vision UI Dashboard
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Vision UI Dashboard
- Material-UI for the component library
- Recharts for beautiful data visualization
- Framer Motion for smooth animations

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js and Material-UI**
