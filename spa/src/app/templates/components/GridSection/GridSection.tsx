import React from "react";
import { EditableArea, EditableComponent } from "@magnolia/react-editor";
import { MgnlContent } from "@magnolia/frontend-helpers-base";
import IGridSectionProps from "./GridSection.model";

const GridSection: React.FC<IGridSectionProps> = ({
  container,
  item1,
  item2,
  item3,
  item4,
  item5,
}) => {
  const getComponents = (content: MgnlContent | undefined) => {
    return content?.["@nodes"]?.map((nodeName) => content[nodeName]) || [];
  };

  const isColumns = container.field === "columns";
  const count = Number(container.count);
  const items = [item1, item2, item3, item4, item5];
  const columnBreakpoint = count >= 4 ? "lg:flex-row" : "md:flex-row";

  return (
    <div className="p-2">
      <div
        className={`flex ${isColumns ? `flex-col ${columnBreakpoint}` : "flex-col"} gap-4`}
      >
        {Array.from({ length: count }).map((_, index) => {
          const currentItem = items[index];
          return (
            <div
              key={`${isColumns ? "column" : "row"}-${index}`}
              className={`${isColumns ? "flex-1 " : ""}items-center justify-center`}
            >
              {currentItem && (
                <EditableArea content={currentItem}>
                  {getComponents(currentItem).map((component) => (
                    <EditableComponent
                      key={(component as MgnlContent)["@name"] as string}
                      content={component as MgnlContent}
                    />
                  ))}
                </EditableArea>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridSection;
