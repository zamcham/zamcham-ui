# Zamcham UI

Zamcham UI is a modern, customizable React component library designed to streamline your web development process. Built with Tailwind CSS, it offers a collection of flexible and reusable components that can be easily integrated into your Next.js projects.

## Features

- 🎨 Customizable components
- 🚀 Built with React and Tailwind CSS
- 📱 Responsive design
- 🌗 Dark mode support (coming soon)
- ♿ Accessibility-focused

## Installation

```bash
npm install zamcham-ui
```

## Usage

```jsx
import { Toggle } from 'zamcham-ui';

function App() {
  return (
    <Toggle 
      onToggle={(isOn) => console.log(isOn)} 
      color="bg-blue-500" 
      size="md" 
    />
  );
}
```

## Components

### Toggle

A customizable toggle switch component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onToggle | function | - | Callback function that is called when the toggle state changes. Receives the new state (boolean) as an argument. |
| color | string | - | Tailwind CSS color class for the toggle button. If not provided, defaults to indigo-500 when on and gray-400 when off. |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' | 'sm' | Size of the toggle button. |

#### Sizes

- `sm`: 55px x 25px
- `md`: 80px x 35px
- `lg`: 90px x 38px
- `xl`: 100px x 40px

### More components coming soon!

We're actively working on expanding our component library. Stay tuned for:

- Buttons
- Input fields
- Modals
- Dropdowns
- And much more!

## Customization

Zamcham UI is built with Tailwind CSS, allowing for easy customization. You can override default styles by providing your own Tailwind classes or by extending the Tailwind configuration in your project.

## Development

To start developing the library:

1. Clone the repository
   ```
   git clone https://github.com/yourusername/zamcham-ui.git
   ```
2. Install dependencies
   ```
   cd zamcham-ui
   npm install
   ```
3. Start the development environment
   ```
   npm run dev
   ```

## Contributing

We welcome contributions to Zamcham UI! Please see our [Contributing Guide](CONTRIBUTING.md) for more details on how to get started.

## License

Zamcham UI is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/yourusername/zamcham-ui/issues).

## Acknowledgements

Zamcham UI is built with and inspired by:

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)

Thank you to all the contributors who have helped make this project possible!