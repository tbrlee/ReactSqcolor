var destination = document.querySelector("#container");

    var Colorizer = React.createClass({
        getInitialState: function() {
          return {
              color: '',
              bgColor: ''
          }
        },
        colorValue: function(e) {
          this.setState({color: e.target.value});
        },
        setNewColor: function(e){
          this.setState({bgColor: this.state.color});
          e.preventDefault();
        },
        render: function() {
          var squareStyle = {
            backgroundColor: this.state.bgColor
          };

          return (
            <div className="colorArea">
              <div style={squareStyle} className="colorSquare"></div>

              <form onSubmit={this.setNewColor}>
                <input onChange={this.colorValue} placeholder="Enter a color value"></input>
                <button type="submit">go</button>
              </form>
            </div>
          );
        }
    });

    ReactDOM.render(
      <div>
        <Colorizer/>
      </div>,
      destination
    );