/**
 * created by LynnZhang on 2018/12/9
 */
import React from 'react'
import { Tabs } from 'antd';
import {view as Hoc} from '../components/higherUsage/hoc/index';
import Composition from '../components/higherUsage/composition/composition'
const TabPane = Tabs.TabPane;
export default () => {
    return <React.Fragment>
        <Tabs defaultActiveKey="1">
            <TabPane tab="HOC" key="1">
                <Hoc/>
            </TabPane>
            <TabPane tab="Composition" key="2">
                <Composition/>
            </TabPane>
        </Tabs>
    </React.Fragment>
}
