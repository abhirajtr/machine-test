import { Typography } from "antd";
import type { GetProps } from "antd";
import { PropsWithChildren } from "react";

type TitleType = GetProps<typeof Typography.Title>;
type TextType = GetProps<typeof Typography.Text>;
type ParagraphType = GetProps<typeof Typography.Paragraph>;

const Title = ({ children, ...props }: TitleType & PropsWithChildren) => {
  return <Typography.Title {...props}>{children}</Typography.Title>;
};
const Text = ({ children, ...props }: TextType & PropsWithChildren) => {
  return <Typography.Text {...props}>{children}</Typography.Text>;
};
const Paragraph = ({
  children,
  ...props
}: ParagraphType & PropsWithChildren) => {
  return <Typography.Paragraph {...props}>{children}</Typography.Paragraph>;
};

export { Title, Text, Paragraph };
