import { iconList } from "./icons";
import { Tooltip } from "antd";
import "./style.scss";
import classNames from "classnames";
export type IconName = keyof typeof iconList;
export type IconProps = {
  name: IconName;
  width?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isHoverable?: boolean;
  toolTip?: string;
  className?: string;
  size?:
    | "extra-small" /*12px */
    | "small" /*16px */
    | "medium" /*20px */
    | "large" /*25px */
    | "extra-large" /*30px */;
  color?: string;
  disabled?: boolean;
};

const Icon = ({
  name,
  width,
  isHoverable,
  toolTip,
  className,
  size,
  color,
  disabled,
  ...props
}: IconProps) => {
  const IconName = iconList[name];

  const classes = classNames(`icon-${size ?? "small"}`, className, {
    "cursor-pointer": isHoverable && !disabled,
    "cursor-default": !isHoverable && !disabled,
    "cursor-not-allowed": disabled
  });
  ``;
  return (
    <Tooltip title={toolTip}>
      <IconName {...props} style={{ color }} className={classes} />
    </Tooltip>
  );
};

export default Icon;
