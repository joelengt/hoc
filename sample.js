function getHOC(MyPrettyComponent) {
	return function GetHOC(props) {
		return <MyPrettyComponent getViewport={getViewport} {...props} />;
	};
}

// example 1
function setIntervalHOC(WrappedComponent) {
	return class WithSetInterval extends Component {
		componentWillMount() {
			this.intervals = [];
		}

		setInterval(...args) {
			const id = setInterval.apply(null, args);
			this.intervals.push(id);
			return id;
		}

		componentWillUnmount() {
			this.intervals.forEach(clearInterval);
		}

		render() {
			return (
				<WrappedComponent
					setInterval={this.setInterval.bind(this)}
					{...this.props}
				/>
			);
		}
	};
}

// example 2
const hightOrderComponent = WrappedComponent => {
	class HOC extends React.Component {
		componentWillMount() {
			this.intervals = [];
		}

		setInterval(...args) {
			const id = setInterval.apply(null, args);
			this.intervals.push(id);
			return id;
		}

		componentWillUnmount() {
			this.intervals.forEach(clearInterval);
		}

		render() {
			return (
				<WrappedComponent
					setInterval={this.setInterval.bind(this)}
					{...this.props}
				/>
			);
		}
	}
	
	return HOC
};



