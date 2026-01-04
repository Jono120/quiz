# Work Team Quiz App

A modern, interactive 10-question quiz application built with React and Vite.

## Features

- :notebook: 10 questions
- :dart: Multiple choice format with intuitive interface
- :bar_chart: Instant scoring with performance feedback
- :mag_right: Detailed answer review showing correct and incorrect responses
- :computer::iphone: Fully responsive design for desktop and mobile
- :star: Smooth animations and transitions
- :space_invader: Modern, clean UI with professional styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd quiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
quiz/
├── src/
│   ├── components/
│   │   ├── Quiz.jsx          # Main quiz container
│   │   ├── Question.jsx      # Individual question display
│   │   └── Results.jsx       # Results and review screen
│   ├── data/
│   │   └── questions.js      # Quiz questions data
│   ├── App.jsx               # Root component
│   ├── App.css               # Main styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## Customization

### Adding Your Own Questions

Edit `src/data/questions.js` to customize the quiz questions:

```javascript
{
  id: 1,
  question: "Your question here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctAnswer: 0 // Index of correct option (0-3)
}
```

### Styling

- Modify `src/App.css` for component-specific styles
- Edit CSS variables in `:root` to change the color scheme
- Adjust responsive breakpoints in the media queries

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and animations
- **ESLint** - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Fast refresh with Vite HMR
- Optimised bundle size
- Smooth animations with CSS transitions
- Lazy loading ready

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Built with modern web technologies for an engaging team learning experience.

---

Made with ❤️ for work teams everywhere
