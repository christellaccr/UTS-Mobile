import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InfoCardScreen from './src/screens/InfoCardScreen';
import MahasiswaScreen from './src/screens/MahasiswaScreen';

export default function App() {
  const [layar, setLayar] = useState('soal1');

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, layar === 'soal1' && styles.tabAktif]}
          onPress={() => setLayar('soal1')}
        >
          <Text style={styles.tabText}>Soal 1: InfoCard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, layar === 'soal2' && styles.tabAktif]}
          onPress={() => setLayar('soal2')}
        >
          <Text style={styles.tabText}>Soal 2: Mahasiswa</Text>
        </TouchableOpacity>
      </View>

      {layar === 'soal1' ? <InfoCardScreen /> : <MahasiswaScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', paddingTop: 48 },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, gap: 8 },
  tab: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#D1D5DB',
    alignItems: 'center',
  },
  tabAktif: { backgroundColor: '#93C5FD' },
  tabText: { fontWeight: '600' },
});