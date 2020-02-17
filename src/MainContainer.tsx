import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

interface PassedProps extends React.Props<any> {
    onSqueeze?: object,
}
export default class MainContainer extends Component<PassedProps>{
    myMainContent;
    onSqueeze;

    constructor(props) {
        super(props);
        this.onSqueeze = this.props.onSqueeze;
        this.myMainContent = React.createRef();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <View style={styles.childOne} ref={(ref) => this.myMainContent = ref}>
            <Text>This Is a child One</Text>
            <Button title={"Expand"} onPress={() => this.onSqueeze()}/>
        </View>
    }
}

const styles = StyleSheet.create({
    childOne: {
        height: '100%',
        flex: 1,
        marginTop: 50,
        backgroundColor: '#aba942',
    },
});