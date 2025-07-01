# Password Generator

A modern, responsive password generator built with React and styled with Tailwind CSS. Generate secure passwords with customizable length and character types.

## Features

- **Customizable Length**: Generate passwords between 6-16 characters
- **Character Options**: 
  - Uppercase and lowercase letters (always included)
  - Numbers (optional)
  - Special characters (optional)
- **One-Click Copy**: Copy generated password to clipboard
- **Real-time Generation**: Password updates automatically when settings change
- **Responsive Design**: Works on desktop and mobile devices

![image](https://github.com/user-attachments/assets/ecebdf82-03ca-4c71-9255-c4dd3d46bd94)


## Installation

1. Clone the repository:
```bash
git clone https://github.com/kalash260203/password-generator.git
```

2. Navigate to the project directory:
```bash
cd password-generator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Set Password Length**: Use the slider to choose password length (6-16 characters)
2. **Choose Character Types**: 
   - Check "Numbers" to include digits (0-9)
   - Check "Special Characters" to include symbols (!@#$%^&*()_+[]{}|;:,.<>?)
3. **Generate**: Password generates automatically when you change settings
4. **Copy**: Click the "Copy" button to copy the password to your clipboard

## Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **JavaScript ES6+** - Modern JavaScript features
- **HTML5** - Markup
- **CSS3** - Additional styling

## React Hooks Used

- `useState` - Managing component state
- `useCallback` - Optimizing function re-renders
- `useEffect` - Side effects and lifecycle management
- `useRef` - DOM element references

## Project Structure

```
password-generator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.jsx        # Main component
│   ├── App.css        # Component styles
│   ├── index.js       # Entry point
│   └── ...
├── package.json
└── README.md
```

## Key Components

### Password Generator Logic
```javascript
const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    
    for (let i = 1; i <= length; i++) {
        const char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    setPassword(pass);
}, [length, numberAllowed, charAllowed]);
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes the single build dependency

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security Notes

- Passwords are generated client-side using `Math.random()`
- For cryptographically secure passwords, consider using `crypto.getRandomValues()`
- Generated passwords are not stored or transmitted anywhere

## Future Enhancements

- [ ] Add password strength indicator
- [ ] Include more character sets (accented characters, emojis)
- [ ] Add password history
- [ ] Export passwords to file
- [ ] Dark mode toggle
- [ ] Password strength meter

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Author

**Kalash**
- GitHub: [@kalash260203](https://github.com/kalash260203)

## Acknowledgments

- Built with Create React App 
- Styled with Tailwind CSS
- Icons and inspiration from various sources
