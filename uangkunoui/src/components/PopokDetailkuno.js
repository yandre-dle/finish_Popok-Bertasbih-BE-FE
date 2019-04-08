import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string';
import { select_popok } from '../actions';

class PopokDetailkuno extends Component {
    
    componentDidMount() {
        console.log(this.props.location.search)
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        var popokId = params.popokid;
        
        // var popokId = this.props.match.params.id;
        axios.get(`http://localhost:1984/popok/getlistdetailpopok/${popokId}`)
            .then((res) => {
                this.props.select_popok(res.data[0])
            }).catch((err) => {
                console.log(err)
            })
    }

    onBtnAddToCartClick = () => {
        var { id, nama, harga, img } = this.props.popok;
        var quantity = parseInt(this.refs.tbQuantity.value);

        axios.post('http://localhost:1984/cart/getlistcart1',{
            // params: {
                username: this.props.username,
                 popokId: id   
            // }
        }).then((res) => {
            if(res.data.length > 0 )
             {
                axios.put('http://localhost:1984/cart/editcart/' + res.data[0].id, {
                    username : this.props.username,
                    popokId: id,
                    harga,
                    quantity,
                    nama,
                    img
                }).then((res) => {
                    alert('Edit Cart Success')
                    console.log('Edit Cart Success')
                    console.log(res.data);
                }).catch((err) => {
                    console.log(err)
                })
            }
            else {
                axios.post('http://localhost:1984/cart/addcart/',  {
                    username : this.props.username,
                    popokId: id,
                    harga,
                    quantity,
                    nama,
                    img
                }).then((res) => {
                    alert('Add to Cart Success!')
                    console.log('Add to Cart Success')
                    console.log(res.data.insertId);
                }).catch((err) => {
                    console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }

     render() {
        var { nama, harga, img, description, merk } = this.props.popok;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <img alt={img} src={img} className="img-responsive" />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <h1>{nama}</h1>
                        </div>
                        <div className="row">
                            <h3>{merk}</h3>
                        </div>
                        <div className="row">
                            <h2>Rp. {harga}</h2>
                        </div>
                        <div className="row">
                            <p>{description}</p>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <input type="number" ref="tbQuantity" defaultValue={1} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <input type="button" className="btn btn-success" value="Add to Cart" onClick={this.onBtnAddToCartClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { popok: state.selectedPopok, username: state.auth.username }
}

export default connect(mapStateToProps, { select_popok })(PopokDetailkuno);
