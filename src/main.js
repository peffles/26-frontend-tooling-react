import React from 'react';
import ReactDom from 'react-dom';
import cowsayBrowser from 'cowsay-browser';
import faker from 'faker';
import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cowsayRender: cowsayBrowser.think({ text: 'Cowsay in React' }),
      content: 'Cowsay',
      secretState: 'App\'s state',
    };
    this.updateText = this.updateText.bind(this);
    this.updateCow = this.updateCow.bind(this);
  }

  updateText() {
    this.setState(() => {
      const newText = faker.random.words(3);
      return {
        content: newText,
        cowsayRender: cowsayBrowser.think({ text: newText }),
      };
    });
  }

  updateCow(e) {
    const currentText = this.state.content;
    const { value } = e.target;
    this.setState(() => {
      if (value === 'say') {
        return {
          cowsayRender: cowsayBrowser.say({ text: currentText }),
        };
      } 
      return {
        cowsayRender: cowsayBrowser.think({ text: currentText }),
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Generate Cowsay Lorem</h2>
        <pre>
          { this.state.cowsayRender }
          <p>Content in state: { this.state.content }</p>
          <p>Secret state: { this.state.secretState }</p>
        </pre>
        <button onClick={this.updateText}>CLICK ME</button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
