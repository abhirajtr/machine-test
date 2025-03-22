import React, { Suspense } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
type ReturnType<T> = (props: T) => JSX.Element;

export const withLoading = <T extends object>(
  Component: React.ComponentType<T>
): ReturnType<T> => {
  return (props: T) => (
    <Suspense
      fallback={
        <Spin {...props} indicator={<LoadingOutlined spin />} size="large" />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
