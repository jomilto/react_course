import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Badges.css';
import Hero from '../components/Hero';
import BadgesList from '../components/BadgesList';
import Loading from '../components/Loading';

import api from '../api';

class Badges extends React.Component {
    constructor(props) {
      super(props);
      console.log('1. Constructor');
      this.state = {
        loading: true,
        error: null,
        data: undefined,
      };
    }

    componentDidMount() {
      console.log('3. componentDidMount');
      this.fetchData();
    }

    fetchData = async () => {
      this.setState({ loading: true, error: null });
      
      try {
        const data = await api.badges.list();
        this.setState({ loading: false, data: data });
      } catch (error) {
        this.setState({ loading: false, error: error });
      }
    }

    componentDidUpdate(prevProps, prevState){
      console.log('5. ComponentDidUpdate');
      console.log({
        prevProps: prevProps,
        prevState: prevProps
      });
      console.log({
        props: this.props,
        state: this.state
      });
    }

    componentWillUnmount(){
      console.log('6. componentWillUnmount');
      clearTimeout(this.timeoutId);
    }

    render() {
      console.log('2 y 4. render');

      if(this.state.loading === true) {
        return <Loading />;
      }

      if(Boolean(this.state.error) === true) {
        return `Error ${this.state.error.message}`;
      }

        return (
            <React.Fragment>
                <Hero />

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <BadgesList badges={this.state.data} />
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;