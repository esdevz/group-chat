import {
  Button,
  makeStyles,
  ButtonProps,
  CircularProgress,
} from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "0.85rem",
    fontWeight: 400,
    fontFamily: "Raleway, Roboto",
  },
  outlined: {
    color: "#68adef",
    borderColor: "transparent",
    margin: "0 5px 0 5px",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

interface StyledButtonProps extends ButtonProps {
  spinner?: boolean;
}

const StyledButton: FC<StyledButtonProps> = ({
  children,
  spinner,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      {...props}
      classes={{ outlinedPrimary: classes.outlined, root: classes.root }}
    >
      {spinner ? <CircularProgress color="inherit" size="1rem" /> : children}
    </Button>
  );
};

export default StyledButton;
