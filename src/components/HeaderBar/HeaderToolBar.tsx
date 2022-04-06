import React, { Component } from "react";
import {
  DragOutlined,
  FontSizeOutlined,
  LineOutlined,
  CheckOutlined,
  UndoOutlined,
  RedoOutlined,
  DeleteOutlined,
  SaveOutlined,
  BorderOutlined,
  ArrowsAltOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import "./HeaderToolBar.css";

type Props = {};

type State = {};

class HeaderToolBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="header">
        <div className="header-item" >
          <DragOutlined />
          <p className="header-text">Select</p>
        </div>
        <div>
          <FontSizeOutlined />
          <p className="header-text">Text</p>
        </div>
        <div>
          <LineOutlined />
          <ArrowsAltOutlined />
          <ArrowRightOutlined />
          <p className="header-text">Draw</p>
        </div>
        <div>
          <CheckOutlined />
          <p className="header-text">Stamp</p>
        </div>
        <div>
          <BorderOutlined />
          <p className="header-text">Format</p>
        </div>
        <div>
          <UndoOutlined />
          <p className="header-text">Undo</p>
        </div>
        <div>
          <RedoOutlined />
          <p className="header-text">Redo</p>
        </div>
        <div>
          <DeleteOutlined />
          <p className="header-text">Clear</p>
        </div>
        <div>
          <SaveOutlined />
          <p className="header-text">Save</p>
        </div>
      </div>
    );
  }
}

export default HeaderToolBar;
