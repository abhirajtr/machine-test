interface IProtectedRoutesProps {
  redirectPath: string;
  component: JSX.Element;
}

const ProtectedRoute = ({
  component
}: //   _redirectPath
IProtectedRoutesProps) => {
  return component;
};

export default ProtectedRoute;
