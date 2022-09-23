import React, { useState, useRef } from "react";
import Button from "Components/Atom/Button/Button";
import { DotsIcon } from "Components/Atom/SvgIcons";
import useOnClickOutside from "Utils/hooks/useOnClickOutside";

import "./style.css";

interface TableActionProps {
  handleComplete?: () => void;
  handleEdit?: () => void;
  handleDelete?: () => void;
}
const TableAction: React.FC<TableActionProps> = (props) => {
  // Ref
  const menuRef = useRef<any>();

  // State
  const [show, setShow] = useState<boolean>(false);

  // Props
  const { handleComplete, handleEdit, handleDelete } = props;

  //    Hooks
  useOnClickOutside(menuRef, () => setShow(false));

  //   Data to render
  return (
    <div className="ta-wrapper">
      <Button onClick={() => setShow(!show)}>
        <DotsIcon />
      </Button>
      {show && (
        <div ref={menuRef} className="ta-actions animate-slide-right">
          <>
            <Button
              onClick={async () => {
                handleComplete!();
                setShow(false);
              }}
            >
              Complete
            </Button>
            <Button
              onClick={async () => {
                handleEdit!();
                setShow(false);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={async () => {
                handleDelete!();
                setShow(false);
              }}
            >
              Delete
            </Button>
          </>
        </div>
      )}
    </div>
  );
};

export default TableAction;
