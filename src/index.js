import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: [
        {
          url:
            "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg",
          title: "picture"
        }
      ],
      title: "",
      url: ""
    };
  }
  handleURL = e => {
    this.setState({ url: e.target.value });
  };

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleClick = () => {
    const { url, title } = this.state;
    this.state.url && this.state.title
      ? this.setState({
          picture: [...this.state.picture, { url, title }]
        })
      : this.setState({ title: "", url: "" });
  };

  render() {
    return (
      <div className="App">
        <div>
          <input
            className="input"
            type="text"
            placeholder="picture url"
            onChange={this.handleURL}
          />
          <br />
          <input
            className="input2"
            type="text"
            placeholder="title"
            onChange={this.handleTitle}
          />
          <button onClick={this.handleClick} className="btn">
            {" "}
            Post{" "}
          </button>
        </div>
        <div>
          {this.state.picture.map((p, index) => {
            return (
              <div key={index} className="picture">
                <p>{p.title}</p>
                <img src={p.url} alt={p.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
