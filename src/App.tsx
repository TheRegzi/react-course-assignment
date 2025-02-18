import './App.css';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
