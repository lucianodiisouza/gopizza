import { Text } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
};

const Label = ({ children, ...props }: ButtonProps) => {
  return <Text {...props}>{children}</Text>;
};

export default Label;
