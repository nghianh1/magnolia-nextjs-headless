import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import IDemoProps from "./Demo.model";

const Demo = (props: IDemoProps) => {
  const { main, extras, title } = props;

  return (
    <div className="Demo">
      <div>[Basic Page]</div>
      <h1>{title || (props.metadata?.["@name"] as string)}</h1>

      <main>
        <div>[Main Area]</div>
        {main && <EditableArea className="Area" content={main} />}
      </main>

      <div>
        <div>[Secondary Area]</div>
        {extras && <EditableArea className="Area" content={extras} />}
      </div>
    </div>
  );
};

export default Demo;
