import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Layout , Table } from 'antd'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { DragableBodyRow } from '@/Components/Drag'
import axios from 'axios' 

let { Content } = Layout;

@withRouter
@inject('store')
@observer
class HomeComponent extends React.Component{

    state={ tableDate : [], }

    componentWillMount () {
        axios( { method : 'post', url : '/dynamic/table' } )
        .then( ( { data } ) => this.setState({ tableDate :data.content }) )
        .catch( console.log )
    }

    components = {
        body: { row: DragableBodyRow, },
    }

    moveRow = (dragIndex, hoverIndex ) => {
        const { tableDate } = this.state;
        const dragRow = tableDate[dragIndex];
    
        this.setState(
            update(
                this.state, 
                {
                    tableDate: { $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]], },
                }
            ),
        );
    }

    render(){
        let columns = [
            { title : 'id',         dataIndex : 'id',       },
            { title : 'name',       dataIndex : 'name',     },
            { title : 'title',      dataIndex : 'title',    },
            { title : 'content',    dataIndex : 'content',  },
            { title : 'color',      dataIndex : 'color',    },
            { title : 'createdAt',  dataIndex : 'createdAt',},
        ]

        return (
            <Content>
                <Table 
                    bordered={ true } 
                    columns={ columns }
                    dataSource={ this.state.tableDate ? this.state.tableDate : null }
                    { ...this.state.tableDate }
                    rowKey="id"
                    components={this.components}
                    onRow={
                        (record, index ) => (
                            {
                                index,
                                moveRow : this.moveRow,
                            }
                        )
                    }
                >
                </Table>
            </Content>
        )
    }
}

const DragHomeComponent = DragDropContext(HTML5Backend)(HomeComponent);

export default DragHomeComponent;