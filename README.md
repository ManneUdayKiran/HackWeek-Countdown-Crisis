# Hackweek Countdown Crisis

A Next.js application that displays information about COSC (CBIT Open Source Community) and features a live countdown timer showing the remaining time until Hackweek ends.

## 🚀 Live Demo

**Production URL**: https://countdown-crisis-clhq628qa-uday-kirans-projects-a417c70c.vercel.app

## Screenshots
![image](https://github.com/user-attachments/assets/90a0002e-6ee4-4ba1-a381-e74b9ee63516)


## 🐛 Issues Fixed

### 1. Critical Null Reference Error in CommunityInfo Component

**Problem**: The `CommunityInfo.js` component was attempting to access properties of a `null` object before the asynchronous data fetch from `cosc.json` completed, causing a runtime error:
```
TypeError: Cannot read properties of null (reading 'name')
```

**Root Cause**: The component initialized `data` as `null` and immediately tried to render `data.name`, `data.description`, etc., before the fetch operation completed.

**Solution Implemented**:
- Added proper loading state management with `useState` hooks
- Implemented try-catch error handling for the fetch operation
- Added conditional rendering to prevent accessing properties on null data
- Added loading and error UI states

**Code Changes**:
```javascript
// Before (problematic)
const [data, setData] = useState(null);
// ... fetch logic ...
return (
  <div>
    <h1>{data.name}</h1> // ❌ Error: data is null
  </div>
);

// After (fixed)
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// ... fetch logic with error handling ...

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
if (!data) return null;

return (
  <div>
    <h1>{data.name}</h1> // ✅ Safe: data is guaranteed to exist
  </div>
);
```

### 2. Hydration Mismatch Error

**Problem**: The `page.js` file contained server/client conditional logic that caused a hydration error:
```
Hydration failed because the server rendered HTML didn't match the client
```

**Root Cause**: Using `typeof window !== 'undefined'` for conditional styling created different HTML on server vs client.

**Solution Implemented**:
- Removed the server/client conditional logic
- Used consistent styling for both server and client rendering

**Code Changes**:
```javascript
// Before (problematic)
<main style={{ 
  backgroundColor: typeof window !== 'undefined' ? '#f0f0f0' : '#f0f0f1', 
  padding: '20px', 
  borderRadius: '10px'
}}>

// After (fixed)
<main style={{ 
  backgroundColor: '#f0f0f0', 
  padding: '20px', 
  borderRadius: '10px'
}}>
```

## 🛠️ Technologies Used

- **Next.js 15.3.4** - React framework
- **React 19.0.0** - UI library
- **Tailwind CSS 4** - Styling
- **Vercel** - Deployment platform

## 📁 Project Structure

```
countdown-Crisis/
├── public/
│   └── cosc.json          # Community data
├── src/
│   └── app/
│       ├── components/
│       │   ├── CommunityInfo.js  # Community information display
│       │   └── Countdown.js      # Countdown timer
│       ├── layout.js             # Root layout
│       ├── page.js               # Main page
│       └── globals.css           # Global styles
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ManneUdayKiran/HackWeek-Countdown-Crisis.git
   cd HackWeek-Countdown-Crisis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Features

### Community Information Display
- Fetches and displays community data from `public/cosc.json`
- Shows community name, description, date, location, and website link
- Handles loading and error states gracefully

### Live Countdown Timer
- Real-time countdown to Hackweek end date (June 29, 2025)
- Updates every second
- Displays days, hours, minutes, and seconds remaining
- Responsive design with gradient background

## 🔧 Configuration

### Community Data
Edit `public/cosc.json` to update community information:
```json
{
  "name": "COSC",
  "description": "CBIT Open Source Community is a tech-based community...",
  "date": "2025-06-27",
  "location": "CBIT, Hyderabad",
  "url": "https://cbitosc.github.io"
}
```

### Countdown Date
Update the end date in `src/app/components/Countdown.js`:
```javascript
const hackweekEnd = new Date('2025-06-29T23:59:59');
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Testing

### Build Test
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Development Testing
```bash
npm run dev
```

## 📝 Development Notes

### Key Learnings
- Always handle loading states in React components that fetch data
- Avoid server/client conditional logic in Next.js to prevent hydration errors
- Use proper error boundaries and loading states for better UX
- Test both development and production builds

### Best Practices Implemented
- Proper error handling for async operations
- Loading states for better user experience
- Consistent styling between server and client
- Clean component structure with separation of concerns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Uday Kiran**
- GitHub: [@ManneUdayKiran](https://github.com/ManneUdayKiran)

## 🙏 Acknowledgments

- CBIT Open Source Community (COSC)
- Next.js team for the amazing framework
- Vercel for seamless deployment
