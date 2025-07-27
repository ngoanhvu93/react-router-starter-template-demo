import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { BottomAppBar } from "~/components/BottomAppBar";
import { TopAppBar } from "~/components/TopAppBar";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

const Test = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <TopAppBar title="Test" />
      <List>
        {Array.from({ length: 100 }).map((_, index) => (
          <ListItem key={index}>
            <ListItemText primary={index} />
          </ListItem>
        ))}
      </List>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <BottomAppBar />
    </>
  );
};

export default Test;
