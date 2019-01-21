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
        axios.get(`/api/standings`)
            .then(res => {
                this.setState({ standings: res.data })
            })

        return (
            <div>
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