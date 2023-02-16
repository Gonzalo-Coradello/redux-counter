import "./App.css";
import {
  Card,
  Typography,
  Button,
  ButtonGroup,
  Container,
  Box,
} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "./features/counter/counterSlice";
import { RootState } from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: '#005522'
    }
  }
})

const App = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{height: '90vh'}}>
        <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Card sx={{padding: '8rem 4rem', display: 'grid', gap: '2rem'}}>
            <Typography variant="h3" color='primary'>Count: {count}</Typography>
            <ButtonGroup size="large" color='primary' sx={{marginInline: 'auto'}}>
              <Button onClick={() => dispatch(decrement())}>-</Button>
              <Button onClick={() => dispatch(increment())}>+</Button>
            </ButtonGroup>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
