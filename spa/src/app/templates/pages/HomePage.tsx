import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import { MgnlContent } from "@magnolia/frontend-helpers-base";

interface IHomePage {
  metadata?: Record<string, unknown>;
  main?: MgnlContent;
  extras?: MgnlContent;
  title?: string;
}

const HomePage = (props: IHomePage) => {
  const { main, extras, title } = props;

  return (
    <div className="HomePage">
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

export default HomePage;
