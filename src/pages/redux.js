import React from 'react';
import Todos from '../components/redux/components/todos/todos';
import Filter from '../components/redux/components/filter/filters';
import MovieListCtnr from '../components/redux/components/axios-promise/movieListCtnr';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
function Redux(props) {
    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="todo" key="1">
                    <Todos/>
                    <Filter/>
                </TabPane>
                <TabPane tab="axios-promise" key="2">
                    <MovieListCtnr/>
                </TabPane>
                <TabPane tab="Key Usage" key="3">

                </TabPane>
            </Tabs>
        </div>
    );
}

export default Redux;
