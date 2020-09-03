import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

// import NavBar from '../Layout/NavBar'
import Carousel from '../Layout/carousel'

import MenuList from '../MenuList/MenuList'
import './MenuListStyle.css'

export default class MymenuList extends Component {
    state = {
        lists: [],
        clickedPostId: 0
    }
    componentDidMount() {
        console.log(this.props)
        axios.get("/posts")
            .then(res => {
                console.log(res.data);
                const lists = res.data.slice(0, 5)
                const updatedLists = lists.map(item => {
                    return {
                        id: item.id,
                        title: item.title

                    }
                });
                this.setState({ lists: updatedLists })
            })

    }

    postClickHandler = (id) => {
        //this.setState({ clickedPostId: id })
        this.props.history.push('/' + id)
    }


    render() {
        const lists = this.state.lists.map(item => {

            return (<div className="MenuListStyle">
                <MenuList
                    key={item.id}
                    title={item.title}
                    postClicked={() => { this.postClickHandler(item.id) }}
                >

                </MenuList>
            </div>
            )
        })
        return (
            <section className="Lists">
                <Carousel />
                {lists}

            </section>
        )
    }
}
