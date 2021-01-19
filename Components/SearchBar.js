import React from 'react';

class SearchBar extends React.Component {

        state = {term: ''};

        onFormSubmit = event => {

                event.preventDefault();
                //console.log(this.state.term);
                this.props.onSearchSubmit(this.state.term);

        };
           
        render() {
                return (
                <div className='ui segment'>
                        <form onSubmit={this.onFormSubmit} className='ui form'>
                                <div className='field'>
                                        <label> <h1 style={{color:'orange'}}>image Search</h1></label>
                                        <input type='text' value={this.state.term} onChange={(event) => this.setState({term: event.target.value})} />
                                        
                                </div>
                                
                        </form>

                </div>
                
                );
        };
    
};



export default SearchBar;