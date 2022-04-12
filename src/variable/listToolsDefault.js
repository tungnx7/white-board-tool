import { Popover } from "antd";

const contentSaveType = (
  <div className="toolbar-icon-down-box">
    <h3 className="toolbar-icon-down-box-heading">Save Whiteboard as</h3>
    <div>
      <p className="toolbar-icon-down-box-item">PNG</p>
      <p
        className="toolbar-icon-down-box-item"
        onClick={() => {
          console.log("onClick SVG");
        }}
      >
        SVG
      </p>
    </div>
  </div>
);

const onDrawLength = () => {};

export const defaultListTools = [
  {
    id: "toolbar-btn-select",
    name: "select",
    active: true,
    render: (
      <div
        className="toolbar-item"
        onClick={() => {
          console.log("onClick select");
        }}
      >
        <i className="toolbar-icon fa-solid fa-arrows-up-down-left-right"></i>
        <span className="toolbar-text">Select</span>
      </div>
    ),
    content: null,
  },
  {
    id: "toolbar-btn-text",
    name: "text",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-text-height"></i>
        <span className="toolbar-text">Text</span>
      </div>
    ),
    content: (
      <div className="toolbar-content-text">
        <i className="toolbar-icon fa-solid fa-bold"></i>
        <i className="toolbar-icon fa-solid fa-italic"></i>
        <select className="toolbar-select">
          <option>12</option>
          <option>14</option>
          <option>18</option>
          <option>24</option>
          <option>36</option>
          <option>48</option>
          <option>72</option>
        </select>
      </div>
    ),
  },
  {
    id: "toolbar-btn-draw",
    name: "draw",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-pen"></i>
        <span className="toolbar-text">Draw</span>
      </div>
    ),
    content: (
      <div className="toolbar-content-draw">
        <i
          className="toolbar-icon toolbar-box-icon fa-solid fa-slash"
          id="length"
        ></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-pencil"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-right-long"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-arrows-left-right"></i>
        <i className="toolbar-icon toolbar-box-icon fa-regular fa-circle"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-circle"></i>
        <i className="toolbar-icon toolbar-box-icon fa-regular fa-square"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-square"></i>
      </div>
    ),
  },
  {
    id: "toolbar-btn-stamp",
    name: "stamp",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon toolbar-icon-draw  fa-solid fa-check"></i>
        <span className="toolbar-text">Stamp</span>
      </div>
    ),
    content: (
      <div className="toolbar-content-stamp">
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-check"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-right-long"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-x"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-star"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-heart"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-question"></i>
      </div>
    ),
  },
  {
    id: "toolbar-btn-spotlight",
    name: "spotlight",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-wand-magic-sparkles isActive  "></i>
        <span className="toolbar-text">Spotlight</span>
      </div>
    ),
    content: (
      <div className="toolbar-content-spot">
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-wand-magic-sparkles "></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-pen-clip"></i>
        <i className="toolbar-icon toolbar-box-icon fa-solid fa-arrows-left-right"></i>
      </div>
    ),
  },
  {
    id: "toolbar-btn-eraser",
    name: "eraser",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-eraser"></i>
        <span className="toolbar-text">Eraser</span>
      </div>
    ),
    content: null,
  },
  {
    id: "toolbar-btn-format",
    name: "format",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-regular fa-square"></i>
        <span className="toolbar-text">Format</span>
      </div>
    ),
    content: (
      <div>
        <input type="color" />
      </div>
    ),
  },
  {
    id: "toolbar-btn-undo",
    name: "undo",
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-rotate-left"></i>
        <span className="toolbar-text">Undo</span>
      </div>
    ),
    content: null,
  },
  {
    id: "toolbar-btn-redo",
    name: "redo",
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-rotate-right"></i>
        <span className="toolbar-text">Redo</span>
      </div>
    ),
    content: null,
  },
  {
    id: "toolbar-btn-clear",
    name: "clear",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-trash-can"></i>
        <span className="toolbar-text">Clear</span>
      </div>
    ),
    content: (
      <div className="toolbar-content-clear">
        <p className="toolbar-content-clear-item">Clear All Drawings</p>
        <p className="toolbar-content-clear-item">Clear My Drawings</p>
        <p className="toolbar-content-clear-item">Clear Viewer's Drawings</p>
      </div>
    ),
  },
  {
    id: "toolbar-btn-save",
    name: "save",
    active: false,
    render: (
      <div className="toolbar-item">
        <i className="toolbar-icon fa-solid fa-download">
          <Popover placement="bottom" content={contentSaveType} trigger="click">
            <i className="toolbar-icon toolbar-icon-down fa-solid fa-angle-down" />
          </Popover>
        </i>
        <span className="toolbar-text">Save</span>
      </div>
    ),
    content: (
      <div className="toolbar-content-save">
        <div className="toolbar-content-save-selected">
          <i className="toolbar-icon-save fa-solid fa-circle-check"></i>
          <p className="toolbar-content-save-text">Saved as PNG</p>
        </div>
        <label id="file-view">
          Show in the folder
          <input id="file-view" type="file" />
        </label>
      </div>
    ),
  },
];
