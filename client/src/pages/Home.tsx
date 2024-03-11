import { Typography } from "@mui/material";
import useStateContext from "../state/context/state/use-state-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return <Typography>Home</Typography>;
};

export default Home;
