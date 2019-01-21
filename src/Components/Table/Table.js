import React, { Component } from 'react';
import axios from 'axios';
import './Table.css'
import TableMapper from './TableMapper/TableMapper'


export default class Table extends Component {

    constructor() {
        super();
        this.state = {
            standings: []
        }
    }

    handleGetStandings() {
        console.log('started')
        axios.get(`/api/standings`)
            .then(res => {
                console.log('returned')
                this.setState({ standings: res.data })
            })

        return (
            <div>
                {console.log(this.state.standings)}
                <TableMapper standings={this.state.standings} />
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.handleGetStandings()}
            </div >
        )
    }
}