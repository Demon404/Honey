import React, {
	Component
} from 'react';

import Im from './images/Q07A2033.JPG';

class App extends Component {
	render() {
		return (
			<div className="App" style={{color:'blue',backgroundColor:'black',textAlign: 'center'}}>
        		<img src={require('./images/Q07A2033.JPG')} style={Style.imgstyle}/>
      		</div>
		);
	}
}
const Style = {
	imgstyle: {
		width: 5760 / 5,
		height: 4056 / 5,
		margin: 0,

	}
};
export default App;