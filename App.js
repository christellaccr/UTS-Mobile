import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import InfoCard from './src/components/InfoCard';
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

      {layar === 'soal1' ? (
        <View style={styles.content}>
          <Text style={styles.header}>Daftar Tugas</Text>
          <InfoCard
            title="Laporan Praktikum Mobile"
            status="selesai"
            onPress={() => Alert.alert('Detail', 'Laporan Praktikum Mobile: selesai')}
          />
          <InfoCard
            title="Project UI Aplikasi"
            status="proses"
            onPress={() => Alert.alert('Detail', 'Project UI Aplikasi: sedang diproses')}
          />
        </View>
      ) : (
        <MahasiswaScreen />
      )}
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
  content: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
});