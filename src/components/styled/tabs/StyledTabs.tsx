import { makeStyles, Tabs, TabsProps } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  tabs: {
    paddingTop: 5,
    backgroundColor: theme.palette.bg.dark,
  },
  indicator: {
    backgroundColor: theme.palette.primary.light,
    padding: "0 2px",
  },
}));

interface STProps extends TabsProps {
  topMargin?: string;
  onTabChange: (_: any, newTab: number) => void;
}

const StyledTabs: FC<STProps> = ({ children, onTabChange, ...props }) => {
  const classes = useStyles({ topMargin: props.topMargin });
  return (
    <Tabs
      className={classes.tabs}
      classes={{ indicator: classes.indicator }}
      {...props}
      onChange={onTabChange}
    >
      {children}
    </Tabs>
  );
};

export default StyledTabs;
