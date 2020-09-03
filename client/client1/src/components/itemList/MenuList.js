import React from 'react';
import { Button} from 'react-bootstrap';

class MenuList extends React.Component {


    render() {
        return(
          <div style={{width:"400px", marginLeft:"80px"}}>
            <div className="mb-5">
              <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                    <p>{this.props.description}</p>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div className="card-footer">
                    <Button onClick={this.props.detail} style={{borderRadius:"10px"}} variant="btn btn-primary">View Detail</Button>
                    <Button onClick={this.props.order} style={{marginLeft:"180px", borderRadius:"10px"}} variant="btn btn-primary">Order</Button>
                  </div>
              </div>
            </div>
        </div>
        )
        
    }
}


export default MenuList;