import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text, Dimensions } from 'react-native';

export default class Grid extends PureComponent<any> {
  static defaultProps = {
    data: [],
    column: 4,
  };

  handleItemPress({ icon, text, onPress }: any, index: number, data: any) {
    return () => onPress({ icon, text }, index, data);
  }

  renderItem = ({ icon, text, onPress }: any, index: number, data: any) => {
    const { itemStyle, iconStyle, textStyle, column } = this.props as any;
    const width = Dimensions.get('window').width / column;
    const height = icon ? 150 / 2 : 80 / 2;

    return (
      <TouchableHighlight
        key={index}
        activeOpacity={1}
        underlayColor={'#f5f5f5'}
        onPress={this.handleItemPress({ icon, text, onPress }, index, data)}
      >
        <View style={[styles.item, { width, height }, itemStyle]}>
          {icon && <Image style={[styles.icon, iconStyle]} source={{ uri: icon }} />}
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const { data, style, renderItem } = this.props as any;
    const items = data.map(renderItem || this.renderItem);

    return <View style={[styles.wrapper, style]}>{items}</View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: Dimensions.get('window').width / 4,
    height: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 76 / 2,
    height: 76 / 2,
    marginBottom: 10 / 2,
  },
  text: {
    height: 24 / 2,
    fontSize: 24 / 2,
    color: '#333333',
  },
});
