// импортируем объект из внешней библиотеки;
// позволяет использовать объект ReactDOM внутри файла index.js;
import ReactDOM from 'react-dom/client';
import './index.css';

// ипортируем компонент App
import App from './App';

const container = document.getElementById('root');

// создаем корень приложения для рендеринга
const root = ReactDOM.createRoot(container);

// отображаем компонент App внутри элемента с id root;
root.render(<App />);
