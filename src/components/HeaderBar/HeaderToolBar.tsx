import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./HeaderToolBar.css";

type Props = {};

type State = {};

class HeaderToolBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <div className="toolbar">
          <div className="toolbar-item">
            <i className="toolbar-icon fa-solid fa-arrows-up-down-left-right">
              <span className="toolbar-text">Select</span>
            </i>
          </div>
          <div className="toolbar-item">
            <i className="toolbar-icon fa-solid fa-text-height">
              <span className="toolbar-text">Text</span>
            </i>
          </div>
          <div className="toolbar-item toolbar-item-draw" id="item-draw">
            <i className="toolbar-icon fa-solid fa-pen">
              <span className="toolbar-text">Draw</span>
            </i>
          </div>
          <div className="toolbar-box" id="box-draw">
            <div className="toolbar-list">
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-slash "></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-pencil"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-right-long"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-arrows-left-right"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-regular fa-circle"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-circle"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-square"></i>
              </div>
            </div>
          </div>
          <div className="toolbar-item toolbar-item-stamp" id="item-stamp">
            <i className="toolbar-icon toolbar-icon-draw  fa-solid fa-check">
              <span className="toolbar-text">Stamp</span>
            </i>
          </div>
          <div className="toolbar-box" id="box-stamp">
            <div className="toolbar-list toolbar-list-stamp ">
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-check"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-right-long"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-x"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-star"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-heart"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-question"></i>
              </div>
            </div>
          </div>
          <div className="toolbar-item " id="item-spotlight">
            <i className="toolbar-icon fa-solid fa-wand-magic-sparkles isActive  ">
              <span className="toolbar-text">Spotlight</span>
            </i>
          </div>
          <div className="toolbar-box" id="box-spotlight">
            <div className="toolbar-list toolbar-list-spotlight ">
              <div className="toolbar-item  ">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-wand-magic-sparkles "></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-pen-clip"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-box-icon fa-solid fa-arrows-left-right"></i>
              </div>
            </div>
          </div>
          <div className="toolbar-item">
            <i className="toolbar-icon fa-solid fa-eraser">
              <span className="toolbar-text">Eraser</span>
            </i>
          </div>
          <div className="toolbar-item" id="item-format">
            <i className="toolbar-icon fa-regular fa-square">
              <span className="toolbar-text">Format</span>
            </i>
          </div>
          <div className="toolbar-box" id="box-format">
            <div className="toolbar-list toolbar-list-format ">
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-red fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-white fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-yellow fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-limesoap fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-skyblue fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-green fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-black fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-orange fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-gray fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-brown fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-purple fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-skirretgreen fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-pumpkin fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-blue fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon toolbar-icon-pink fa-regular fa-square"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon fa-solid fa-slash "></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon fa-solid fa-bold"></i>
              </div>
              <div className="toolbar-item">
                <i className="toolbar-icon fa-solid fa-italic"></i>
              </div>
              <div className="toolbar-item">
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
            </div>
          </div>
          <div className="toolbar-item">
            <i className="toolbar-icon fa-solid fa-rotate-left">
              <span className="toolbar-text">Undo</span>
            </i>
          </div>
          <div className="toolbar-item">
            <i className="toolbar-icon fa-solid fa-rotate-right">
              <span className="toolbar-text">Redo</span>
            </i>
          </div>
          <div className="toolbar-item" id="item-clear">
            <i className="toolbar-icon fa-solid fa-trash-can">
              <span className="toolbar-text">Clear</span>
            </i>
          </div>
          <div className="toolbar-box" id="box-clear">
            <div className="toolbar-list toolbar-clear ">
              <h3 className="toolbar-clear-text">Clear All Drawings</h3>
              <h3 className="toolbar-clear-text">Clear My Drawings</h3>
              <h3 className="toolbar-clear-text">Clear viewer's Drawings</h3>
            </div>
          </div>
          <div className="toolbar-item" id="item-save">
            <i className="toolbar-icon fa-solid fa-download">
              <i className="toolbar-icon toolbar-icon-down fa-solid fa-angle-down" />
              <span className="toolbar-text">Save</span>
            </i>
          </div>
          <div className="toolbar-box" id="box-save">
            <div className="toolbar-list toolbar-save ">
              <h3>Save whiteboard as</h3>
              <span className="toolbar-save-type">PNG</span>
              <span className="toolbar-save-type">PDF</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderToolBar;
