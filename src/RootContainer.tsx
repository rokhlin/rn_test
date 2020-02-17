import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import MainContainer from "./MainContainer";
import PanelContainer from "./PanelContainer";


export default class RootContainer extends Component {
    panelWidthSqueezed = '25%';
    panelWidthClosed = '0%';

    state = {
        width: this.panelWidthSqueezed
    };


    squeeze = (w) => {
        console.log('squeeze ', w);

        if (w == this.panelWidthClosed) {
            this.setState({width: this.panelWidthSqueezed})
        } else {
            this.setState({width: this.panelWidthClosed})
        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <MainContainer onSqueeze={() => this.squeeze(this.state.width)}/>
                <PanelContainer containerWidth={this.state.width}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
