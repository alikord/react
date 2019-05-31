/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Keyboard
} from 'react-native'
import Header from './header'
import {Date} from 'core-js'
import Footer from './footer'
import Row from './row'

export default class App extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            value: '',
            items: [],
            dataSource: ds.cloneWithRows([])
        };
        this.handleAddItem = this.handleAddItem.bind(this);

        this.setSource = this.setSource.bind(this);
    }

    setSource(items, itemsDatasource, otherState = {}) {
        this.setState({
            items,
            dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
            ...otherState
        })
    }


    handleAddItem() {
        if (!this.state.value) return;
        const newItems = [
            ...this.state.items,
            {
                key: Date.now(),
                text: this.state.value,
            }
        ];
        this.setSource(newItems, newItems, {value: ''});
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    value={this.state.value}
                    onAddItem={this.handleAddItem}
                    onChange={value => this.setState({value})}
                    onToggleAllComplete={this.handleToggleAllComplete}
                />
                <View style={styles.content}>
                    <ListView
                        style={styles.list}
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        onScroll={() => Keyboard.dismiss()}
                        renderRow={({key, ...value}) => {
                            return <Row key={key} {...value} />
                        }}
                        renderSeparator={(sectionId, rowId) => {
                            return <View key={rowId} style={styles.separator}/>
                        }}
                    />
                </View>

                <Footer count={this.state.items.length}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#efefef'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    list: {
        backgroundColor: '#fff',
        flex: 1
    },
    separator: {
        borderWidth: 1,
        borderColor: '#006db3'
    }
});
