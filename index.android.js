import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button
} from 'react-native';

class Time extends Component {
  onButtonPress = () => {

    var zDate = new Date();
    var res1 = new Date(zDate.getTime() + 104 * 60000);
    var res2 = new Date(res1.getTime() + 90 * 60000);
    var res3 = new Date(res2.getTime() + 90 * 60000);
    var res4 = new Date(res3.getTime() + 90 * 60000);
    var res5 = new Date(res4.getTime() + 90 * 60000);
    var res6 = new Date(res5.getTime() + 90 * 60000);

    var t1 = this.retDate(res1);
    var t2 = this.retDate(res2);
    var t3 = this.retDate(res3);
    var t4 = this.retDate(res4);
    var t5 = this.retDate(res5);
    var t6 = this.retDate(res6);

    this.setState({
      time1: t1,
      time2: t2,
      time3: t3,
      time4: t4,
      time5: t5,
      time6: t6
    });
  };

  retDate = (dateObj) => {
    var formatted = '';
    var pm = false;
    if (dateObj.getHours() > 12) {
      formatted = dateObj.getHours() - 12;
      pm = true;
    } else if (dateObj.getHours() < 12 && dateObj.getHours() != 0) {
      formatted = dateObj.getHours();
    } else if (dateObj.getHours() == 0) {
      formatted = "12";
    } else if (dateObj.getHours() == 12) {
      formatted = "12";
      pm = true;
    }
    if (dateObj.getMinutes() < 10) {
      formatted = formatted + ":0" + dateObj.getMinutes();
    } else {
      formatted = formatted + ":" + dateObj.getMinutes();
    }
    if (pm == true) {
      formatted = formatted + " PM";
    } else {
      formatted = formatted + " AM";
    }
    return formatted;
  }
  constructor(props) {
    super(props);
    this.state = {
      text: "hellllo"
    };
  }
  render() {
    let display = this.state.text;
    return (
      <View>
        <Button
          onPress={this.onButtonPress}
          title="ZZZ"
          accessibilityLabel="Press to discover times to go to bed"/>
        <Text style={styles.sleepText}>{this.state.time1}</Text>
        <Text style={styles.sleepText}>{this.state.time2}</Text>
        <Text style={styles.sleepText}>{this.state.time3}</Text>
        <Text style={styles.sleepText}>{this.state.time4}</Text>
        <Text style={styles.sleepText}>{this.state.time5}</Text>
        <Text style={styles.sleepText}>{this.state.time6}</Text>
      </View>
    );
  }
}

export default class sleepytime extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Time/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E52'
  },
  calculateSleep: {
    flex: 1,
    backgroundColor: '#3943B7'
  },
  sleepText: {
    color: "#78C0E0",
    fontSize: 40
  }
});

AppRegistry.registerComponent('sleepytime', () => sleepytime);
