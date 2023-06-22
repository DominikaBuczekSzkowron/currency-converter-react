import Form from "./Form/form.js";
import { Container } from "./styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "black",
    secondaryColor: "hsl(240, 67%, 75%)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
