import React, { Component } from "react";
import { Popover, Button } from "antd";
import { Layout } from "antd";

import "./HeaderToolBar.css";
import { connect } from "react-redux";
import { ITool } from "../../models/listTools.model";
import { setListTools } from "../../reducers/listToolsReducer";

const { Header, Content } = Layout;

type Props = {
  listToolsState: Array<ITool>;
  setListTools: Function;
};

type State = {};

class HeaderToolBar extends Component<Props, State> {
  state = {};

  onActiveTool = (toolId: string, index: number) => {
    const { listToolsState } = this.props;
    let newListTools = [...listToolsState];
    if (newListTools[index].active !== undefined) {
      newListTools.forEach((t) => {
        if (t.active !== undefined) {
          if (t.id === toolId) {
            t.active = true;
          } else {
            t.active = false;
          }
        }
      });
    }
    this.props.setListTools(newListTools);
  };

  render() {
    const { listToolsState } = this.props;
    return (
      <Layout>
        <Header>
          {listToolsState.map((tool, index) => {
            return (
              <Popover placement="bottom" content={tool.content}>
                <Button
                  key={index}
                  onClick={() => {
                    this.onActiveTool(tool.id, index);
                  }}
                  id={tool.id}
                  className={
                    tool.active
                      ? `toolbar-btn ${tool.name}  active`
                      : `toolbar-btn ${tool.name}`
                  }
                >
                  {tool.render}
                </Button>
              </Popover>
            );
          })}
        </Header>
        <Content>
          <canvas
            style={{ width: 1024, height: 512, backgroundColor: "black" }}
          ></canvas>
        </Content>
      </Layout>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    listToolsState: state.listToolsState,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setListTools: (data: Array<ITool>) => dispatch(setListTools(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderToolBar);
