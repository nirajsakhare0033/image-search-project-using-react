import React from 'react';
import unsplash from '../api/unpslash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component{
        //images printing
        state = { images: [] };

        
        //asiox get to request 
        onSearchSubmit = async term => {
                const response = await unsplash.get('/search/photos', {
                        params: { query: term }
                        
                });
                //console.log(this);
                this.setState({ images: response.data.results });

                //console.log(response.data.results);

                
        } 



        render() {
                return (
                <div className='ui container' style={{marginTop:'50px'}}>   
                       <SearchBar onSearchSubmit={this.onSearchSubmit} />
                       Found: { this.state.images.length} images<hr></hr><br />
                       <ImageList images = {this.state.images}/>
                </div>
                );
               
        };


}



export default App;