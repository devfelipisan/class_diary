import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function NestedLayout(props: Props) {
  return (
    <React.Fragment>
      <p>Layout filho</p>
      {props.children}
    </React.Fragment>
  );
}
