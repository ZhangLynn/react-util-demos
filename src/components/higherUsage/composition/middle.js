/**
 * created by LynnZhang on 2019/1/23
 */
import React from 'react';
export default class Middle extends React.Component {
    render() {
        return <React.Fragment>
            <div>
                I have multi components
                <div>
                    I am one
                    <div>
                        I am two
                        <div>
                            And we do not need special props and pass to Child Component
                            <div>
                                I am the Grandson
                                {this.props.grandson}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
