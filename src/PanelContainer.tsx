import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";


interface PassedProps extends React.Props<any> {
    containerWidth: string,
    onSqueeze?: object,
}

export default class PanelContainer extends Component<PassedProps> {




    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { containerWidth } = this.props;


        return <View style={{...styles.childTwo, width: containerWidth}}>
            <Text>This Is a child Two</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    childTwo: {
        height: '100%',
        backgroundColor: '#345675',
    }
});
