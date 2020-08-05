import React, { Component  } from 'react';
import { View, StatusBar, Text, TouchableOpacity  } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      hitung:  0,
    };
  }

  masukkanAngka = (value) => {

    if(this.state.hitung == 0)
    {
      this.setState({hitung: value})
    }
    else {
      this.setState({hitung: this.state.hitung + '' + value});
    }
  }

  menghitung = () => {
    let hasil = eval(this.state.hitung);
    this.setState({hitung: hasil})
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#212121" barStyle="light-content" />

        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 10}}>
          <Text style={{color: '#FFFFFF', fontSize: 48, textAlign: 'right', color: '#f57c00'}}>{this.state.hitung}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, margin: 10}}
          onPress={() => this.setState({hitung: 0})}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'right', color: '#f57c00'}}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka('(')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(')')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka('/')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka('*')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(7)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(8)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(9)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka('+')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(4)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(5)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(6)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka('-')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(1)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(2)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(3)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.menghitung()}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}></Text>
          </View>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(0)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>0</Text>
          </TouchableOpacity>
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}></Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff5722'}}></Text>
          </View>
        </View>
      </View>
    );
  }
}

export default App;
