import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "japanese",
    code: "ja",
  },
  {
    name: "Urdu",
    code: "ur",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "Franch",
    code: "fr",
  },
];

function Home() {
  const navigate = useNavigate()
  const languageSelectHandler = (language: string): void => {
    navigate(`/learn?language=${language}`)
  }
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, begin your journey of learning
      </Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((i) => (
          <Button onClick={() => languageSelectHandler(i.code)} key={i.code} variant="contained">
            {i.name}
          </Button>
        ))}
      </Stack>
      <Typography textAlign={"center"}>
        Choose one language from above
      </Typography>
    </Container>
  );
}

export default Home;
